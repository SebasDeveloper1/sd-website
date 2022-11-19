import React from 'react';
import { SmallParagraph, FirstParagraph } from 'components/indexComponents';
import './CertificateCard.scss';

export function CertificateCard({ image, link, name, school, time }) {
  const date = new Date(time).getFullYear();
  return (
    <li className="card-certificate-container">
      <a
        href={link}
        className="card-certificate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="card-certificate__img" src={image} alt={name} />
        <div className="certificate-info-container">
          <FirstParagraph
            textContent={name}
            modifierClass="certificate__name"
          />
          <SmallParagraph
            textContent={school}
            modifierClass="certificate__institution"
          />
          <SmallParagraph
            textContent={date}
            modifierClass="certificate__time"
          />
        </div>
      </a>
    </li>
  );
}
