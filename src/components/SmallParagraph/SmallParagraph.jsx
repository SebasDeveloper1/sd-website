import React from 'react';
import './SmallParagraph.scss';

export function SmallParagraph({ id, textContent, modifierClass, style }) {
  return (
    <p
      id={id}
      className={
        modifierClass ? `small-paragraph ${modifierClass}` : 'small-paragraph'
      }
      style={style}
    >
      {textContent}
    </p>
  );
}
