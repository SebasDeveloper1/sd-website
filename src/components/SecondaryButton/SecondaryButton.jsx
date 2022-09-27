import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SecondaryButton.scss';

export function SecondaryButton(props) {
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
        modifierClass ? `secondary-button ${modifierClass}` : `secondary-button`
      }
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {srcIcon && (
        <FontAwesomeIcon icon={srcIcon} className="secondary-button__icon" />
      )}
      {textButton}
    </button>
  );
}
