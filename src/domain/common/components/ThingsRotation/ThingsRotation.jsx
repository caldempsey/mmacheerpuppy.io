import React, { useEffect, useState } from 'react';
import './animations.css';

export default function ThingsRotation(props) {
  const [selectedThing, selectThing] = useState(0);
  const { things, style, color } = props;
  useEffect(() => {
    setTimeout(() => {
      selectThing(Math.floor(Math.random() * things.length));
    }, 7500);
  }, [selectedThing, things.length]);
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
