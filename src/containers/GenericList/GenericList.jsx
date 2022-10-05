import React from 'react';
import './GenericList.scss';

export function GenericList({ modifierClass, children }) {
  return (
    <ul
      className={
        modifierClass ? `generic-list ${modifierClass}` : 'generic-list'
      }
    >
      {children}
    </ul>
  );
}
