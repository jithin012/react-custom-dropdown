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
			isCompletedMultiSelection: true,
			isOpen: false
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
		this.props.autoOpen && this.showOption();
	}
	componentWillReceiveProps(nextProps) {
		this.setPreselectedValue(nextProps, () => {
			nextProps.shouldResetState && this.resetState();
		});
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickoutside);
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
	getSubmenuList = (selectedLabel, arrList, selectedObj) => {
		let _jsx = null;
		let len = arrList.length;
		let _tempObj = null;
		if (arrList && len > 0) {
			for (let i = 0; i < len; i++) {
				_tempObj = arrList[i];
				if (_tempObj.label === selectedLabel) {
					_jsx = _tempObj.options.map((submenuObj, index, arr) => {
						return (
							<div>
								<div
									data-key={index}
									key={index}
									className={this.props.optionClass}
									onClick={e => {
										this.onSelect(submenuObj, e, selectedObj);
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
	/**
	 *  objects are store in selectedMultiSelectOptions of the state with format of
	 *      {
	 *          <selectedLabel> : <selectedObj>,
	 *          <selectedLabel> : <selectedObj>...
	 *      }
	 *  also manage selectedMultiSelectLabel in the state
	 */
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
	onMultiSelect = (selectedOptObj, e) => {
		let tempObj = this.state.selectedMultiSelectOptions || {};
		let label = this.state.selectedMultiSelectLabel;
		let obj = {};
		if (this.shouldDeselect(selectedOptObj)) {
			obj = this.handleDeselect(label, tempObj, selectedOptObj.label);
		} else {
			obj = this.handleSelect(label, tempObj, selectedOptObj);
		}
		this.setState({
			selectedMultiSelectOptions: obj.tempObj,
			selectedMultiSelectLabel: obj.label,
			isCompletedMultiSelection: !this.props.shouldUseMultiselectApplyBtn
		});
		this.emitOnselectIfMultiselect(obj.tempObj, e);
		if (this.props.shouldCloseOnSelectIfAcceptOne) {
			this.hideOption();
		}
	};
	handleDeselect = (label, tempObj, selectedLabel) => {
		delete tempObj[selectedLabel];
		label = this.getLabelFromMultiselected(tempObj);
		return {
			label,
			tempObj
		};
	};
	handleSelect = (label, tempObj, selectedObj) => {
		tempObj[selectedObj.label] = selectedObj;
		label = this.getLabelFromMultiselected(tempObj);
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
		return Object.keys(this.state.selectedMultiSelectOptions).indexOf(selectedObj.label) > -1;
	};
	hasInMultiSelected = selectedObj => {
		if (Utils.isEmptyObject(this.state.selectedMultiSelectOptions)) return false;
		return Object.keys(this.state.selectedMultiSelectOptions).indexOf(selectedObj.label) > -1;
	};
	onMultiSelectDone = e => {
		this.setState({
			isCompletedMultiSelection: true
		});
		this.hideOption();
		this.emitOnselectIfMultiselect(this.state.selectedMultiSelectOptions, e);
	};
	_tempMultiselectedOptions = {};
	_tempMultiselectedLabel = '';
	emitOnselectIfMultiselect = (selectedObj, event) => {
		typeof this.props.onSelect === 'function' && this.props.onSelect(selectedObj, event);
	};
	/*************************************
	 *          DROP DOWN
	 *************************************/
	listenClickoutsideEvent = () => document.addEventListener('click', this.handleClickoutside);
	handleClickoutside = event => {
		if (!this.hasTitleClass(event.target)) {
			if (!this.isClickWithinDropdownWrapper(event.target)) {
				if (this.props.multiSelect) {
					if (!this.state.isCompletedMultiSelection) {
						/**
						 * todo emitOnselectIfMultiselect
						 */
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
							this.props.shouldUseMultiselectApplyBtn &&
								this.emitOnselectIfMultiselect(this._tempMultiselectedOptions);
							this.hideOption();
						}
					} else {
						this.hideOption();
					}
				} else {
					this.hideOption();
				}
			}
		}
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
		this.state.isOpen ? this.hideOption(e) : this.showOption(e);
	};
	isDropdownWrapper = arrayData => {
		if ((arrayData && typeof arrayData === 'undefined') || arrayData === null) return 0;
		return arrayData.value.indexOf(this.reservedClassNames.wrapper) >= 0;
	};
	isDropdownOptionContainer = arrayData => {
		if (typeof arrayData === 'undefined') return 0;
		return arrayData.value.indexOf(this.reservedClassNames.optionContainerClass) >= 0;
	};
	showOption = e => {
		if (!this.state.isOpen) {
			this.onOpenOption(e);
			this.setState({ isOpen: true });
		}
	};
	hideOption = e => {
		if (this.state.isOpen) {
			this.onCloseOption();
			this.setState({ isOpen: false });
		}
	};
	/**
	 * On open Event of the Options
	 */
	isFirstTimeOpen = true;
	WidthRequiredToshow = 0;
	onOpenOption = elem => {
		if (this.props.autoWidthAdjust && this.isFirstTimeOpen) {
			this.isFirstTimeOpen = false;
			this.WidthRequiredToshow = elem && elem.offsetWidth;
		}
		this._tempMultiselectedOptions = Object.assign({}, this.state.selectedMultiSelectOptions);
		this._tempMultiselectedLabel = this.state.selectedMultiSelectLabel;
		typeof this.props.onOpenOption === 'function' && this.props.onOpenOption();
	};
	onCloseOption = () => {
		typeof this.props.onCloseOption === 'function' && this.props.onCloseOption();
	};
	onSelect = (selectedOptObj, e, parentOptObj) => {
		if (!selectedOptObj.isTitle) {
			if (this.props.multiSelect) {
				this.onMultiSelect(selectedOptObj, e);
			} else {
				let preSelectedOption = this.state.selectedOption;
				preSelectedOption !== selectedOptObj.label && this.onChange(selectedOptObj, e, parentOptObj);
				this.setState({ selectedOption: selectedOptObj.label });
				typeof this.props.onSelect === 'function' && this.props.onSelect(selectedOptObj, e, parentOptObj);
				this.hideOption();
			}
		}
	};
	onChange = (selectedOptObj, e, parentOptObj) =>
		typeof this.props.onChange === 'function' && this.props.onChange(selectedOptObj, e, parentOptObj);
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
								this.emitOnselectIfMultiselect(obj.tempObj);
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
	onOptionHover = (e, selectedObj) => {
		typeof this.props.onOptionHover === 'function' && this.props.onOptionHover(e, selectedObj);
	};
	onOptionMouseEnter = (e, selectedObj) => {};
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
					onMouseOver={this.onOptionHover}
					onSelect={this.onSelect}
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
					width: this.props.arrow.width,
					transform: this.state.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
				}}
			>
				<Arrow fill={this.props.arrow.color} width={this.props.arrow.width} height={this.props.arrow.height} />
			</div>
		);
	};
	render() {
		const _dataObj = DataAnalyser.analyseInput(this.props.option, this.props.selectedValues);
		const listObj = this.makeListAsOption(_dataObj.data, _dataObj.isMixWithTitle);
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
				className={this.reservedClassNames.wrapper + ' ' + this.props.wrapperClass}
				onMouseEnter={this.props.shouldOpenOptionsOnhover ? this.showOption : null}
				onMouseLeave={this.props.shouldOpenOptionsOnhover ? this.hideOption : null}
			>
				<div
					className={headerClass}
					onClick={this.props.disabled ? null : this.toggleDropdown}
					onMouseOver={event => {
						this.onHeaderHover();
					}}
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
						display: this.state.isOpen ? 'block' : 'none'
					}}
					className={this.reservedClassNames.optionContainerClass + ' ' + this.props.optionContainerClass}
				>
					{listObj.mainMenuList}
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
	onOptionHover: null, // fn: callback for trigger when hover start on option
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

	groupingSpillterRenderer: null, // fn: return jsx, on between each group in the option: render just b4 title except first and last element
	headerOptionSplitterRenderer: null, // fn: return jsx, on between header and option container
	fixedTitle: null,
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
	onOptionHover: PropTypes.func,
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
