import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.scss';

export function SearchInput(props) {
  const {
    type,
    id,
    name,
    placeholder,
    modifierClassContainer,
    modifierClassInput,
    style,
  } = props;
  return (
    <div
      className={
        modifierClassContainer
          ? `search-container ${modifierClassContainer}`
          : 'search-container'
      }
    >
      <FontAwesomeIcon icon={faSearch} className="search__icon" />
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={
          modifierClassInput
            ? `search__input ${modifierClassInput}`
            : 'search__input'
        }
        style={style}
      />
    </div>
  );
}
