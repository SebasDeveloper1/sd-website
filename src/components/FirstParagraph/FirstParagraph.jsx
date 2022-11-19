import React from 'react';
import './FirstParagraph.scss';

export function FirstParagraph({ id, textContent, modifierClass, style }) {
  return (
    <p
      id={id}
      className={
        modifierClass ? `first-paragraph ${modifierClass}` : 'first-paragraph'
      }
      style={style}
    >
      {textContent}
    </p>
  );
}
