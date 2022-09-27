import React from 'react';
import './PrimaryLink.scss';

export function PrimaryLink(props) {
  const { href, textLink, modifierClass, style } = props;
  return (
    <a
      href={href}
      className={
        modifierClass ? `primary-link ${modifierClass}` : `primary-link`
      }
      style={style}
    >
      {textLink}
    </a>
  );
}
