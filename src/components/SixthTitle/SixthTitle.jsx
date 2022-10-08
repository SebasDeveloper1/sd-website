import React from 'react';
import './SixthTitle.scss';

export function SixthTitle(props) {
  const { id, textContent, modifierClass, style } = props;
  return (
    <h6
      id={id}
      className={modifierClass ? `sixth-title ${modifierClass}` : 'sixth-title'}
      style={style}
    >
      {textContent}
    </h6>
  );
}
