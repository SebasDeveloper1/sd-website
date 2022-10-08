import React from 'react';
import './SecondParagraph.scss';

export function SecondParagraph(props) {
  const { id, textContent, modifierClass, style } = props;
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
