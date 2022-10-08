import React from 'react';
import './SecondTitle.scss';

export function SecondTitle(props) {
  const { id, textContent, modifierClass, style } = props;
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
