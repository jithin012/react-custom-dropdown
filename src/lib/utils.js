/**
 * make sure that input Data coming to Drop down is the format of
 *  1. Array of Objects  like:
 *    [{
 *      label : <label> ,
 *      value: <value>
 *    },...]
 *          for sub menu (Level 1 only)
 *              [{
 *               label : <label> ,
 *               value: <value>,
 *               subMenu : [{
 *                 label : <label> ,
 *                 value: <value>
 *               ]},
 *              ...]
 *  2. Simple array like: [...]
 *  3. Array of Object like:
 *      [
 *         {
 *           title: <titleName>,
 *           data: [{label : <label> , value: <value>,... }]
 *         }, ...
 *      ]
 *
 */

export const DataAnalyser = {
	analyseInput: (data, selectedVales) => {
		if (!(data && DataAnalyser.isArray(data))) return;
		let returnObj = {
			data: [],
			isMixWithTitle: false
		};
		// for empty option array
		if (data.length === 0) {
			returnObj.data.push(DataAnalyser.getStructuredData('<No Options>', 'no_value', true));
			return returnObj;
		}
		// for type2
		if (DataAnalyser.isSimpleArray(data)) {
			returnObj.data = DataAnalyser.processSimpleArray(data);
		}
		if (DataAnalyser.arrayContainsObject(data)) {
			// For Type3
			if (DataAnalyser.containTitleField(data[0]) && DataAnalyser.containDataField(data[0])) {
				returnObj.isMixWithTitle = true;
				returnObj.data = DataAnalyser.processTitleAndObjects(data);
			} else {
				// For Type1
				returnObj.data = DataAnalyser.processObjects(data);
			}
		}
		return returnObj;
	},
	containTitleField: dataObj => dataObj['title'] !== undefined,
	containDataField: dataObj => dataObj['data'] !== undefined,
	processSimpleArray: arrayData => {
		let len = arrayData.length;
		let newArr = [];
		for (let i = 0; i < len; i++) {
			newArr.push(DataAnalyser.getStructuredData(arrayData[i], arrayData[i]));
		}
		return newArr;
	},
	processTitleAndObjects: data => {
		let arrLength = data.length;
		let returnArray = [];
		let eachObj = null;
		let hasGroup = false;
		let groupName = '';

		for (let i = 0; i < arrLength; i++) {
			eachObj = data[i];
			if (eachObj['title'] !== undefined) {
				returnArray.push(
					DataAnalyser.getStructuredData(eachObj['title'], i, eachObj.disabled, false, [], true)
				);
			}
			if (eachObj['data'] !== undefined) {
				hasGroup = true;
				groupName = eachObj['title'];
				returnArray.push(...DataAnalyser.processObjects(eachObj['data'], hasGroup, groupName));
			}
		}
		return returnArray;
	},
	/**
	 * Each object is the format of "{label : <label> , value : <value>}"
	 * @Note: grouping is only for level 1 data. For Inner JSON We don't have it right now
	 */
	processObjects: (arrayData, hasGroup = false, groupName = '') => {
		let len = arrayData.length;
		let newArr = [];
		let temp = {};
		let label = '';
		let subMenu = [];
		let value;
		for (let i = 0; i < len; i++) {
			subMenu = [];
			temp = arrayData[i];
			label = temp['label'];
			value = temp['value'];
			if (DataAnalyser.hasSubmenu(temp)) {
				subMenu.push({ label: label, value: value, options: temp.subMenu });
				newArr.push(DataAnalyser.getStructuredData(label, value, temp.disabled, true, subMenu));
			} else {
				if (hasGroup) {
					newArr.push(
						DataAnalyser.getStructuredData(
							label,
							value,
							temp.disabled,
							false,
							[],
							false,
							hasGroup,
							groupName,
							arrayData
						)
					);
				} else newArr.push(DataAnalyser.getStructuredData(label, value, temp.disabled));
			}
		}
		return newArr;
	},
	hasSubmenu: eachObj => eachObj.subMenu !== undefined,
	getStructuredData: (
		label,
		value,
		isDisabled = false,
		isSubmenu = false,
		subMenu = [],
		isTitle = false,
		hasGroup = false,
		groupName = '',
		groupEle = []
	) => {
		return {
			value: value,
			label: label,
			isDisabled: isDisabled,
			isSubmenu: isSubmenu,
			subMenu: subMenu,
			isTitle: isTitle,
			hasGroup: hasGroup,
			groupName: groupName,
			groupEle: groupEle
		};
	},
	arrayContainsArray: data => DataAnalyser.isArray(data[0]),
	arrayContainsObject: data => DataAnalyser.isObject(data[0]),
	isSimpleArray: data => typeof data[0] !== 'object',
	isArray: data => typeof data === 'object' && data.constructor === Array,
	isObject: data => data && typeof data === 'object' && data.constructor === Object
};
/**
 * Some Utility functions
 */
export const Utils = {
	isEmptyString: str => !str || str === '',
	isEmptyObject: obj => Object.keys(obj).length === 0
};
export const KeyGenerator = (function() {
	let value = 1000;
	return {
		getNew: () => ++value
	};
})();

/**
 * Some reserved classname used in this component
 */
export const reservedClassNames = {
	wrapper: 'ddown-wrapper',
	dropbtn: 'dropbtn',
	optionContainerClass: 'dropdown-content',
	optionClass: 'd-down-option',
	submenuClass: 'ddown-submenu',
	show: 'show',
	isSubMenu: 'is-submenu',
	isTitle: 'is-title'
};
