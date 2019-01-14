import React from 'react';
import ToolTip from './ToolTip';
import Tick from './Tick';
import RadioUnselected from './Radio-Unselected';
import RadioSelected from './Radio-Selected';

const Option = props => {
	let { optionObj, classes, isMixWithTitle, index, isSelectedOption, isMultiSelect } = props;
	if (optionObj.isTitle) {
		return renderTitleAsOptions(classes, optionObj, index);
	} else {
		let className = 'option-holder-wrapper';
		if (isMultiSelect || props.tickRequiredForSingleSelect || props.shouldUseRadioBtn || isMixWithTitle)
			className = className + ' option-holder';
		if (props.removeOptionWhenSelected && props.isSelectedOption) className = className + ' no-display';
		if (optionObj.isDisabled) classes += ' option-holder-disabled';
		if (isSelectedOption) classes += ' font-bold ' + props.selectedOptionClass;
		return (
			<div
				className={className}
				onMouseOver={e => {
					props.onMouseOver(e, optionObj);
				}}
				key={`${index}`}
				onClick={e => {
					if (!optionObj.isSubmenu && !optionObj.isDisabled) props.onSelect(e, optionObj.label, optionObj);
				}}
				onMouseEnter={e => {
					props.onMouseEnter(e, optionObj);
				}}
				onMouseLeave={e => {
					props.onMouseLeave(e, optionObj);
				}}
			>
				{props.isMultiSelect && renderTick(isSelectedOption, props.tick)}
				{!props.isMultiSelect && props.tickRequiredForSingleSelect && renderTick(isSelectedOption, props.tick)}
				{!props.isMultiSelect &&
					props.shouldUseRadioBtn &&
					renderRadioBtn(isSelectedOption, optionObj, props.radio)}
				<div
					data-key={optionObj.value}
					key={optionObj.value}
					className={props.defaultOptionClass + ' ' + classes}
				>
					{renderOptionLabel(optionObj.label, props.autoWidthAdjust)}
				</div>
			</div>
		);
	}
};

const renderTitleAsOptions = (classes, optionObj, index) => {
	return (
		<div key={`${index}`} className={classes}>
			{optionObj.label}
		</div>
	);
};

const renderOptionLabel = (labelName, autoWidthAdjust) => {
	if (labelName.length > 19 && autoWidthAdjust) {
		return <ToolTip text={labelName}>{labelName.substr(0, 16) + '... '}</ToolTip>;
	} else {
		return labelName;
	}
};

const renderTick = (isSelectedOption, props) => {
	return isSelectedOption ? (
		<Tick width={props.width} height={props.height} stroke={props.color} />
	) : (
		<div style={{ marginLeft: props.width + 'px' }} />
	);
};
const renderRadioBtn = (isSelectedOption, currentObj, props) => {
	if (isSelectedOption)
		return (
			<RadioSelected
				width={props.width}
				height={props.height}
				stroke={props.selectedFillColor}
				onClick={e => {
					props.onSelect(e, currentObj['label'], currentObj);
				}}
			/>
		);
	return (
		<RadioUnselected
			width={props.width}
			height={props.height}
			stroke={props.unSelectedFillColor}
			onClick={e => {
				props.onSelect(e, currentObj['label'], currentObj);
			}}
		/>
	);
};
export default Option;
