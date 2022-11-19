import React from 'react';
import './FirstLink.scss';

export function FirstLink({ href, textContent, modifierClass, style }) {
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
