import React from 'react';
import './SecondTitle.scss';

export function SecondTitle({ id, textContent, modifierClass, style }) {
  return (
    <h2
      id={id}
      className={
        modifierClass ? `second-title ${modifierClass}` : 'second-title'
      }
      style={style}
    >
      {textContent}
    </h2>
  );
}
