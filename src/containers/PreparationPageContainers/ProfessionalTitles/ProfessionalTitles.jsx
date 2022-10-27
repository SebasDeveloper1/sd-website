import React from 'react';
import { SecondTitle, CertificateCard } from 'components/indexComponents';
import { GenericList } from 'containers/indexContainers';
import './ProfessionalTitles.scss';

export function ProfessionalTitles() {
  return (
    <section className="prof-titles">
      <div className="prof-titles-content">
        <SecondTitle
          textContent="Titulos Profecionales"
          modifierClass="prof-titles__title"
        />
        <GenericList modifierClass="prof-titles-cards-container">
          <CertificateCard />
        </GenericList>
      </div>
    </section>
  );
}
