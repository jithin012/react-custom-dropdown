import React from 'react';

const Multiselect = props => {
	return (
		<div>
			{renderHeader(props)}
			{props.mainMenuList}
			{props.shouldUseMultiselectApplyBtn && renderApplyBtn(props)}
		</div>
	);
};
const renderHeader = props => {
	if (typeof props.optionHeaderer === 'function') return props.optionHeaderer();
	if (props.shouldUseMultiselectOptionHeader) {
		return (
			<div className='ddown-multisel-header'>
				<div className='ddown-multisel-header-label'>{props.multiselectHeaderLabel}</div>
				<div className='ddown-multisel-header-clear-all' onClick={props.onClickClearAll}>
					{props.multiSelectHeaderClearAllLabel}
				</div>
			</div>
		);
	}
};
const renderApplyBtn = props => {
	let className = props.multiselectApplyBtnClass
		? `ddown-mutilsel-btn ${props.multiselectApplyBtnClass}`
		: 'ddown-mutilsel-btn';
	return (
		<div className={className} onClick={props.onMultiSelectDone}>
			{props.multiselectApplyBtnLabel ? props.multiselectApplyBtnLabel : 'APPLY'}
		</div>
	);
};
export default Multiselect;
