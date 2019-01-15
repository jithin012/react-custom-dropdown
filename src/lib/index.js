import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Arrow from './Arrow';
import Cross from './Cross';
import { DataAnalyser, Utils, KeyGenerator } from './utils';
import MultiSelect from './Multiselect';
import Option from './Option';

export default class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: '', //this.props.defauleSelectTitle,
			selectedMultiSelectOptions: {},
			selectedMultiSelectLabel: '',
			width: 0,
			selectedSubmenu: '',
			isCompletedMultiSelection: true,
			shouldOpenOption: false
		};
		this.wrapperRef = React.createRef();
	}
	reservedClassNames = {
		wrapper: 'ddown-wrapper',
		dropbtn: 'dropbtn',
		optionContainerClass: 'dropdown-content',
		optionClass: 'd-down-option',
		submenuClass: 'ddown-submenu',
		show: 'show',
		isSubMenu: 'is-submenu',
		isTitle: 'is-title'
	};
	longestOptionStrLength = -1;
	longestString = 'x';
	componentDidMount() {
		this.listenClickoutsideEvent();
		this.setPreselectedValue();
		this.props.autoOpen && this.setState({ shouldOpenOption: true });
	}
	componentWillReceiveProps(nextProps) {
		this.setPreselectedValue(nextProps, () => {
			nextProps.shouldResetState && this.resetState();
		});
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickoutside.bind(this));
	}
	setPreselectedValue = (nextProps, callBack) => {
		let _props = nextProps ? nextProps : this.props;
		if (_props.multiSelect) {
			this.handlePreSelectedForMultiSelection(_props, () => callBack && callBack());
		} else {
			_props.selectedValues &&
				_props.selectedValues.constructor === Object &&
				this.setState({ selectedOption: _props.selectedValues['label'] }, () => callBack && callBack());
		}
	};
	/**
	 * Make sure that "this.props.selectedValues" will be array of Objects
	 * title name present if it has "Grouping".
	 * Eg: [{
	 *      label: <label>,
	 *      value: <value>,
	 *      title: <titleName>,
	 *      acceptOnlyOne: <acceptOnlyOne>
	 *    },...]
	 */
	handlePreSelectedForMultiSelection = (_props, callBack) => {
		let tempObj = {};
		let _dataToSetState = {};
		let labelToShow = '';
		if (_props.selectedValues && _props.selectedValues.length > 0) {
			for (let i = 0; i < _props.selectedValues.length; i++) {
				tempObj = _props.selectedValues[i];
				if (DataAnalyser.containTitleField(tempObj)) {
					// To Do :: if it has accept > 1 data
					labelToShow += tempObj['label'] + ', ';
					_dataToSetState[tempObj.title] = {};
					_dataToSetState[tempObj.title][tempObj.label] = DataAnalyser.getStructuredData(
						tempObj.label,
						tempObj.value,
						tempObj.disabled,
						false,
						[],
						tempObj.title,
						true,
						tempObj.acceptOnlyOne
					);
				} else {
					labelToShow += tempObj['label'] + ', ';
					_dataToSetState[tempObj.label] = DataAnalyser.getStructuredData(
						tempObj.label,
						tempObj.value,
						tempObj.disabled
					);
				}
			}
			labelToShow = labelToShow.substr(0, labelToShow.length - 2);
			this.setState(
				{
					selectedMultiSelectLabel: labelToShow,
					selectedMultiSelectOptions: _dataToSetState,
					isCompletedMultiSelection: true
				},
				() => callBack && callBack()
			);
		} else {
			if (
				typeof _props.selectedValues != 'undefined' &&
				_props.selectedValues != null &&
				_props.selectedValues.length === 0
			) {
				this.resetState(() => callBack && callBack());
			} else callBack && callBack();
		}
	};
	/*************************************
	 *          SUB MENU
	 *************************************/
	onSubmenuMouseEnter = e => {
		this.props.onOptionHoverStart(e);
	};
	onSubmenuMouseLeave = e => {
		this.props.onOptionHoverEnd(e);
	};
	/**
	 * get the submenu container from DOM when hover on any of the Option. For the show and hide
	 */
	getSubmenuNode = e => e.target.parentNode.parentNode.parentNode;
	showSubmenu = e => {
		let mainOptionNode = null;
		let childElems = this.getSubmenuNode(e).childNodes;
		childElems.forEach(node => {
			if (this.isDropdownOptionContainer(node.classList)) mainOptionNode = node;
			if (this.isSubmenuOptionContainer(node.classList)) {
				if (!this.isOptionsVisible(node)) {
					this.setSubmenuPosition(mainOptionNode, node);
					this.showOption(node);
				}
			}
		});
	};
	/**
	 *  set position of Sub menu
	 *  Add 25 px to top
	 *  add (totalWidth -25) px to Left
	 */
	setSubmenuPosition = (parentNode, submenuOptionNode) => {
		let width = window.getComputedStyle(parentNode, null).getPropertyValue('width');
		let top = window.getComputedStyle(parentNode, null).getPropertyValue('top');
		let _left = parseInt(width) - 25 + 'px';
		let _top = parseInt(top) + 25 + 'px';
		submenuOptionNode.style.left = _left;
		submenuOptionNode.style.top = _top;
	};
	isSubmenuOptionContainer = arrayData => {
		if (typeof arrayData === 'undefined') return 0;
		return arrayData.value.indexOf(this.reservedClassNames.submenuClass) >= 0;
	};
	/**
	 * @{selectedObj} will be the object
	 * return a object with submenu Label and jsx to show the submenu list
	 */
	getSubmenuList = (selectedLabel, arrList, selectedObj) => {
		let _jsx = null;
		let len = arrList.length;
		let _tempObj = null;
		if (arrList && len > 0) {
			for (let i = 0; i < len; i++) {
				_tempObj = arrList[i];
				if (_tempObj.label === selectedLabel) {
					// submenuObj is in the format of {label: <"JEE Advanced">, value: <"JEE Advanced">}
					_jsx = _tempObj.options.map((submenuObj, index, arr) => {
						return (
							<div>
								<div
									data-key={index}
									key={index}
									className={this.props.optionClass}
									onClick={e => {
										this.onSelect(e, submenuObj.label, submenuObj, selectedObj);
									}}
									onMouseEnter={e => {
										this.onSubmenuMouseEnter(e);
									}}
									onMouseLeave={e => {
										this.onSubmenuMouseLeave(e);
									}}
								>
									{submenuObj.label}
								</div>
							</div>
						);
					});
				}
			}
			return _jsx;
		} else return [];
	};
	/*************************************
	 *          MUlTI SELECT
	 *************************************/
	clearAllMultiSelect = cb => {
		this.setState(
			{
				selectedMultiSelectOptions: {},
				selectedMultiSelectLabel: '',
				isCompletedMultiSelection: true
			},
			() => {
				typeof cb === 'function' && cb();
			}
		);
	};
	onClickClearAll = () => {
		this.setState({
			isCompletedMultiSelection: !this.props.shouldUseMultiselectApplyBtn,
			selectedMultiSelectOptions: {},
			selectedMultiSelectLabel: ''
		});
		typeof this.props.onClearAll == 'function' && this.props.onClearAll();
	};
	onMultiSelect = (e, selectedLabel, selectedObj) => {
		let tempObj = this.state.selectedMultiSelectOptions || {};
		let label = this.state.selectedMultiSelectLabel;
		let obj = {};
		if (this.shouldDeselect(selectedObj)) {
			obj = this.handleDeselect(label, tempObj, selectedLabel);
		} else {
			obj = this.handleSelect(label, tempObj, selectedLabel, selectedObj);
		}
		this.setState({
			selectedMultiSelectOptions: obj.tempObj,
			selectedMultiSelectLabel: obj.label,
			isCompletedMultiSelection: !this.props.shouldUseMultiselectApplyBtn
		});
		typeof this.props.onMultiSelect === 'function' &&
			this.props.onMultiSelect(obj.label, obj.tempObj, this.props.dropDownRef);
		if (this.props.shouldCloseOnSelectIfAcceptOne) {
			this.hideAllOptions();
		}
	};
	/**
	 *  if simple MultiSelect
	 *      {
	 *          <selectedLabel> : <selectedObj>,
	 *          <selectedLabel> : <selectedObj>...
	 *      }
	 */
	handleDeselect = (label, tempObj, selectedLabel) => {
		delete tempObj[selectedLabel];
		label = this.getLabelFromMultiselected(tempObj, false);
		return {
			label,
			tempObj
		};
	};
	handleSelect = (label, tempObj, selectedLabel, selectedObj) => {
		tempObj[selectedLabel] = selectedObj;
		label = this.getLabelFromMultiselected(tempObj, false);
		return {
			label,
			tempObj
		};
	};
	getLabelFromMultiselected = obj => {
		let label = '';
		for (let key in obj) {
			label += key + ', ';
		}
		return label.substr(0, label.length - 2);
	};
	shouldDeselect = selectedObj => {
		if (Utils.isEmptyObject(this.state.selectedMultiSelectOptions)) return false;
		let _tempStateObj = this.state.selectedMultiSelectOptions;
		for (let label in _tempStateObj) {
			if (_tempStateObj[label]['value'] === selectedObj['value']) {
				return true;
			}
		}
		return false;
	};
	hasInMultiSelected = selectedObj => {
		if (Utils.isEmptyObject(this.state.selectedMultiSelectOptions)) return false;
		let _tempStateObj = this.state.selectedMultiSelectOptions;
		for (let label in _tempStateObj) {
			if (_tempStateObj[label]['value'] === selectedObj['value']) {
				return true;
			}
		}
		return false;
	};
	onMultiSelectDone = e => {
		this.setState({
			isCompletedMultiSelection: true
		});
		this.hideAllOptions();
		typeof this.props.onMultiSelectDone === 'function' &&
			this.props.onMultiSelectDone(
				this.state.selectedMultiSelectOptions,
				this.props.dropDownRef,
				this.state.selectedMultiSelectLabel
			);
	};
	_tempMultiselectedOptions = {};
	_tempMultiselectedLabel = '';
	/*************************************
	 *          DROP DOWN
	 *************************************/
	listenClickoutsideEvent = () => {
		document.addEventListener('click', this.handleClickoutside.bind(this));
	};
	handleClickoutside = event => {
		if (!this.hasTitleClass(event.target)) {
			if (!this.isClickWithinDropdownWrapper(event.target)) {
				if (this.props.multiSelect) {
					if (!this.state.isCompletedMultiSelection) {
						if (this.props.shouldCloseOnSelectIfAcceptOne) {
							this.setState({
								isCompletedMultiSelection: true
							});
						} else {
							if (!Utils.isEmptyObject(this._tempMultiselectedOptions)) {
								this.setState({
									isCompletedMultiSelection: true,
									selectedMultiSelectOptions: this._tempMultiselectedOptions,
									selectedMultiSelectLabel: this._tempMultiselectedLabel
								});
							} else {
								this.clearAllMultiSelect();
							}
							this.hideAllOptions();
						}
					} else {
						this.hideAllOptions();
					}
				} else {
					this.hideAllOptions();
				}
			}
		}
	};
	hideAllOptions = () => {
		this.hideSubMenu();
		this.setState({ shouldOpenOption: false });
	};
	isClickWithinDropdownWrapper = target => {
		let maxLoopLimit = 15;
		let _temp = target;
		if (_temp) {
			if (this.isHtmlTag(_temp)) return false;
			if (this.isDropdownOptionContainer(_temp && _temp.classList && _temp.classList)) return true;
			for (let i = 0; i < maxLoopLimit; i++) {
				_temp = _temp && _temp.parentElement;
				if (this.isHtmlTag(_temp)) {
					return false;
				}
				if (this.isDropdownWrapper(_temp && _temp.classList && _temp.classList)) {
					return true;
				}
			}
		}
		return false;
	};
	isHtmlTag = target => {
		return target && target.tagName === 'HTML';
	};
	hasTitleClass = targetObj => targetObj && targetObj.matches('.' + this.reservedClassNames.isTitle);
	toggleDropdown = e => {
		// this.onOpenOptions(item, this.props._key && this.props._key);
		this.setState({ shouldOpenOption: !this.state.shouldOpenOption });
	};
	isDropdownWrapper = arrayData => {
		if ((arrayData && typeof arrayData === 'undefined') || arrayData === null) return 0;
		return arrayData.value.indexOf(this.reservedClassNames.wrapper) >= 0;
	};
	isDropdownOptionContainer = arrayData => {
		if (typeof arrayData === 'undefined') return 0;
		return arrayData.value.indexOf(this.reservedClassNames.optionContainerClass) >= 0;
	};
	showOption = elem => {
		elem.classList.add('show');
	};
	isOptionsVisible = elem => elem.classList.contains('show');
	hideOption = elem => elem.classList.remove('show');
	/**
	 * On open Event of the Options
	 */
	isFirstTimeOpen = true;
	WidthRequiredToshow = 0;
	onOpenOptions = (elem, _key) => {
		if (this.props.autoWidthAdjust && this.isFirstTimeOpen) {
			this.isFirstTimeOpen = false;
			this.WidthRequiredToshow = elem.offsetWidth;
		}
		this._tempMultiselectedOptions = Object.assign({}, this.state.selectedMultiSelectOptions);
		this._tempMultiselectedLabel = this.state.selectedMultiSelectLabel;
		typeof this.props.onOpenOption === 'function' && this.props.onOpenOption(_key);
	};
	onSelect = (e, selectedLabel, selectedObj, parentObject) => {
		if (!selectedObj.isTitle) {
			if (this.props.multiSelect) {
				this.onMultiSelect(e, selectedLabel, selectedObj);
			} else {
				let preSelectedOption = this.state.selectedOption;
				let _key = this.props._key && this.props._key;
				preSelectedOption !== selectedLabel && this.onChange(e, selectedLabel, _key, selectedObj, parentObject);
				this.setState({
					selectedOption: selectedLabel
				});
				typeof this.props.onSelect === 'function' &&
					this.props.onSelect(e, selectedLabel, selectedObj, _key, parentObject);
				this.hideAllOptions();
			}
		}
	};
	onChange = (e, selectedLabel, _key, selectedObj, parentObject) =>
		typeof this.props.onChange === 'function' &&
		this.props.onChange(e, selectedLabel, _key, selectedObj, parentObject);
	onHeaderHover = e => {
		typeof this.props.onHeaderHover === 'function' &&
			this.props.onHeaderHover(this.state.selectedMultiSelectOptions, this.state.selectedOption);
	};
	onTagHover = () => {
		typeof this.props.onTagHover === 'function' &&
			this.props.onTagHover(this.state.selectedMultiSelectOptions, this.state.selectedOption);
	};
	/**
	 *  Here we have 'height' issue when return an empty string.
	 *  to Fix this issue
	 *      1. return a hidden component with longest string in options
	 */
	renderHeader = () => {
		if (typeof this.props.fixedTitle === 'function')
			return this.props.fixedTitle(
				this.props.multiSelect ? this.state.selectedMultiSelectLabel : this.state.selectedOption
			);
		if (this.props.multiSelect) return this.renderHeaderForMultiselect();
		else {
			if (Utils.isEmptyString(this.state.selectedOption))
				return (this.props.defauleSelectTitle && this.renderPlaceholder()) || this.getHiddenComponent();
			else return this.state.selectedOption;
		}
	};
	renderPlaceholder = () => <span className='ddown-placeholder'>{this.props.defauleSelectTitle}</span>;
	/**
	 * title to show in case of multi select; contain close btn
	 */
	renderHeaderForMultiselect = () => {
		let selectedOptionsArray = Object.keys(this.state.selectedMultiSelectOptions);
		if (selectedOptionsArray.length > 0) {
			let titleToRender = [];
			selectedOptionsArray.map(selectedOption => {
				titleToRender.push(
					<span key={selectedOption} className='option-selected'>
						<Cross
							height={this.props.cross.width}
							width={this.props.cross.height}
							fill={this.props.cross.color}
							onClick={() => {
								let tempObj = this.state.selectedMultiSelectOptions || {};
								let label = this.state.selectedMultiSelectLabel;
								let obj = {};
								obj = this.handleDeselect(label, tempObj, selectedOption);
								this.setState({
									selectedMultiSelectOptions: obj.tempObj,
									selectedMultiSelectLabel: obj.label,
									isCompletedMultiSelection: true
								});
							}}
						/>
						<span style={{ paddingLeft: '3px' }}>{selectedOption}</span>
					</span>
				);
			});
			return <div style={{ display: 'inline-block' }}>{titleToRender}</div>;
		} else {
			return this.renderPlaceholder();
		}
	};
	getHiddenComponent = () => (
		<div style={{ opacity: '0', width: 'auto', fontWeight: '100' }}>{this.longestString}</div>
	);
	resetState = callBack => {
		this.setState(
			{
				selectedOption: ''
			},
			() => {
				this.clearAllMultiSelect(() => {
					callBack && callBack();
				});
			}
		);
	};
	/**
	 * caluculate longest String Data for "Auto Width conguration"
	 *
	 */
	checkLongestString = (optionLabel = '') => {
		if (optionLabel.length > this.longestOptionStrLength) {
			this.longestOptionStrLength = optionLabel.length;
			this.longestString = optionLabel;
		}
	};
	/**
	 * @TODO
	 * submenu - next version
	 */
	onMouseOver = (e, selectedObj) => {
		// if (selectedObj.isSubmenu) {
		// 	this.mouseOnSubmenu = false;
		// 	this.setState({ selectedSubmenu: selectedObj.label });
		// 	this.showSubmenu(e);
		// }
	};
	onMouseEnter = (e, selectedObj) => {
		// typeof this.props.onOptionHoverStart === 'function' && this.props.onOptionHoverStart(e, selectedObj);
		// this.hideSubMenu();
	};
	onMouseLeave = (e, selectedObj) => {
		typeof this.props.onOptionHoverEnd === 'function' && this.props.onOptionHoverEnd(e, selectedObj);
	};
	/**
	 *
	 * decide the wrapper width
	 *  if 'autoWidthAdjust' set false; expect coming 'wrapperClass' may set the width. If not set the width make default width to be '200px'
	 *  if 'autoWidthAdjust' is true; get the lognest string in the options and set width to "auto"
	 *
	 */
	getWrapperwidth = () => {
		let DEFAULT_WIDTH = '200px';
		if (this.props.autoWidthAdjust && Utils.isEmptyString(this.props.wrapperClass)) {
			return DEFAULT_WIDTH;
		}
		if (!this.props.autoWidthAdjust && Utils.isEmptyString(this.props.wrapperClass)) return DEFAULT_WIDTH;
		return undefined;
	};
	getHeaderWidth = () => (this.props.autoWidthAdjust && '100%') || undefined;
	getOptionContainerWidth = () => {
		return (this.props.autoWidthAdjust && !this.isFirstTimeOpen && this.WidthRequiredToshow) || undefined;
	};
	hideOptionContainer = className => {
		let elems = document.getElementsByClassName(className);
		for (let i = 0; i < elems.length; i++) {
			elems[i] && elems[i].classList && this.hideOption(elems[i]);
		}
	};
	hideSubMenu = () => this.hideOptionContainer(this.reservedClassNames.submenuClass);
	isMultiSelect = () => this.props.multiSelect;
	getOptionToRender = (currentObj, classes, isMixWithTitle, index, isSelectedOption) => {
		return (
			<Fragment key={index}>
				<Option
					{...this.props}
					classes={classes}
					optionObj={currentObj}
					isMixWithTitle={isMixWithTitle}
					index={index}
					isSelectedOption={isSelectedOption}
					isMultiSelect={this.isMultiSelect()}
					tickRequiredForSingleSelect={this.props.tickRequiredForSingleSelect}
					shouldUseRadioBtn={this.props.shouldUseRadioBtn}
					onMouseOver={this.onMouseOver}
					onSelect={this.onSelect}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
					defaultOptionClass={this.reservedClassNames.optionClass}
					autoWidthAdjust={this.props.autoWidthAdjust}
				/>
			</Fragment>
		);
	};
	isSelectedOption = currentObj => {
		return this.isMultiSelect()
			? this.hasInMultiSelected(currentObj)
			: currentObj.label === this.state.selectedOption;
	};
	getDefaultGroupingSplitter = () => <div key={KeyGenerator.getNew()} className='group-splitter' />;
	makeListAsOption = (arrayData, isMixWithTitle) => {
		let customClasses = '';
		let mainMenuList = null;
		let subMenuList = {};
		let arrLength = arrayData.length;
		let groupingSplitter = null;
		let isSelectedOption = false;
		mainMenuList = arrayData.map((currentObj, index) => {
			this.checkLongestString(currentObj.label);
			customClasses = '';
			isSelectedOption = this.isSelectedOption(currentObj);
			if (currentObj.isSubmenu) {
				customClasses = this.reservedClassNames.isSubMenu + ' ' + this.props.optionClass;
				subMenuList[currentObj.label] = this.getSubmenuList(currentObj.label, currentObj.subMenu, currentObj);
			} else if (currentObj.isTitle) {
				customClasses = this.reservedClassNames.isTitle;
			} else {
				customClasses = this.props.optionClass;
			}
			if (currentObj.isTitle && index !== 0 && index !== arrLength - 1) {
				groupingSplitter =
					(typeof this.props.groupingSpillterRenderer == 'function' &&
						this.props.groupingSpillterRenderer()) ||
					this.getDefaultGroupingSplitter();
				return [
					groupingSplitter,
					this.getOptionToRender(currentObj, customClasses, isMixWithTitle, index, isSelectedOption)
				];
			}
			return this.getOptionToRender(currentObj, customClasses, isMixWithTitle, index, isSelectedOption);
		});
		if (this.props.multiSelect) {
			mainMenuList = (
				<MultiSelect
					{...this.props}
					mainMenuList={mainMenuList}
					onMultiSelectDone={this.onMultiSelectDone}
					onClickClearAll={this.onClickClearAll}
				/>
			);
		} else {
			mainMenuList = (
				<div>
					{typeof this.props.optionHeaderer === 'function' && this.props.optionHeaderer()}
					{mainMenuList}
				</div>
			);
		}
		return { mainMenuList, subMenuList };
	};
	renderArrow = () => {
		return (
			<div
				className='arrow-zone'
				style={{
					width: this.props.arrow.width
					//transform: this.state.shouldOpenOption ? 'rotate(180deg)' : 'rotate(0deg);'
				}}
			>
				<Arrow fill={this.props.arrow.color} width={this.props.arrow.width} height={this.props.arrow.height} />
			</div>
		);
	};
	render() {
		const _dataObj = DataAnalyser.analyseInput(this.props.option, this.props.selectedValues);
		const listObj = this.makeListAsOption(_dataObj.data, _dataObj.isMixWithTitle);
		const mainMenuList = listObj.mainMenuList;
		const subMenuList = Utils.isEmptyString(this.state.selectedSubmenu)
			? []
			: listObj.subMenuList[this.state.selectedSubmenu];
		let wrapperwidth = this.getWrapperwidth();
		let headerWidth = this.getHeaderWidth();
		let optionContainerWidth = this.getOptionContainerWidth();
		let headerClass = this.reservedClassNames.dropbtn;
		headerClass += this.isMultiSelect() ? ' label-multi-table ' : ' label-single-center ';
		headerClass += this.props.headerClass ? this.props.headerClass : '';
		return (
			<div
				ref={this.wrapperRef}
				style={{ width: typeof wrapperwidth !== 'undefined' ? wrapperwidth : '' }}
				onMouseLeave={this.hideSubMenu}
				className={this.reservedClassNames.wrapper + ' ' + this.props.wrapperClass}
			>
				<div
					className={headerClass}
					onClick={this.props.disabled ? null : this.toggleDropdown}
					onMouseOver={event => {
						this.onHeaderHover();
					}}
					onMouseEnter={this.props.shouldOpenOptionsOnhover ? this.toggleDropdown : null}
					ref={refs => {
						this.headerRef = refs;
					}}
					style={{ width: typeof headerWidth !== 'undefined' ? headerWidth : '' }}
				>
					{this.renderHeader()}
					{this.props.shouldUseArrow && this.renderArrow()}
				</div>
				{this.props.headerOptionSplitterRenderer && this.props.headerOptionSplitterRenderer()}
				<div
					style={{
						width: typeof optionContainerWidth !== 'undefined' ? optionContainerWidth : '',
						display: this.state.shouldOpenOption ? 'block' : 'none'
					}}
					className={this.reservedClassNames.optionContainerClass + ' ' + this.props.optionContainerClass}
				>
					{mainMenuList}
				</div>
				<div
					style={{ width: typeof optionContainerWidth !== 'undefined' ? optionContainerWidth : '' }}
					className={this.reservedClassNames.submenuClass}
				>
					{subMenuList}
				</div>
			</div>
		);
	}
}

