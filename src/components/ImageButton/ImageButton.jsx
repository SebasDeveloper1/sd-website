import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageButton.scss';

export function ImageButton({
  type,
  tabIndex,
  id,
  modifierClass,
  title,
  style,
  typeIcon,
  srcIcon,
  altIcon,
  onClick,
}) {
  return (
    <button
      id={id}
      tabIndex={tabIndex}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={
        modifierClass ? `image-button ${modifierClass}` : 'image-button'
      }
      title={title}
      style={style}
      onClick={onClick}
    >
      {typeIcon === 'FontAwesomeIcon' ? (
        <FontAwesomeIcon
          icon={srcIcon}
          className="icon__image-button"
          alt={altIcon}
        />
      ) : (
        <img src={srcIcon} className="img__image-button" alt={altIcon} />
      )}
    </button>
  );
}
