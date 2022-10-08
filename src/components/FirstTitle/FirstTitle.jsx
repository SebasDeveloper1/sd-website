import React from 'react';
import './FirstTitle.scss';

export function FirstTitle(props) {
  const { id, textContent, modifierClass, style } = props;
  return (
    <h1
      id={id}
      className={
        modifierClass ? `first-title ${modifierClass}` : 'first-title'
      }
      style={style}
    >
      {textContent}
    </h1>
  );
}
