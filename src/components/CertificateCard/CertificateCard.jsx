import React from 'react';
import {
  FourthTitle,
  SmallParagraph,
  FirstParagraph,
} from 'components/indexComponents';
import imagePrueba from 'images/certificates.webp';
import './CertificateCard.scss';

export function CertificateCard() {
  return (
    <li className="card-certificate-container">
      <a
        href="https://developer.mozilla.org/es/docs/Web/JavaScript"
        className="card-certificate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card-certificate__img"
          src={imagePrueba}
          alt="Logo JS"
        />
        <div className="certificate-info-container">
          <FourthTitle
            textContent="Ingeniero de Sistemas"
            modifierClass="certificate__name"
          />
          <FirstParagraph
            textContent="Universidad de Cundinamarca"
            modifierClass="certificate__institution"
          />
          <SmallParagraph
            textContent="2017 - 2022"
            modifierClass="certificate__time"
          />
        </div>
      </a>
    </li>
  );
}
