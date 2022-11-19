import React from 'react';
import './ThirdTitle.scss';

export function ThirdTitle({ id, textContent, modifierClass, style }) {
  return (
    <h3
      id={id}
      className={modifierClass ? `third-title ${modifierClass}` : 'third-title'}
      style={style}
    >
      {textContent}
    </h3>
  );
}
