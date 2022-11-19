import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.scss';

export function SearchInput({
  type,
  id,
  name,
  placeholder,
  modifierClassContainer,
  modifierClassInput,
  style,
  value,
  onChange,
}) {
  const onSearchValueChange = (event) => {
    onChange(event.target.value);
  };
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
        value={value}
        onChange={onSearchValueChange}
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
