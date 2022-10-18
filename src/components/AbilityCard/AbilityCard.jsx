import React from 'react';
import imagePrueba from 'images/react-logo.svg';
import { FirstParagraph, ThirdTitle } from 'components/indexComponents';
import './AbilityCard.scss';

export function AbilityCard(props) {
  // const { abilityUrl } = props;
  return (
    <li className="card-ability-container">
      <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        className="card-ability"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="card-ability__img" src={imagePrueba} alt="Logo JS" />
        <div className="ability-info-container">
          <ThirdTitle textContent="Javascript" modifierClass="ability__name" />
          <FirstParagraph
            textContent="Programming language for the web"
            modifierClass="ability__desc"
          />
        </div>
      </a>
    </li>
  );
}
