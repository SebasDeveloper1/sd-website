import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FirstButton.scss';

export function FirstButton(props) {
  const {
    type,
    textButton,
    modifierClass,
    srcIcon,
    style,
    onClick,
    onKeyDown,
  } = props;
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={
        modifierClass ? `first-button ${modifierClass}` : 'first-button'
      }
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {srcIcon && (
        <FontAwesomeIcon icon={srcIcon} className="first-button__icon" />
      )}
      {textButton}
    </button>
  );
}
