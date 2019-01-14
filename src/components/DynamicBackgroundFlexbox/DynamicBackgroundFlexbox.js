import React from 'react';
import './background.css'

// Returns the JSX of whatever style is passed to props.style. Valid styles can be found using the arrow function in BackgroundStyles.js.
export default function DynamicBackgroundFlexbox(props) {
  return <div className="bg_container" style={props.style}>
  {props.children}
  </div>;
}

