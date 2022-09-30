import React from 'react';
import imagePrueba from 'images/js-logo-color.svg';
import { PrimaryParagraph, TertiaryTitle } from 'components/indexComponents';
import './CardAbility.scss';

export function CardAbility() {
  return (
    <article className="card-ability">
      <img className="card-ability__img" src={imagePrueba} alt="Logo JS" />
      <div className="ability-info-container">
        <TertiaryTitle textContent="Javascript" modifierClass="ability__name" />
        <PrimaryParagraph
          textContent="Programming language for the web"
          modifierClass="ability__desc"
        />
      </div>
    </article>
  );
}
