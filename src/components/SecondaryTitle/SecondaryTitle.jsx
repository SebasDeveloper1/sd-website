import React from 'react';
import './SecondaryTitle.scss';

export function SecondaryTitle(props) {
  const { id, textContent, modifierClass, style } = props;
  return (
    <h2
      id={id}
      className={
        modifierClass ? `secondary-title ${modifierClass}` : `secondary-title`
      }
      style={style}
    >
      {textContent}
    </h2>
  );
}
