import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * A component for Cross(x) button
 * @prop fill = color to fill component
 * @prop width = width of the component
 * @prop height = height of the component
 * @prop onClick = function which return onClick on the component
 * @prop ref = function which return reference on the component
 */

export default function Cross(props) {
    return (
        <div 
            className={"cross " + (typeof props.onClick == 'function' ? 'clickable' : 'not-clickable')} 
            onClick={() => { props.onClick && props.onClick()} }
            ref = {(refs)=>{props.refs && props.refs(refs)}}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={props.width} 
                height={props.height} 
                viewBox="0 0 16 16"
            >
                <path 
                    fill={props.fill} 
                    fillRule="nonzero" 
                    d="M9.6 8l6.057-6.057a1.105 1.105 0 0 0 0-1.6 1.105 1.105 0 0 0-1.6 0L8 6.4 1.943.343a1.105 1.105 0 0 0-1.6 0 1.105 1.105 0 0 0 0 1.6L6.4 8 .343 14.057a1.105 1.105 0 0 0 0 1.6c.228.229.457.343.8.343s.571-.114.8-.343L8 9.6l6.057 6.057c.229.229.572.343.8.343.229 0 .572-.114.8-.343a1.105 1.105 0 0 0 0-1.6L9.6 8z" 
                />
            </svg>
        </div>
    )
}

Cross.defaultProps = {
    fill: "#135142",
    width : 16,
    height : 16,
    onClick : null,
    ref : null
};

Cross.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    onClick : PropTypes.func,
    ref : PropTypes.func,
}


