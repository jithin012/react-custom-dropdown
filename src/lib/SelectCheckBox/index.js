import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';

/**
 *
 * prop for disable the checkbox (Passing props from Edit question);
 * prop for getting the status checked or uncheck && prop for make check box as checked or unchecked (Taking status object from Redux)
 * prop for retrieve the selected QId's in [] format (Setting an Array as state in QuestionComposer)
 *
 */

class SelectCheckBox extends Component {
	constructor(props) {
		super(props);
	}
	handleClick = (e, isChecked) => {
		this.props.statusUpdate &&
			this.props.statusUpdate(e.target.id, isChecked ? { selected: false } : { selected: true });
	};

	render() {
		return (
			<div
				className='checkbox-container'
				style={{ cursor: this.props.isDisabled && this.props.isDisabled ? 'not-allowed' : 'pointer' }}
			>
				<div
					className='checkbox-wrapper'
					key={this.props.currentQId}
					onClick={e => {
						!this.props.isDisabled && this.handleClick(e, this.props.isChecked);
					}}
				>
					{this.props.isDisabled && this.props.isDisabled ? (
						<img
							className='checkbox-outer-img'
							id={this.props.currentQId}
							src={'./images/rectangle-grey.png'}
						/>
					) : (
						<img
							className='checkbox-outer-img'
							id={this.props.currentQId}
							src={'./images/check-rectangle.png'}
						/>
					)}

					{this.props.isChecked && this.props.isChecked ? (
						<img
							className='checkbox-inner-img'
							id={this.props.currentQId}
							src={'./images/check-tick.png'}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

SelectCheckBox.defaultProps = {
	isChecked: false,
	isDisabled: false
};
SelectCheckBox.propTypes = {
	isChecked: PropTypes.bool,
	isDisabled: PropTypes.bool
};

export default SelectCheckBox;
