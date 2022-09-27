import React from 'react';
import './TertiaryTitle.scss';

export function TertiaryTitle(props) {
  const { id, textContent, modifierClass, style } = props;
  return (
    <h2
      id={id}
      className={
        modifierClass ? `tertiary-title ${modifierClass}` : `tertiary-title`
      }
      style={style}
    >
      {textContent}
    </h2>
  );
}