DropDown.defaultProps = {
	defauleSelectTitle: 'Select...', // Default Title When component init
	option: [], // option show in the drop down
	onSelect: null, // fn: callback trigger when on select of each selection of the option
	onChange: null, // fn : callback trigger when on change
	onHeaderHover: null, // fn: callback for trigger when hover on header
	onOptionHoverStart: null, // fn: callback for trigger when hover start on option
	onOptionHoverEnd: null, // fn: callback for trigger when hover end on option
	onClearAll: null, // fn: callback for click on clear All, Only for multi select
	wrapperClass: '', // This is the parent div for the drop down
	headerClass: '', // This is the class to overriding the header part
	optionContainerClass: '', // This is the container class for all options
	optionClass: '', // for overriding default options class
	autoWidthAdjust: true, // auto width adjustment of this component
	shouldResetState: false, // Use when re render the component. shouldResetState set "true" for reset the selected option to empty.

	multiSelect: false, // multi select
	shouldUseMultiselectOptionHeader: true, // render Default header part and apply btn.  Only if multiselected is true
	multiselectHeaderLabel: 'Filter By Value', // Label show as header : Only if multiselected is true and "shouldUseMultiselectOptionHeader" is true
	multiSelectHeaderClearAllLabel: 'Clear All', // Label for Clear multiselection: Only if multiselected is true "shouldUseMultiselectOptionHeader" is true
	shouldUseMultiselectApplyBtn: false,
	multiselectApplyBtnClass: '', // class for custom apply btn
	multiselectApplyBtnLabel: 'Apply', // custom apply btn label

	onMultiSelect: null, // fn:  Multi selected callback: call on each Selection:  Only if multiselected is true
	onMultiSelectDone: null, // fn: multi selected callback: call after apply btn is Click.
	groupingSpillterRenderer: null, // fn: return jsx, on between each group in the option: render just b4 title except first and last element
	headerOptionSplitterRenderer: null, // fn: return jsx, on between header and option container
	fixedTitle: null,
	dropDownRef: null,
	onOpenOption: null,
	selectedValues: null, // It can be object or array. Use Object for single select and array of Object for multi select
	shouldUseRadioBtn: false, // Radio btn is required or not For Single Select
	isAlwaysOpen: false,
	shouldCloseOnSelectIfAcceptOne: false, //close the drop down options when slect on a grouping. @Note Each grouping should be accept Only one
	autoOpen: false,
	shouldUseArrow: true,
	selectedOptionColor: '#39BB9C',

	tickRequiredForSingleSelect: false,
	tick: {
		width: 12,
		height: 12,
		color: '#50b7e8'
	},
	radio: {
		width: 12,
		height: 12,
		selectedFillColor: '#50b7e8',
		unSelectedFillColor: '#77878e'
	},
	cross: {
		width: 13,
		height: 13,
		color: '#50b7e8'
	},
	arrow: {
		color: 'gray',
		width: 12,
		height: 12
	},
	optionHeaderer: null,
	removeOptionWhenSelected: false,
	selectedOptionClass: '',
	disabled: false,
	shouldOpenOptionsOnhover: false
};
DropDown.propTypes = {
	defauleSelectTitle: PropTypes.string,
	option: PropTypes.array,
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
	onHeaderHover: PropTypes.func,
	onOptionHoverStart: PropTypes.func,
	onOptionHoverEnd: PropTypes.func,
	onClearAll: PropTypes.func,
	wrapperClass: PropTypes.string,
	headerClass: PropTypes.string,
	optionContainerClass: PropTypes.string,
	optionClass: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	shouldResetState: PropTypes.bool,
	multiSelect: PropTypes.bool,
	shouldUseMultiselectOptionHeader: PropTypes.bool,
	multiselectApplyBtnClass: PropTypes.string,
	multiselectHeaderLabel: PropTypes.string,
	multiSelectHeaderClearAllLabel: PropTypes.string,
	onMultiSelect: PropTypes.func,
	onMultiSelectDone: PropTypes.func,
	groupingSpillterRenderer: PropTypes.func,
	headerOptionSplitterRenderer: PropTypes.func,
	fixedTitle: PropTypes.func,
	dropDownRef: PropTypes.string,
	onOpenOption: PropTypes.func,
	tickRequiredForSingleSelect: PropTypes.bool,
	shouldUseRadioBtn: PropTypes.bool,
	isAlwaysOpen: PropTypes.bool,
	shouldCloseOnSelectIfAcceptOne: PropTypes.bool,
	autoOpen: PropTypes.bool,
	shouldUseArrow: PropTypes.bool,
	selectedOptionColor: PropTypes.string,
	shouldUseMultiselectApplyBtn: PropTypes.bool,
	optionHeader: PropTypes.func,
	removeOptionWhenSelected: PropTypes.bool,
	selectedOptionClass: PropTypes.string,
	tick: PropTypes.object,
	disabled: PropTypes.bool,
	shouldOpenOptionsOnhover: PropTypes.bool
};
