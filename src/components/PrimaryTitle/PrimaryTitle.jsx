import React from 'react';
import './PrimaryTitle.scss';

export function PrimaryTitle(props) {
  const { id, textContent, modifierClass, style } = props;
  return (
    <h1
      id={id}
      className={
        modifierClass ? `primary-title ${modifierClass}` : `primary-title`
      }
      style={style}
    >
      {textContent}
    </h1>
  );
}
