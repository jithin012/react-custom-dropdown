import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component for Drop Down.
 * @prop fill = color to fill component
 * @prop width = width of the component
 * @prop height = height of the component
 * @prop onClick = function which return onClick on the conponent
 * @prop stroke = stroke of the component
 */

export default function RadioUnselected(props) {
	return (
		<div
			className={
				`align-items-center ${props.class} ` +
				(typeof props.onClick == 'function' ? 'clickable' : 'not-clickable')
			}
			onClick={() => {
				props.onClick && props.onClick();
			}}
			style={{ cursor: 'pointer' }}
		>
			<svg height={props.height} viewBox='0 0 13 13' width={props.width} xmlns='http://www.w3.org/2000/svg'>
				<g fill={props.fill} fillRule='evenodd'>
					<g stroke={props.stroke} strokeWidth='.5'>
						<circle cx='6.5' cy='6.5' r='6.25' />
						<circle cx='6.5' cy='6.5' r='3.25' />
					</g>
				</g>
			</svg>
		</div>
	);
}

RadioUnselected.defaultProps = {
	fill: 'none',
	width: 13,
	height: 13,
	onClick: null,
	stroke: '#77878e',
	class: null
};

RadioUnselected.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	onClick: PropTypes.func,
	stroke: PropTypes.string,
	class: PropTypes.string
};
