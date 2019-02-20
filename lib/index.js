'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

require('./index.scss');

var _Arrow = _interopRequireDefault(require('./Arrow'));

var _Cross = _interopRequireDefault(require('./Cross'));

var _utils = require('./utils');

var _Multiselect = _interopRequireDefault(require('./Multiselect'));

var _Option = _interopRequireDefault(require('./Option'));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	} else {
		var newObj = {};
		if (obj != null) {
			for (var key in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					var desc =
						Object.defineProperty && Object.getOwnPropertyDescriptor
							? Object.getOwnPropertyDescriptor(obj, key)
							: {};
					if (desc.get || desc.set) {
						Object.defineProperty(newObj, key, desc);
					} else {
						newObj[key] = obj[key];
					}
				}
			}
		}
		newObj.default = obj;
		return newObj;
	}
}

function _instanceof(left, right) {
	if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
		return right[Symbol.hasInstance](left);
	} else {
		return left instanceof right;
	}
}

function _typeof(obj) {
	if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
		_typeof = function _typeof(obj) {
			return typeof obj;
		};
	} else {
		_typeof = function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
				? 'symbol'
				: typeof obj;
		};
	}
	return _typeof(obj);
}

function _extends() {
	_extends =
		Object.assign ||
		function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		};
	return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
	if (!_instanceof(instance, Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ('value' in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

function _possibleConstructorReturn(self, call) {
	if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
		return call;
	}
	return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
	_getPrototypeOf = Object.setPrototypeOf
		? Object.getPrototypeOf
		: function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
		  };
	return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
	if (self === void 0) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}
	return self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError('Super expression must either be null or a function');
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: { value: subClass, writable: true, configurable: true }
	});
	if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
	_setPrototypeOf =
		Object.setPrototypeOf ||
		function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
	return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}
	return obj;
}

