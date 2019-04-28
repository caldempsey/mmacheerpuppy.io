import React, { useState } from 'react';
import './animations.css';

export default function ThingsRotation(props) {
  const [selectedThing, selectThing] = useState(0);
  const { things, style, color } = props;
  setInterval(() => {
    // eslint-disable-next-line no-bitwise
    selectThing((Math.random() * things.length) | 0);
  }, 7500);
  return (
    <span
      key={things[selectedThing]}
      style={{ ...style, color }}
      className="animated animatedFadeInUp fadeInUp"
    >
      {things[selectedThing]}
    </span>
  );
}
