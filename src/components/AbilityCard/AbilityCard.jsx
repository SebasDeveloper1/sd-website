import React from 'react';
import { FirstParagraph } from 'components/indexComponents';
import './AbilityCard.scss';

export function AbilityCard({
  abilityID,
  abilityName,
  abilityDesc,
  abilityImg,
  abilityLink,
}) {
  return (
    <li className="card-ability-container">
      <a
        href={abilityLink}
        className="card-ability"
        target="_blank"
        rel="noopener noreferrer"
        title={abilityDesc}
        id={abilityID}
      >
        <div className="ability-info-container">
          <FirstParagraph
            textContent={abilityName}
            modifierClass="ability__name"
          />
          <FirstParagraph
            textContent={abilityDesc}
            modifierClass="ability__desc"
          />
        </div>
        <figure className="card-ability__img-container">
          <img
            className="card-ability__img"
            src={abilityImg}
            alt={abilityName}
          />
        </figure>
      </a>
    </li>
  );
}
