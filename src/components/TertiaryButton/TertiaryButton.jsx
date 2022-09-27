import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TertiaryButton.scss';

export function TertiaryButton(props) {
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
        modifierClass ? `tertiary-button ${modifierClass}` : `tertiary-button`
      }
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {srcIcon && (
        <FontAwesomeIcon icon={srcIcon} className="tertiary-button__icon" />
      )}
      {textButton}
    </button>
  );
}
