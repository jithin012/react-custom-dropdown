import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'


/**
 * A component for Cross(x) button
 * @prop fill = color to fill component
 * @prop width = width of the component
 * @prop height = height of the component
 * @prop onClick = function which return onClick on the conponent
 * @prop stroke = stroke of the component
 */

export default function Tick(props) {
    return (
        <div 
            className={`tick align-items-center ${props.class} `+ (typeof props.onClick == 'function' ? 'clickable' : 'not-clickable')} 
            onClick={() => { props.onClick && props.onClick() }}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={props.width} 
                height={props.height} 
                viewBox="0 0 13 12"
            >
                <path 
                    fill={props.fill} 
                    fillRule="nonzero" 
                    stroke={props.stroke} 
                    strokeWidth="1.2" 
                    d="M6.095 10.8L1.552 7.497a.836.836 0 0 1-.345-.785.857.857 0 0 1 .537-.679.92.92 0 0 1 .88.107l3.04 2.21 4.707-6.767a.9.9 0 0 1 .797-.381c.317.019.6.2.74.473a.821.821 0 0 1-.06.852L6.095 10.8z" 
                />
            </svg>
        </div>
    )
}

Tick.defaultProps = {
    fill: "#135142",
    width : 12,
    height : 12,
    onClick: null  ,
    stroke: "#135142",
    class : null
};

Tick.propTypes = {
    fill: PropTypes.string,
    width : PropTypes.number,
    height : PropTypes.number,
    onClick: PropTypes.func ,
    stroke : PropTypes.string,
    class : PropTypes.string   
}


