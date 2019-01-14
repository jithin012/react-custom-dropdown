import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * A component for Cross(x) button
 * @prop fill = color to fill component
 * @prop width = width of the component
 * @prop height = height of the component
 * @prop onClick = function which return onClick on the conponent
 * @prop stroke = stroke of the component
 */

export default function Arrow(props) {
	return (
		<div
			className={
				`tick align-items-center ${props.class} ` +
				(typeof props.onClick == 'function' ? 'clickable' : 'not-clickable')
			}
			onClick={() => {
				props.onClick && props.onClick();
			}}
		>
			<svg
				width={props.width}
				height={props.height}
				viewBox='0 0 9 4'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='Symbols' stroke={props.fill} strokeWidth='1' fill={props.fill} strokeLinejoin='round'>
					<g
						id='Header'
						transform='translate(-1120.000000, -19.000000)'
						stroke={props.fill}
						strokeWidth='0.5'
					>
						<g id='right'>
							<g transform='translate(1041.000000, 9.000000)'>
								<polyline id='Shape-Copy-2' points='87 10 83.5 14 80 10' />
							</g>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
}

Arrow.defaultProps = {
	fill: 'gray',
	width: 12,
	height: 12,
	onClick: null,
	class: null
};

Arrow.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	onClick: PropTypes.func,
	stroke: PropTypes.string,
	class: PropTypes.string
};
