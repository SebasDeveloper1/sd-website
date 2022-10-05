import React from 'react';
import imagePrueba from 'images/react-logo.svg';
import { PrimaryParagraph, TertiaryTitle } from 'components/indexComponents';
import './CardAbility.scss';

export function CardAbility() {
  return (
    <li className="card-ability">
      <img className="card-ability__img" src={imagePrueba} alt="Logo JS" />
      <div className="ability-info-container">
        <TertiaryTitle textContent="React JS" modifierClass="ability__name" />
        <PrimaryParagraph
          textContent="Distributed version control system"
          modifierClass="ability__desc"
        />
      </div>
    </li>
  );
}
