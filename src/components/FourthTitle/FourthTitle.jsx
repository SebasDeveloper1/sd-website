import React from 'react';
import './FourthTitle.scss';

export function FourthTitle(props) {
  const { id, textContent, modifierClass, style } = props;
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
