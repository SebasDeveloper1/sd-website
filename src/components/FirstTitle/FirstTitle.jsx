import React from 'react';
import './FirstTitle.scss';

export function FirstTitle({ id, textContent, modifierClass, style }) {
  return (
    <h1
      id={id}
      className={modifierClass ? `first-title ${modifierClass}` : 'first-title'}
      style={style}
    >
      {textContent}
    </h1>
  );
}
