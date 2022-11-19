import React from 'react';
import './FifthTitle.scss';

export function FifthTitle({ id, textContent, modifierClass, style }) {
  return (
    <h5
      id={id}
      className={modifierClass ? `fifth-title ${modifierClass}` : 'fifth-title'}
      style={style}
    >
      {textContent}
    </h5>
  );
}
