import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SecondLink.scss';

export function SecondLink({
  href,
  textContent,
  modifierClass,
  style,
  srcIcon,
}) {
  return (
    <a
      className={modifierClass ? `second-link ${modifierClass}` : 'second-link'}
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {srcIcon && (
        <FontAwesomeIcon icon={srcIcon} className="second-link__icon" />
      )}
      {textContent}
    </a>
  );
}
