import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function ToolTip({ position, text = '', CSSClassname, children }) {
  let str = typeof(text) === "string" ? text : text.toString()
  return (
    <div className={CSSClassname || "emtooltip-container"}>
      {children}
      { str && str.length !== 0 ?
        <span className="tooltip-text">{str}</span>
      : null}
    </div>
  );
}

ToolTip.propTypes = {
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  text: PropTypes.string,
  CSSClassname: PropTypes.string
};
ToolTip.defaultProps = {
  position: "bottom"
};
