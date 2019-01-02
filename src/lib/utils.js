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
 *           hasGroup : true || false,
 *           acceptOnlyOne: true || false <accept only one value in the group>
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
		let acceptOnlyOne = false;

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
				acceptOnlyOne = eachObj['acceptOnlyOne'] || false;
				returnArray.push(...DataAnalyser.processObjects(eachObj['data'], hasGroup, groupName, acceptOnlyOne));
			}
		}
		return returnArray;
	},
	/**
	 * Each object is the format of "{label : <label> , value : <value>}"
	 * @Note: grouping is only for level 1 data. For Inner JSON We don't have it right now
	 */
	processObjects: (arrayData, hasGroup = false, groupName = '', acceptOnlyOne = false) => {
		let len = arrayData.length;
		let newArr = [];
		let _temp = {};
		let label = '';
		let subMenu = [];
		let value;
		for (let i = 0; i < len; i++) {
			subMenu = [];
			_temp = arrayData[i];
			label = _temp['label'];
			value = _temp['value'];
			if (DataAnalyser.hasSubmenu(_temp)) {
				subMenu.push({ label: label, value: value, options: _temp.subMenu });
				newArr.push(DataAnalyser.getStructuredData(label, value, _temp.disabled, true, subMenu));
			} else {
				if (hasGroup) {
					if (acceptOnlyOne)
						newArr.push(
							DataAnalyser.getStructuredData(
								label,
								value,
								_temp.disabled,
								false,
								[],
								false,
								hasGroup,
								groupName,
								acceptOnlyOne,
								arrayData
							)
						);
					else
						newArr.push(
							DataAnalyser.getStructuredData(
								label,
								value,
								_temp.disabled,
								false,
								[],
								false,
								hasGroup,
								groupName,
								acceptOnlyOne,
								arrayData
							)
						);
				} else newArr.push(DataAnalyser.getStructuredData(label, value, _temp.disabled));
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
		acceptOnlyOne = false,
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
			acceptOnlyOne: acceptOnlyOne,
			groupEle: groupEle
		};
	},
	arrayContainsArray: data => DataAnalyser.isArray(data[0]),
	arrayContainsObject: data => DataAnalyser.isObject(data[0]),
	isSimpleArray: data => typeof data[0] !== 'object',
	isArray: data => typeof data === 'object' && data.constructor === Array,
	isObject: data => data && typeof data === 'object' && data.constructor === Object
};
