import React from 'react';
import './StandardInput.scss';

export function StandardInput({
  htmlFor,
  textLabel,
  type,
  id,
  name,
  placeholder,
  modifierClassInput,
  modifierClassLabel,
  style,
}) {
  return (
    <>
      {htmlFor && (
        <label
          htmlFor={htmlFor}
          className={
            modifierClassLabel
              ? `label-standard-input ${modifierClassLabel}`
              : 'label-standard-input'
          }
        >
          {textLabel}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={
          modifierClassInput
            ? `standard-input ${modifierClassInput}`
            : 'standard-input'
        }
        style={style}
      />
    </>
  );
}
