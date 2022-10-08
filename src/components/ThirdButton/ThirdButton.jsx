import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ThirdButton.scss';

export function ThirdButton(props) {
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
        modifierClass ? `third-button ${modifierClass}` : 'third-button'
      }
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {srcIcon && (
        <FontAwesomeIcon icon={srcIcon} className="third-button__icon" />
      )}
      {textButton}
    </button>
  );
}
