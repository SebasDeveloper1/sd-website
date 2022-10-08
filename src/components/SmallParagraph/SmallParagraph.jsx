import React from 'react';
import './SmallParagraph.scss';

export function SmallParagraph(props) {
  const { id, textContent, modifierClass, style } = props;
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
