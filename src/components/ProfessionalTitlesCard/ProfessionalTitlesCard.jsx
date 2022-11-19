import React from 'react';
import { SmallParagraph, FirstParagraph } from 'components/indexComponents';
import './ProfessionalTitlesCard.scss';

export function ProfessionalTitlesCard({ image, link, name, school, time }) {
  return (
    <li className="card-professional-container">
      <a
        href={link}
        className="card-professional"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="card-professional__img" src={image} alt={name} />
        <div className="professional-info-container">
          <FirstParagraph
            textContent={name}
            modifierClass="professional__name"
          />
          <SmallParagraph
            textContent={school}
            modifierClass="professional__institution"
          />
          <SmallParagraph
            textContent={time}
            modifierClass="professional__time"
          />
        </div>
      </a>
    </li>
  );
}
