import React from 'react';
import './FirstLink.scss';

export function FirstLink(props) {
  const { href, textContent, modifierClass, style } = props;
  return (
    <a
      href={href}
      className={modifierClass ? `first-link ${modifierClass}` : 'first-link'}
      style={style}
    >
      {textContent}
    </a>
  );
}
