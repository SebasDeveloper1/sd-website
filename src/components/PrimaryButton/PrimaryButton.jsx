import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PrimaryButton.scss';

export function PrimaryButton(props) {
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
        modifierClass ? `primary-button ${modifierClass}` : `primary-button`
      }
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {srcIcon && (
        <FontAwesomeIcon icon={srcIcon} className="primary-button__icon" />
      )}
      {textButton}
    </button>
  );
}
