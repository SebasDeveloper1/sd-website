import React from 'react';
import { FourthTitle, FirstParagraph } from 'components/indexComponents';
import './ContactCard.scss';

export function ContactCard({ link, imgSrc, name, nickname }) {
  return (
    <li className="card-contact-container">
      <a
        href={link}
        className="card-contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="card-contact__img" src={imgSrc} alt={name} />
        <div className="contact-info-container">
          <FourthTitle textContent={name} modifierClass="contact__name" />
          <FirstParagraph
            textContent={`@${nickname}`}
            modifierClass="contact__nickname"
          />
        </div>
      </a>
    </li>
  );
}
