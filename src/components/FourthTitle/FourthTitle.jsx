import React from 'react';
import './FourthTitle.scss';

export function FourthTitle({ id, textContent, modifierClass, style }) {
  return (
    <h4
      id={id}
      className={
        modifierClass ? `fourth-title ${modifierClass}` : 'fourth-title'
      }
      style={style}
    >
      {textContent}
    </h4>
  );
}
