import React from 'react';
import './ThirdTitle.scss';

export function ThirdTitle(props) {
  const { id, textContent, modifierClass, style } = props;
  return (
    <h3
      id={id}
      className={
        modifierClass ? `third-title ${modifierClass}` : 'third-title'
      }
      style={style}
    >
      {textContent}
    </h3>
  );
}
