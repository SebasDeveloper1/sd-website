import React from 'react';
import './PrimaryParagraph.scss';

export function PrimaryParagraph(props) {
  const { id, textContent, modifierClass, style } = props;
  return (
    <p
      id={id}
      className={
        modifierClass
          ? `primary-paragraph ${modifierClass}`
          : `primary-paragraph`
      }
      style={style}
    >
      {textContent}
    </p>
  );
}
