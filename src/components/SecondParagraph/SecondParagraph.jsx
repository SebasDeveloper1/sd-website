import React from 'react';
import './SecondParagraph.scss';

export function SecondParagraph({ id, textContent, modifierClass, style }) {
  return (
    <p
      id={id}
      className={
        modifierClass ? `second-paragraph ${modifierClass}` : 'second-paragraph'
      }
      style={style}
    >
      {textContent}
    </p>
  );
}
