import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SecondButton.scss';

export function SecondButton({
  type,
  textButton,
  modifierClass,
  srcIcon,
  style,
  onClick,
  onKeyDown,
}) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={
        modifierClass ? `second-button ${modifierClass}` : 'second-button'
      }
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {srcIcon && (
        <FontAwesomeIcon icon={srcIcon} className="second-button__icon" />
      )}
      {textButton}
    </button>
  );
}
