import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Tick from './Tick';
import RadioUnselected from './Radio-Unselected';
import RadioSelected from './Radio-Selected';
import ToolTip from './ToolTip';
//import SelectCheckBox from './SelectCheckBox';
import Arrow from './Arrow';
import { DataAnalyser, Utils, KeyGenerator } from './utils';
/**
 * To Do
 *  submenu position
 *  removeEventListener on component Will Unmount
 */
const showLabelOrder = {
	SELECTED_LABEL_ONLY: 'SELECTED_LABEL_ONLY',
	PARENT_LABEL_AND_SELECTED_LABEL: 'PARENT_LABEL_AND_SELECTED_LABEL',
	SELECTED_LABEL_AND_PARENT_LABEL: 'SELECTED_LABEL_AND_PARENT_LABEL'
};
export default class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: this.props.defauleSelectTitle,
			selectedMultiSelectOptions: {},
			selectedMultiSelectLabel: '',
			width: 0,
			selectedSubmenu: '',
			isCompletedMultiSelection: true
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
		this.props.autoOpen && this.headerRef.click();
	}
	componentWillReceiveProps(nextProps) {
		this.setPreselectedValue(nextProps, () => {
			nextProps.shouldResetState && this.resetState();
		});
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
			isCompletedMultiSelection: false,
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
			obj = this.handleDeselect(label, tempObj, selectedLabel, selectedObj);
		} else {
			obj = this.handleSelect(label, tempObj, selectedLabel, selectedObj);
		}
		this.setState({
			selectedMultiSelectOptions: obj.tempObj,
			selectedMultiSelectLabel: obj.label,
			isCompletedMultiSelection: false
		});
		typeof this.props.onMultiSelect === 'function' &&
			this.props.onMultiSelect(obj.label, obj.tempObj, this.props.dropDownRef);
		if (this.props.shouldCloseOnSelectIfAcceptOne) {
			this.hideAllOptions();
		}
	};
	/**
	 * selectedMultiSelectOptions is in the format of
	 *  1. if has grouping
	 *      {
	 *          <groupName>: {
	 *              <selectedLabel> : <selectedObj>
	 *          }...
	 *      }
	 *
	 * 2. if simple MultiSelect
	 *      {
	 *          <selectedLabel> : <selectedObj>,
	 *          <selectedLabel> : <selectedObj>...
	 *      }
	 */
	handleDeselect = (label, tempObj, selectedLabel, selectedObj) => {
		if (selectedObj.hasGroup) {
			tempObj[selectedObj.groupName] = tempObj[selectedObj.groupName] || {};
			delete tempObj[selectedObj.groupName][selectedLabel];
			label = this.getLabelFromMultiselected(tempObj, true);
		} else {
			delete tempObj[selectedLabel];
			label = this.getLabelFromMultiselected(tempObj, false);
		}
		return {
			label,
			tempObj
		};
	};
	handleSelect = (label, tempObj, selectedLabel, selectedObj) => {
		if (selectedObj.hasGroup) {
			tempObj[selectedObj.groupName] = tempObj[selectedObj.groupName] || {};
			tempObj[selectedObj.groupName] = selectedObj.acceptOnlyOne ? {} : tempObj[selectedObj.groupName];
			tempObj[selectedObj.groupName][selectedLabel] = selectedObj;
			label = this.getLabelFromMultiselected(tempObj, true);
		} else {
			tempObj[selectedLabel] = selectedObj;
			label = this.getLabelFromMultiselected(tempObj, false);
		}
		return {
			label,
			tempObj
		};
	};
	getLabelFromMultiselected = (obj, hasGroup, selectedObj) => {
		let label = '';
		if (hasGroup) {
			for (let groupLabel in obj) {
				for (let _label in obj[groupLabel]) {
					label += _label + ', ';
				}
			}
		} else {
			for (let key in obj) {
				label += key + ', ';
			}
		}
		return label.substr(0, label.length - 2);
	};
	shouldDeselect = selectedObj => {
		if (Utils.isEmptyObject(this.state.selectedMultiSelectOptions)) return false;
		if (selectedObj.hasGroup) {
			let _tempStateObj = this.state.selectedMultiSelectOptions;
			if (_tempStateObj[selectedObj.groupName] === undefined) return false;
			let groupObj = _tempStateObj[selectedObj.groupName];
			for (let label in groupObj) {
				if (groupObj[label]['value'] === selectedObj['value']) {
					return true;
				}
			}
			return false;
		} else {
			let _tempStateObj = this.state.selectedMultiSelectOptions;
			for (let label in _tempStateObj) {
				if (_tempStateObj[label]['value'] === selectedObj['value']) {
					return true;
				}
			}
		}
		return false;
	};
	hasInMultiSelected = selectedObj => {
		if (Utils.isEmptyObject(this.state.selectedMultiSelectOptions)) return false;
		let _tempStateObj = this.state.selectedMultiSelectOptions;
		if (selectedObj.hasGroup) {
			for (let label in _tempStateObj[selectedObj.groupName]) {
				if (_tempStateObj[selectedObj.groupName][label]['value'] === selectedObj['value']) {
					return true;
				}
			}
			return false;
		} else {
			for (let label in _tempStateObj) {
				if (_tempStateObj[label]['value'] === selectedObj['value']) {
					return true;
				}
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
	shouldOpen = true;
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
		this.shouldOpen = true;
		this.hideMainMenu();
		this.hideSubMenu();
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
		this.hideMainMenu(true);
		let childElems = this.getWrapperElement(e).childNodes;
		childElems.forEach(item => {
			if (this.isDropdownOptionContainer(item.classList)) {
				if (this.shouldOpen) {
					this.shouldOpen = false;
					this.showOption(item);
					this.onOpenOptions(item, this.props._key && this.props._key);
				} else {
					this.shouldOpen = true;
					this.hideSubMenu();
					this.hideOption(item);
				}
			}
		});
	};
	getWrapperElement = event => {
		let _target = event.target.parentElement;
		let a = 0;
		while (!_target.classList.contains(this.reservedClassNames.wrapper) && a < 15) {
			_target = _target.parentElement;
			a++;
		}
		return _target;
	};
	isDropdownWrapper = arrayData => {
		if ((arrayData && typeof arrayData === 'undefined') || arrayData === null) return 0;
		return arrayData.value.indexOf(this.reservedClassNames.wrapper) >= 0;
	};
	isDropdownOptionContainer = arrayData => {
		if (typeof arrayData === 'undefined') return 0;
		return arrayData.value.indexOf(this.reservedClassNames.optionContainerClass) >= 0;
	};
	toggleClass = elem => elem.toggle('show');
	showOption = elem => elem.classList.add('show');
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
					selectedOption: this.getLabelToShowOnSingleSelect(selectedLabel, parentObject)
				});
				typeof this.props.onSelect === 'function' &&
					this.props.onSelect(e, selectedLabel, selectedObj, _key, parentObject);
				this.hideAllOptions();
			}
		}
	};
	getLabelToShowOnSingleSelect = (selectedLabel, parentObject) => {
		if (this.props.orderToShowLabelIfSubmenu === showLabelOrder.PARENT_LABEL_AND_SELECTED_LABEL)
			return parentObject ? parentObject.label + ' ' + selectedLabel : selectedLabel;
		if (this.props.orderToShowLabelIfSubmenu === showLabelOrder.SELECTED_LABEL_AND_PARENT_LABEL)
			return parentObject ? selectedLabel + ' ' + parentObject.label : selectedLabel;
		if (this.props.orderToShowLabelIfSubmenu === showLabelOrder.SELECTED_LABEL_ONLY) return selectedLabel;
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
	getTitle = () => {
		if (typeof this.props.fixedTitle === 'function')
			return this.props.fixedTitle(
				this.props.multiSelect ? this.state.selectedMultiSelectLabel : this.state.selectedOption
			);
		if (this.props.multiSelect) {
			return this.getHiddenComponent();
		} else {
			if (this.props.multiSelect) {
				return this.getHiddenComponent();
			} else {
				if (Utils.isEmptyString(this.state.selectedOption))
					return this.props.defauleSelectTitle || this.getHiddenComponent();
				else return this.state.selectedOption;
			}
		}
	};
	getHiddenComponent = () => {
		return <div style={{ opacity: '0', width: 'auto', fontWeight: '100' }}>{this.longestString}</div>;
	};
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
	checkLongestString = optionLabel => {
		if (optionLabel.length > this.longestOptionStrLength) {
			this.longestOptionStrLength = optionLabel.length;
			this.longestString = optionLabel;
		}
	};
	onMouseOver = (e, selectedLabel, selectedObj) => {
		if (selectedObj.isSubmenu) {
			this.mouseOnSubmenu = false;
			this.setState({ selectedSubmenu: selectedLabel });
			this.showSubmenu(e);
		}
	};
	onMouseEnter = (e, selectedLabel, selectedObj) => {
		typeof this.props.onOptionHoverStart === 'function' && this.props.onOptionHoverStart(e, selectedObj);
		this.hideSubMenu();
	};
	onMouseLeave = (e, selectedLabel, selectedObj) => {
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
	getHeaderWidth = () => (this.props.autoWidthAdjust && 'auto') || undefined;
	getOptionContainerWidth = () => {
		return (this.props.autoWidthAdjust && !this.isFirstTimeOpen && this.WidthRequiredToshow) || undefined;
	};
	hideOptionContainer = className => {
		let elems = document.getElementsByClassName(className);
		for (let i = 0; i < elems.length; i++) {
			elems[i] && elems[i].classList && this.hideOption(elems[i]);
		}
	};
	hideMainMenu = (forceClose = true) => {
		forceClose && this.hideOptionContainer(this.reservedClassNames.optionContainerClass);
		let childElems;
		if (!forceClose) {
			let elems = document.getElementsByClassName(this.reservedClassNames.wrapper);
			for (let i = 0; i < elems.length; i++) {
				if (this.wrapperRef.current === elems[i] && this.props.isAlwaysOpen) {
					continue;
				}
				childElems = elems[i].childNodes;
				childElems.forEach(item => {
					if (this.isDropdownOptionContainer(item.classList) && this.wrapperRef.current === elems[i]) {
						this.hideOption(item);
					}
				});
			}
		}
	};
	hideSubMenu = () => this.hideOptionContainer(this.reservedClassNames.submenuClass);
	isMultiSelect = () => this.props.multiSelect;
	tickRequiredForSingleSelect = () => this.props.tickRequiredForSingleSelect;
	shouldUseRadioBtn = () => this.props.shouldUseRadioBtn;
	getDivBox = (marginLeft = '6px', marginRight = '6px') => {
		return <div style={{ marginLeft: marginLeft, marginRight: marginRight }} />;
	};
	getRadioBtnIfSingleSelect = (currentObj, isSelectedOption, selectedOptionColor) => {
		if (!this.isMultiSelect()) {
			if (this.shouldUseRadioBtn()) {
				if (isSelectedOption)
					return (
						<RadioSelected
							width={12}
							height={12}
							stroke={selectedOptionColor ? selectedOptionColor : ''}
							onClick={e => {
								this.onSelect(e, currentObj['label'], currentObj);
							}}
						/>
					);
				return (
					<RadioUnselected
						width={12}
						height={12}
						onClick={e => {
							this.onSelect(e, currentObj['label'], currentObj);
						}}
					/>
				);
			}
			return null;
		}
		return null;
	};
	getTickIfSingleSelected = (isSelectedOption, selectedOptionColor) => {
		if (!this.isMultiSelect()) {
			if (this.tickRequiredForSingleSelect()) {
				if (isSelectedOption)
					return (
						<Tick
							width={12}
							height={12}
							fill={selectedOptionColor ? selectedOptionColor : ''}
							stroke={selectedOptionColor ? selectedOptionColor : ''}
						/>
					);
				else return this.getDivBox();
			}
			return null;
		}
		return null;
	};
	getTickIfMultiSelected = (isSubMenu, isTitle, isSelectedOption, selectedOptionColor) => {
		if (this.isMultiSelect()) {
			return !isSubMenu && !isTitle && isSelectedOption ? (
				<Tick
					width={12}
					height={12}
					fill={selectedOptionColor ? selectedOptionColor : ''}
					stroke={selectedOptionColor ? selectedOptionColor : ''}
				/>
			) : (
				this.getDivBox()
			);
		}
		return null;
	};
	getDefaultOptionClass = () => {
		return this.reservedClassNames.optionClass;
	};
	getTitleAsOption = (classes, currentObj, index) => {
		return (
			<div key={`${index}`} className={classes}>
				{currentObj.label}
			</div>
		);
	};
	getLabelName = labelName => {
		if (labelName.length > 19 && !this.props.autoWidthAdjust) {
			return <ToolTip text={labelName}>{labelName.substr(0, 16) + '... '}</ToolTip>;
		} else {
			return labelName;
		}
	};
	getOptionToRender = (isSubMenu, isTitle, classes, currentObj, isMixWithTitle, index, isSelectedOption) => {
		if (isTitle) {
			return this.getTitleAsOption(classes, currentObj, index);
		} else {
			let className = 'option-holder-wrapper';
			if (
				this.isMultiSelect() ||
				this.tickRequiredForSingleSelect() ||
				this.shouldUseRadioBtn() ||
				isMixWithTitle
			)
				className = className + ' option-holder';
			if (currentObj.isDisabled) classes = classes + ' option-holder-disabled';
			return (
				<div
					className={className}
					onMouseOver={e => {
						this.onMouseOver(e, currentObj.label, currentObj);
					}}
					key={`${index}`}
					onClick={e => {
						//isDisabled
						if (!currentObj.isSubmenu && !currentObj.isDisabled)
							this.onSelect(e, currentObj.label, currentObj);
					}}
					onMouseEnter={e => {
						this.onMouseEnter(e, currentObj.label, currentObj);
					}}
					onMouseLeave={e => {
						this.onMouseLeave(e, currentObj.label, currentObj);
					}}
					ref={refs => {
						// To Do with ref
					}}
				>
					{this.getTickIfMultiSelected(isSubMenu, isTitle, isSelectedOption, this.props.selectedOptionColor)}
					{this.getTickIfSingleSelected(isSelectedOption, this.props.selectedOptionColor)}
					{this.getRadioBtnIfSingleSelect(currentObj, isSelectedOption, this.props.selectedOptionColor)}
					<div
						data-key={currentObj.value}
						key={currentObj.value}
						className={this.getDefaultOptionClass() + ' ' + classes}
						// style = {this.getSelectedOptionStyle(isSelectedOption)}
					>
						{this.getLabelName(currentObj.label)}
					</div>
				</div>
			);
		}
	};
	getSelectedOptionStyle = isSelectedOption => {
		return isSelectedOption
			? this.props.selectedOptionColor
				? { color: this.props.selectedOptionColor }
				: null
			: null;
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
		mainMenuList = arrayData.map((currentObj, index, arr) => {
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
					(this.props.groupingSpillterRenderer && this.props.groupingSpillterRenderer()) ||
					this.getDefaultGroupingSplitter();
				return [
					groupingSplitter,
					this.getOptionToRender(
						currentObj.isSubmenu,
						currentObj.isTitle,
						customClasses,
						currentObj,
						isMixWithTitle,
						index,
						isSelectedOption
					)
				];
			}
			return this.getOptionToRender(
				currentObj.isSubmenu,
				currentObj.isTitle,
				customClasses,
				currentObj,
				isMixWithTitle,
				index,
				isSelectedOption
			);
		});
		if (this.props.multiSelect) {
			if (this.props.isRequiredDefaultMultiselectDesign) {
				let header = (
					<div className='ddown-multisel-header'>
						<div className='ddown-multisel-header-label'>{this.props.multiselectHeaderLabel}</div>
						<div className='ddown-multisel-header-clear-all' onClick={this.onClickClearAll}>
							{this.props.multiSelectHeaderClearAllLabel}
						</div>
					</div>
				);
				mainMenuList = (
					<div>
						{header}
						{mainMenuList}
						<div
							className='ddown-mutilsel-btn'
							onClick={e => {
								this.onMultiSelectDone();
							}}
						>
							APPLY
						</div>
					</div>
				);
			} else
				mainMenuList = (
					<div>
						{this.props.multiselectHeaderRenderer && this.props.multiselectHeaderRenderer()}
						{mainMenuList}
						{this.getCustomApplyBtn()}
						{/* {this.props.multiselectBtnRenderer && this.props.multiselectBtnRenderer()} */}
					</div>
				);
		} else {
			if (!Utils.isEmptyString(this.props.singleSelectHeaderText)) {
				let header = (
					<div className={'ddown-header ' + this.props.singleSelectHeaderClass}>
						{this.props.singleSelectHeaderText}
					</div>
				);
				mainMenuList = (
					<div>
						{header}
						{mainMenuList}
					</div>
				);
			}
		}
		return { mainMenuList, subMenuList };
	};
	getCustomApplyBtn = () => {
		if (this.props.multiselectBtnClass)
			return (
				<div
					className={this.props.multiselectBtnClass ? this.props.multiselectBtnClass : ''}
					onClick={e => {
						this.onMultiSelectDone();
					}}
				>
					{this.props.multiselectBtnLabel ? this.props.multiselectBtnLabel : 'APPLY'}
				</div>
			);
		else return null;
	};
	getArrowBtn = () => {
		if (!this.props.shouldUseArrow) return null;
		return (
			<div className='arrow-zone'>
				<Arrow />
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
		return (
			<div
				ref={this.wrapperRef}
				style={{ width: typeof wrapperwidth !== 'undefined' ? wrapperwidth : '' }}
				onMouseLeave={this.hideSubMenu}
				className={this.reservedClassNames.wrapper + ' ' + this.props.wrapperClass}
			>
				<div
					className={this.reservedClassNames.dropbtn + ' ' + this.props.headerClass}
					onClick={this.toggleDropdown}
					onMouseOver={() => {
						this.onHeaderHover();
					}}
					ref={refs => {
						this.headerRef = refs;
						// hoverIntent(refs, () => {
						// 	this.onTagHover();
						// });
					}}
					style={{ width: typeof headerWidth !== 'undefined' ? headerWidth : '' }}
				>
					{this.getTitle()}
					{this.getArrowBtn()}
				</div>
				{this.props.headerOptionSplitterRenderer && this.props.headerOptionSplitterRenderer()}
				<div
					style={{ width: typeof optionContainerWidth !== 'undefined' ? optionContainerWidth : '' }}
					className={this.reservedClassNames.optionContainerClass + '  ' + this.props.optionContainerClass}
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
	defauleSelectTitle: '', // Default Title When component init
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
	isRequiredDefaultMultiselectDesign: true, // render Default header part and apply btn.  Only if multiselected is true
	multiselectHeaderLabel: 'Filter By Value', // Label show as header : Only if multiselected is true and "isRequiredDefaultMultiselectDesign" is true
	multiSelectHeaderClearAllLabel: 'Clear All', // Label for Clear multiselection: Only if multiselected is true "isRequiredDefaultMultiselectDesign" is true
	multiselectBtnClass: '', // class for custom apply btn
	multiselectBtnLabel: '', // custom apply btn label
	multiselectHeaderRenderer: null, // fn : return jsx :: use instead of header part in the options . Only if multiselected is true
	onMultiSelect: null, // fn:  Multi selected callback: call on each Selection:  Only if multiselected is true
	onMultiSelectDone: null, // fn: multi selected callback: call after apply btn is Click.
	groupingSpillterRenderer: null, // fn: return jsx, on between each group in the option: render just b4 title except first and last element
	headerOptionSplitterRenderer: null, // fn: return jsx, on between header and option container
	fixedTitle: null,
	dropDownRef: null,
	onOpenOption: null,
	orderToShowLabelIfSubmenu: 'SELECTED_LABEL_ONLY',
	selectedValues: null, // It can be object or array. Use Object for single select and array of Object for multi select
	tickRequiredForSingleSelect: false,
	shouldUseRadioBtn: false, // Radio btn is required or not For Single Select
	isAlwaysOpen: false,
	shouldCloseOnSelectIfAcceptOne: false, //close the drop down options when slect on a grouping. @Note Each grouping should be accept Only one
	autoOpen: false,
	shouldUseArrow: false,
	singleSelectHeaderText: '',
	singleSelectHeaderClass: '',
	selectedOptionColor: '#39BB9C'
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
	isRequiredDefaultMultiselectDesign: PropTypes.bool,
	multiselectHeaderRenderer: PropTypes.func,
	multiselectBtnClass: PropTypes.string,
	multiselectHeaderLabel: PropTypes.string,
	multiSelectHeaderClearAllLabel: PropTypes.string,
	onMultiSelect: PropTypes.func,
	onMultiSelectDone: PropTypes.func,
	groupingSpillterRenderer: PropTypes.func,
	headerOptionSplitterRenderer: PropTypes.func,
	fixedTitle: PropTypes.func,
	dropDownRef: PropTypes.string,
	onOpenOption: PropTypes.func,
	orderToShowLabelIfSubmenu: PropTypes.string,
	tickRequiredForSingleSelect: PropTypes.bool,
	shouldUseRadioBtn: PropTypes.bool,
	isAlwaysOpen: PropTypes.bool,
	shouldCloseOnSelectIfAcceptOne: PropTypes.bool,
	autoOpen: PropTypes.bool,
	shouldUseArrow: PropTypes.bool,
	singleSelectHeaderText: PropTypes.string,
	singleSelectHeaderClass: PropTypes.string,
	selectedOptionColor: PropTypes.string
};
