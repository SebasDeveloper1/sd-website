import React from 'react';
import imagePrueba from 'images/instagram-logo.svg';
import { FirstParagraph } from 'components/indexComponents';
import './ContactCard.scss';

export function ContactCard() {
  return (
    <li className="card-contact-container">
      <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        className="card-contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="card-contact__img" src={imagePrueba} alt="Logo JS" />
        <div className="contact-info-container">
          <FirstParagraph
            textContent="Javascript"
            modifierClass="contact__name"
          />
        </div>
      </a>
    </li>
  );
}