var DropDown =
	/*#__PURE__*/
	(function(_Component) {
		_inherits(DropDown, _Component);

		function DropDown(_props) {
			var _this;

			_classCallCheck(this, DropDown);

			_this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).call(this, _props));

			_defineProperty(_assertThisInitialized(_this), 'longestOptionStrLength', -1);

			_defineProperty(_assertThisInitialized(_this), 'longestString', 'x');

			_defineProperty(_assertThisInitialized(_this), 'setPreselectedValue', function(nextProps, callBack) {
				var props = nextProps ? nextProps : _this.props;

				if (props.multiSelect) {
					_this.handlePreSelectedForMultiSelection(props, function() {
						return callBack && callBack();
					});
				} else {
					props.selectedValues &&
						props.selectedValues.constructor === Object &&
						_this.setState(
							{
								selectedOption: props.selectedValues['label']
							},
							function() {
								return callBack && callBack();
							}
						);
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'handlePreSelectedForMultiSelection', function(
				props,
				callBack
			) {
				var tempObj = {};
				var dataToSetState = {};
				var labelToShow = '';

				if (props.selectedValues && props.selectedValues.length > 0) {
					for (var i = 0; i < props.selectedValues.length; i++) {
						tempObj = props.selectedValues[i];

						if (_utils.DataAnalyser.containTitleField(tempObj)) {
							// To Do :: if it has accept > 1 data
							labelToShow += tempObj['label'] + ', ';
							dataToSetState[tempObj.title] = {};
							dataToSetState[tempObj.title][tempObj.label] = _utils.DataAnalyser.getStructuredData(
								tempObj.label,
								tempObj.value,
								tempObj.disabled,
								false,
								[],
								tempObj.title,
								true
							);
						} else {
							labelToShow += tempObj['label'] + ', ';
							dataToSetState[tempObj.label] = _utils.DataAnalyser.getStructuredData(
								tempObj.label,
								tempObj.value,
								tempObj.disabled
							);
						}
					}

					labelToShow = labelToShow.substr(0, labelToShow.length - 2);

					_this.setState(
						{
							selectedMultiSelectLabel: labelToShow,
							selectedMultiSelectOptions: dataToSetState,
							isCompletedMultiSelection: true
						},
						function() {
							return callBack && callBack();
						}
					);
				} else {
					if (
						typeof props.selectedValues != 'undefined' &&
						props.selectedValues != null &&
						props.selectedValues.length === 0
					) {
						_this.resetState(function() {
							return callBack && callBack();
						});
					} else callBack && callBack();
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'getSubmenuList', function(
				selectedLabel,
				arrList,
				selectedObj
			) {
				var jsx = null;
				var tempObj = null;

				if (arrList && arrList.length > 0) {
					var len = arrList.length;

					for (var i = 0; i < len; i++) {
						tempObj = arrList[i];

						if (tempObj.label === selectedLabel) {
							jsx = tempObj.options.map(function(submenuObj, index, arr) {
								return _react.default.createElement(
									'div',
									null,
									_react.default.createElement(
										'div',
										{
											'data-key': index,
											key: index,
											className: _this.props.optionClass,
											onClick: function onClick(e) {
												_this.onSelect(submenuObj, e, selectedObj);
											}
										},
										submenuObj.label
									)
								);
							});
						}
					}

					return jsx;
				} else return [];
			});

			_defineProperty(_assertThisInitialized(_this), 'clearAllMultiSelect', function(cb) {
				_this.setState(
					{
						selectedMultiSelectOptions: {},
						selectedMultiSelectLabel: '',
						isCompletedMultiSelection: true
					},
					function() {
						typeof cb === 'function' && cb();
					}
				);
			});

			_defineProperty(_assertThisInitialized(_this), 'onClickClearAll', function() {
				_this.setState({
					isCompletedMultiSelection: !_this.props.shouldUseMultiselectApplyBtn,
					selectedMultiSelectOptions: {},
					selectedMultiSelectLabel: ''
				});

				_this.emitOnselectIfMultiselect({});

				typeof _this.props.onClearAll == 'function' && _this.props.onClearAll();
			});

			_defineProperty(_assertThisInitialized(_this), 'onMultiSelect', function(selectedOptObj, e) {
				var tempObj = _this.state.selectedMultiSelectOptions || {};
				var label = _this.state.selectedMultiSelectLabel;
				var obj = {};

				if (_this.shouldDeselect(selectedOptObj)) {
					obj = _this.handleDeselect(label, tempObj, selectedOptObj.label);
				} else {
					obj = _this.handleSelect(label, tempObj, selectedOptObj);
				}

				_this.setState({
					selectedMultiSelectOptions: obj.tempObj,
					selectedMultiSelectLabel: obj.label,
					isCompletedMultiSelection: !_this.props.shouldUseMultiselectApplyBtn
				});

				_this.emitOnselectIfMultiselect(obj.tempObj, e);
			});

			_defineProperty(_assertThisInitialized(_this), 'handleDeselect', function(label, tempObj, selectedLabel) {
				delete tempObj[selectedLabel];
				label = _this.getLabelFromMultiselected(tempObj);
				return {
					label: label,
					tempObj: tempObj
				};
			});

			_defineProperty(_assertThisInitialized(_this), 'handleSelect', function(label, tempObj, selectedObj) {
				if (_this.props.shouldAcceptOneFromGroup && selectedObj.hasGroup) {
					for (var selectedLabel in tempObj) {
						if (tempObj[selectedLabel]['groupName'] === selectedObj.groupName)
							delete tempObj[selectedLabel];
					}
				}

				tempObj[selectedObj.label] = selectedObj;
				label = _this.getLabelFromMultiselected(tempObj);
				return {
					label: label,
					tempObj: tempObj
				};
			});

			_defineProperty(_assertThisInitialized(_this), 'getLabelFromMultiselected', function(obj) {
				var label = '';

				for (var key in obj) {
					label += key + ', ';
				}

				return label.substr(0, label.length - 2);
			});

			_defineProperty(_assertThisInitialized(_this), 'shouldDeselect', function(selectedObj) {
				if (_utils.Utils.isEmptyObject(_this.state.selectedMultiSelectOptions)) return false;
				return Object.keys(_this.state.selectedMultiSelectOptions).indexOf(selectedObj.label) > -1;
			});

			_defineProperty(_assertThisInitialized(_this), 'hasInMultiSelected', function(selectedObj) {
				if (_utils.Utils.isEmptyObject(_this.state.selectedMultiSelectOptions)) return false;
				return Object.keys(_this.state.selectedMultiSelectOptions).indexOf(selectedObj.label) > -1;
			});

			_defineProperty(_assertThisInitialized(_this), 'onMultiSelectDone', function(e) {
				_this.setState({
					isCompletedMultiSelection: true
				});

				_this.hideOption();

				_this.emitOnselectIfMultiselect(_this.state.selectedMultiSelectOptions, e);
			});

			_defineProperty(_assertThisInitialized(_this), 'tempMultiselectedOptions', {});

			_defineProperty(_assertThisInitialized(_this), 'tempMultiselectedLabel', '');

			_defineProperty(_assertThisInitialized(_this), 'emitOnselectIfMultiselect', function(selectedObj, event) {
				typeof _this.props.onSelect === 'function' && _this.props.onSelect(selectedObj, event);
			});

			_defineProperty(_assertThisInitialized(_this), 'listenClickoutsideEvent', function() {
				return document.addEventListener('click', _this.handleClickoutside);
			});

			_defineProperty(_assertThisInitialized(_this), 'handleClickoutside', function(event) {
				if (!_this.hasTitleClass(event.target)) {
					if (!_this.isClickWithinDropdownWrapper(event.target)) {
						if (_this.props.multiSelect) {
							if (!_this.state.isCompletedMultiSelection) {
								if (!_utils.Utils.isEmptyObject(_this.tempMultiselectedOptions)) {
									_this.setState({
										isCompletedMultiSelection: true,
										selectedMultiSelectOptions: _this.tempMultiselectedOptions,
										selectedMultiSelectLabel: _this.tempMultiselectedLabel
									});
								} else {
									_this.clearAllMultiSelect();
								}

								_this.props.shouldUseMultiselectApplyBtn &&
									_this.emitOnselectIfMultiselect(_this.tempMultiselectedOptions);

								_this.hideOption();
							} else {
								_this.hideOption();
							}
						} else {
							_this.hideOption();
						}
					}
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'isClickWithinDropdownWrapper', function(target) {
				var maxLoopLimit = 15;
				var temp = target;

				if (temp) {
					if (_this.isHtmlTag(temp)) return false;
					if (_this.isDropdownOptionContainer(temp && temp.classList)) return true;

					for (var i = 0; i < maxLoopLimit; i++) {
						temp = temp && temp.parentElement;

						if (_this.isHtmlTag(temp)) {
							return false;
						}

						if (_this.isDropdownWrapper(temp && temp.classList)) {
							return true;
						}
					}
				}

				return false;
			});

			_defineProperty(_assertThisInitialized(_this), 'isHtmlTag', function(target) {
				return target && target.tagName === 'HTML';
			});

			_defineProperty(_assertThisInitialized(_this), 'hasTitleClass', function(targetObj) {
				return targetObj && targetObj.matches('.' + _utils.reservedClassNames.isTitle);
			});

			_defineProperty(_assertThisInitialized(_this), 'toggleDropdown', function(e) {
				return _this.state.isOpen ? _this.hideOption() : _this.showOption(e);
			});

			_defineProperty(_assertThisInitialized(_this), 'isDropdownWrapper', function(arrayData) {
				if ((arrayData && typeof arrayData === 'undefined') || arrayData === null) return 0;
				return arrayData.value.indexOf(_utils.reservedClassNames.wrapper) >= 0;
			});

			_defineProperty(_assertThisInitialized(_this), 'isDropdownOptionContainer', function(arrayData) {
				if (typeof arrayData === 'undefined') return 0;
				return arrayData.value.indexOf(_utils.reservedClassNames.optionContainer) > -1;
			});

			_defineProperty(_assertThisInitialized(_this), 'showOption', function(e) {
				if (!_this.state.isOpen) {
					_this.onOpenOption(e);

					_this.setState({
						isOpen: true
					});
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'hideOption', function() {
				if (_this.state.isOpen) {
					_this.onCloseOption();

					_this.setState({
						isOpen: false
					});
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'isFirstTimeOpen', true);

			_defineProperty(_assertThisInitialized(_this), 'WidthRequiredToshow', 0);

			_defineProperty(_assertThisInitialized(_this), 'onOpenOption', function(elem) {
				if (_this.props.autoWidthAdjust && _this.isFirstTimeOpen) {
					_this.isFirstTimeOpen = false;
					_this.WidthRequiredToshow = elem && elem.offsetWidth;
				}

				_this.tempMultiselectedOptions = Object.assign({}, _this.state.selectedMultiSelectOptions);
				_this.tempMultiselectedLabel = _this.state.selectedMultiSelectLabel;
				typeof _this.props.onOpenOption === 'function' && _this.props.onOpenOption();
			});

			_defineProperty(_assertThisInitialized(_this), 'onCloseOption', function() {
				return typeof _this.props.onCloseOption === 'function' && _this.props.onCloseOption();
			});

			_defineProperty(_assertThisInitialized(_this), 'onSelect', function(selectedOptObj, e, parentOptObj) {
				if (!selectedOptObj.isTitle) {
					if (_this.props.multiSelect) {
						_this.onMultiSelect(selectedOptObj, e);
					} else {
						var preSelectedOption = _this.state.selectedOption;
						preSelectedOption !== selectedOptObj.label && _this.onChange(selectedOptObj, e, parentOptObj);

						_this.setState({
							selectedOption: selectedOptObj.label
						});

						typeof _this.props.onSelect === 'function' &&
							_this.props.onSelect(selectedOptObj, e, parentOptObj);

						_this.hideOption();
					}
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'onChange', function(selectedOptObj, e, parentOptObj) {
				return (
					typeof _this.props.onChange === 'function' && _this.props.onChange(selectedOptObj, e, parentOptObj)
				);
			});

			_defineProperty(_assertThisInitialized(_this), 'onHeaderHover', function(e) {
				typeof _this.props.onHeaderHover === 'function' &&
					_this.props.onHeaderHover(_this.state.selectedMultiSelectOptions, _this.state.selectedOption);
			});

			_defineProperty(_assertThisInitialized(_this), 'onTagHover', function() {
				typeof _this.props.onTagHover === 'function' &&
					_this.props.onTagHover(_this.state.selectedMultiSelectOptions, _this.state.selectedOption);
			});

			_defineProperty(_assertThisInitialized(_this), 'renderHeader', function() {
				if (typeof _this.props.fixedTitle === 'function')
					return _this.props.fixedTitle(
						_this.props.multiSelect ? _this.state.selectedMultiSelectLabel : _this.state.selectedOption
					);
				if (_this.props.multiSelect) return _this.renderHeaderForMultiselect();
				else {
					if (_utils.Utils.isEmptyString(_this.state.selectedOption))
						return (
							(_this.props.defauleSelectTitle && _this.renderPlaceholder()) || _this.getHiddenComponent()
						);
					else return _this.state.selectedOption;
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'renderPlaceholder', function() {
				return _react.default.createElement(
					'span',
					{
						className: 'rcd-placeholder'
					},
					_this.props.defauleSelectTitle
				);
			});

			_defineProperty(_assertThisInitialized(_this), 'renderHeaderForMultiselect', function() {
				var selectedOptionsArray = Object.keys(_this.state.selectedMultiSelectOptions);

				if (selectedOptionsArray.length > 0) {
					var titleToRender = [];
					selectedOptionsArray.map(function(selectedOption) {
						titleToRender.push(
							_react.default.createElement(
								'span',
								{
									key: selectedOption,
									className: 'rcd-multi-selected'
								},
								_react.default.createElement(_Cross.default, {
									height: _this.props.cross.width,
									width: _this.props.cross.height,
									fill: _this.props.cross.color,
									onClick: function onClick() {
										var tempObj = _this.state.selectedMultiSelectOptions || {};
										var label = _this.state.selectedMultiSelectLabel;
										var obj = {};
										obj = _this.handleDeselect(label, tempObj, selectedOption);

										_this.setState({
											selectedMultiSelectOptions: obj.tempObj,
											selectedMultiSelectLabel: obj.label,
											isCompletedMultiSelection: true
										});

										_this.emitOnselectIfMultiselect(obj.tempObj);
									}
								}),
								_react.default.createElement(
									'span',
									{
										style: {
											paddingLeft: '3px'
										}
									},
									selectedOption
								)
							)
						);
					});
					return _react.default.createElement(
						'div',
						{
							style: {
								display: 'inline-block'
							}
						},
						titleToRender
					);
				} else {
					return _this.renderPlaceholder();
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'getHiddenComponent', function() {
				return _react.default.createElement(
					'div',
					{
						style: {
							opacity: '0',
							width: 'auto',
							fontWeight: '100'
						}
					},
					_this.longestString
				);
			});

			_defineProperty(_assertThisInitialized(_this), 'resetState', function(callBack) {
				_this.setState(
					{
						selectedOption: ''
					},
					function() {
						_this.clearAllMultiSelect(function() {
							callBack && callBack();
						});
					}
				);
			});

			_defineProperty(_assertThisInitialized(_this), 'checkLongestString', function() {
				var optionLabel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

				if (optionLabel.length > _this.longestOptionStrLength) {
					_this.longestOptionStrLength = optionLabel.length;
					_this.longestString = optionLabel;
				}
			});

			_defineProperty(_assertThisInitialized(_this), 'onOptionHover', function(e, selectedObj) {
				var node = _this.getEachOptionWrapperNode(e.target);

				if (node) node.style.background = _this.props.optionHoverColor;
				typeof _this.props.onOptionHover === 'function' && _this.props.onOptionHover(node, selectedObj);
			});

			_defineProperty(_assertThisInitialized(_this), 'onOptionOut', function(e) {
				var node = _this.getEachOptionWrapperNode(e.target);

				if (node) node.style.removeProperty('background');
			});

			_defineProperty(_assertThisInitialized(_this), 'getEachOptionWrapperNode', function(target) {
				var maxLoopLimit = 5;
				if (_this.isEachOptionWrapper(target && target.classList)) return target;
				var temp = target;

				if (temp) {
					for (var i = 0; i < maxLoopLimit; i++) {
						temp = temp && temp.parentElement;

						if (_this.isEachOptionWrapper(temp && temp.classList)) {
							return temp;
						}
					}
				}

				return 0;
			});

			_defineProperty(_assertThisInitialized(_this), 'isEachOptionWrapper', function(arrayData) {
				if (typeof arrayData === 'undefined') return 0;
				return arrayData.value.indexOf(_utils.reservedClassNames.eachOptionWrapper) > -1;
			});

			_defineProperty(_assertThisInitialized(_this), 'onOptionMouseEnter', function(e, selectedObj) {});

			_defineProperty(_assertThisInitialized(_this), 'isMultiSelect', function() {
				return _this.props.multiSelect;
			});

			_defineProperty(_assertThisInitialized(_this), 'getOptionToRender', function(
				currentObj,
				classes,
				isMixWithTitle,
				index,
				isSelectedOption,
				arrLength
			) {
				return _react.default.createElement(
					_react.Fragment,
					{
						key: index
					},
					_react.default.createElement(
						_Option.default,
						_extends({}, _this.props, {
							classes: classes,
							optionObj: currentObj,
							isMixWithTitle: isMixWithTitle,
							index: index,
							isSelectedOption: isSelectedOption,
							isMultiSelect: _this.isMultiSelect(),
							tickRequiredForSingleSelect: _this.props.tickRequiredForSingleSelect,
							shouldUseRadioBtn: _this.props.shouldUseRadioBtn,
							onMouseOver: _this.onOptionHover,
							onMouseOut: _this.onOptionOut,
							onSelect: _this.onSelect,
							defaultOptionClass: _utils.reservedClassNames.option,
							autoWidthAdjust: _this.props.autoWidthAdjust
						})
					),
					!currentObj.isTitle &&
						index !== arrLength - 1 &&
						typeof _this.props.optionDivider === 'function' &&
						_this.props.optionDivider()
				);
			});

			_defineProperty(_assertThisInitialized(_this), 'isSelectedOption', function(currentObj) {
				return _this.isMultiSelect()
					? _this.hasInMultiSelected(currentObj)
					: currentObj.label === _this.state.selectedOption;
			});

			_defineProperty(_assertThisInitialized(_this), 'getDefaultGroupDivider', function() {
				return _react.default.createElement('div', {
					key: _utils.KeyGenerator.getNew(),
					className: 'rcd-group-divider'
				});
			});

			_defineProperty(_assertThisInitialized(_this), 'makeListAsOption', function(arrayData, isMixWithTitle) {
				var customClasses = '';
				var mainMenuList = null;
				var subMenuList = {};
				var arrLength = arrayData.length;
				var groupDivider = null;
				var isSelectedOption = false;
				mainMenuList = arrayData.map(function(currentObj, index) {
					_this.checkLongestString(currentObj.label);

					customClasses = '';
					isSelectedOption = _this.isSelectedOption(currentObj);

					if (currentObj.isSubmenu) {
						customClasses = _utils.reservedClassNames.isSubMenu + ' ' + _this.props.optionClass;
						subMenuList[currentObj.label] = _this.getSubmenuList(
							currentObj.label,
							currentObj.subMenu,
							currentObj
						);
					} else if (currentObj.isTitle) {
						customClasses = _utils.reservedClassNames.isTitle;
					} else {
						customClasses = _this.props.optionClass;
					}

					if (currentObj.isTitle && index !== 0 && index !== arrLength - 1) {
						groupDivider =
							(typeof _this.props.groupDivider === 'function' && _this.props.groupDivider()) ||
							_this.getDefaultGroupDivider();
						return [
							groupDivider,
							_this.getOptionToRender(
								currentObj,
								customClasses,
								isMixWithTitle,
								index,
								isSelectedOption,
								arrLength
							)
						];
					}

					return _this.getOptionToRender(
						currentObj,
						customClasses,
						isMixWithTitle,
						index,
						isSelectedOption,
						arrLength
					);
				});

				if (_this.props.multiSelect) {
					mainMenuList = _react.default.createElement(
						_Multiselect.default,
						_extends({}, _this.props, {
							mainMenuList: mainMenuList,
							onMultiSelectDone: _this.onMultiSelectDone,
							onClickClearAll: _this.onClickClearAll
						})
					);
				} else {
					mainMenuList = _react.default.createElement(
						'div',
						null,
						typeof _this.props.optionHeaderer === 'function' && _this.props.optionHeaderer(),
						mainMenuList
					);
				}

				return {
					mainMenuList: mainMenuList,
					subMenuList: subMenuList
				};
			});

			_defineProperty(_assertThisInitialized(_this), 'renderArrow', function() {
				return _react.default.createElement(
					'div',
					{
						className: 'arrow-zone',
						style: {
							width: _this.props.arrow.width,
							transform: _this.state.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
						}
					},
					_react.default.createElement(_Arrow.default, {
						fill: _this.props.arrow.color,
						width: _this.props.arrow.width,
						height: _this.props.arrow.height
					})
				);
			});

			_this.state = {
				selectedOption: '',
				//this.props.defauleSelectTitle,
				selectedMultiSelectOptions: {},
				selectedMultiSelectLabel: '',
				width: 0,
				isCompletedMultiSelection: true,
				isOpen: false
			};
			_this.wrapperRef = _react.default.createRef();
			return _this;
		}

		_createClass(DropDown, [
			{
				key: 'componentDidMount',
				value: function componentDidMount() {
					this.listenClickoutsideEvent();
					this.setPreselectedValue();
					this.props.autoOpen && this.showOption();
				}
			},
			{
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					document.removeEventListener('click', this.handleClickoutside);
				}
			},
			{
				key: 'componentWillReceiveProps',
				value: function componentWillReceiveProps(nextProps) {
					nextProps.shouldResetState && this.resetState();
				}
			},
			{
				key: 'render',
				value: function render() {
					var _this2 = this;

					var dataObj = _utils.DataAnalyser.analyseInput(this.props.option, this.props.selectedValues);

					var listObj = this.makeListAsOption(dataObj.data, dataObj.isMixWithTitle);
					var headerClass = _utils.reservedClassNames.header;
					headerClass += this.isMultiSelect() ? ' label-multi-table ' : ' label-single-center ';
					headerClass += this.props.headerClass ? this.props.headerClass : '';
					return _react.default.createElement(
						'div',
						{
							ref: this.wrapperRef,
							className: _utils.reservedClassNames.wrapper + ' ' + this.props.wrapperClass,
							onMouseEnter: this.props.shouldOpenOptionsOnhover ? this.showOption : null,
							onMouseLeave: this.props.shouldOpenOptionsOnhover ? this.hideOption : null
						},
						_react.default.createElement(
							'div',
							{
								className: headerClass,
								onClick: this.props.disabled ? null : this.toggleDropdown,
								onMouseOver: function onMouseOver(event) {
									_this2.onHeaderHover();
								},
								ref: function ref(refs) {
									_this2.headerRef = refs;
								}
							},
							this.renderHeader(),
							this.props.shouldUseArrow && this.renderArrow()
						),
						this.state.isOpen &&
							typeof this.props.headerOptionDivider === 'function' &&
							this.props.headerOptionDivider(),
						_react.default.createElement(
							'div',
							{
								style: {
									visibility: this.state.isOpen ? 'visible' : 'hidden',
									transition: this.state.isOpen
										? 'visibility 0ms linear 100ms'
										: 'visibility 0s linear 10ms'
								},
								className:
									_utils.reservedClassNames.optionContainer + ' ' + this.props.optionContainerClass
							},
							listObj.mainMenuList
						)
					);
				}
			}
		]);

		return DropDown;
	})(_react.Component);

exports.default = DropDown;
DropDown.defaultProps = {
	defauleSelectTitle: 'Select...',
	// Default Title When component init
	option: [],
	// option show in the drop down
	onSelect: null,
	// fn: callback trigger when on select of each selection of the option
	onChange: null,
	// fn : callback trigger when on change
	onHeaderHover: null,
	// fn: callback for trigger when hover on header
	onOptionHover: null,
	// fn: callback for trigger when hover start on option
	onClearAll: null,
	// fn: callback for click on clear All, Only for multi select
	wrapperClass: '',
	// This is the parent div for the drop down
	headerClass: '',
	// This is the class to overriding the header part
	optionContainerClass: '',
	// This is the container class for all options
	optionClass: '',
	// for overriding default options class
	autoWidthAdjust: true,
	// auto width adjustment of this component
	shouldResetState: false,
	// Use when re render the component. shouldResetState set "true" for reset the selected option to empty.
	multiSelect: false,
	// multi select
	shouldUseMultiselectOptionHeader: true,
	// render Default header part and apply btn.  Only if multiselected is true
	multiselectHeaderLabel: 'Filter By Value',
	// Label show as header : Only if multiselected is true and "shouldUseMultiselectOptionHeader" is true
	multiSelectHeaderClearAllLabel: 'Clear All',
	// Label for Clear multiselection: Only if multiselected is true "shouldUseMultiselectOptionHeader" is true
	shouldUseMultiselectApplyBtn: false,
	multiselectApplyBtnClass: '',
	// class for custom apply btn
	multiselectApplyBtnLabel: 'Apply',
	// custom apply btn label
	shouldAcceptOneFromGroup: false,
	groupDivider: null,
	// fn: return jsx, on between each group in the option: render just b4 title except first and last element
	headerOptionDivider: null,
	// fn: return jsx, on between header and option container
	fixedTitle: null,
	onOpenOption: null,
	selectedValues: null,
	// It can be object or array. Use Object for single select and array of Object for multi select
	shouldUseRadioBtn: false,
	// Radio btn is required or not For Single Select
	isAlwaysOpen: false,
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
	shouldOpenOptionsOnhover: false,
	optionHoverColor: '#d8eff8',
	optionDivider: null
};
DropDown.propTypes = {
	defauleSelectTitle: _propTypes.default.string,
	option: _propTypes.default.array,
	onSelect: _propTypes.default.func,
	onChange: _propTypes.default.func,
	onHeaderHover: _propTypes.default.func,
	onOptionHover: _propTypes.default.func,
	onClearAll: _propTypes.default.func,
	wrapperClass: _propTypes.default.string,
	headerClass: _propTypes.default.string,
	optionContainerClass: _propTypes.default.string,
	optionClass: _propTypes.default.string,
	width: _propTypes.default.string,
	height: _propTypes.default.string,
	shouldResetState: _propTypes.default.bool,
	multiSelect: _propTypes.default.bool,
	shouldUseMultiselectOptionHeader: _propTypes.default.bool,
	multiselectApplyBtnClass: _propTypes.default.string,
	multiselectHeaderLabel: _propTypes.default.string,
	multiSelectHeaderClearAllLabel: _propTypes.default.string,
	shouldAcceptOneFromGroup: _propTypes.default.bool,
	groupDivider: _propTypes.default.func,
	headerOptionDivider: _propTypes.default.func,
	fixedTitle: _propTypes.default.func,
	dropDownRef: _propTypes.default.string,
	onOpenOption: _propTypes.default.func,
	tickRequiredForSingleSelect: _propTypes.default.bool,
	shouldUseRadioBtn: _propTypes.default.bool,
	isAlwaysOpen: _propTypes.default.bool,
	autoOpen: _propTypes.default.bool,
	shouldUseArrow: _propTypes.default.bool,
	selectedOptionColor: _propTypes.default.string,
	shouldUseMultiselectApplyBtn: _propTypes.default.bool,
	optionHeader: _propTypes.default.func,
	removeOptionWhenSelected: _propTypes.default.bool,
	selectedOptionClass: _propTypes.default.string,
	tick: _propTypes.default.object,
	disabled: _propTypes.default.bool,
	shouldOpenOptionsOnhover: _propTypes.default.bool,
	optionHoverColor: _propTypes.default.string,
	optionDivider: _propTypes.default.func
};
