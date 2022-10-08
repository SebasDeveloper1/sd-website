import React from 'react';
import './FirstParagraph.scss';

export function FirstParagraph(props) {
  const { id, textContent, modifierClass, style } = props;
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
