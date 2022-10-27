import React from 'react';
import {
  SecondTitle,
  SecondParagraph,
  SecondList,
  CertificateCard,
} from 'components/indexComponents';
import { GenericList } from 'containers/indexContainers';
import './Certifications.scss';

export function Certifications() {
  const cerfificationTypes = [
    { routeName: 'Desarollo Web', routeLink: 'desarrolloWeb' },
    { routeName: 'Inglés', routeLink: 'ingles' },
    {
      routeName: 'Hab. Blandas',
      routeLink: 'habilidadesBlandas',
    },
  ];
  return (
    <section className="certifications">
      <div className="certifications-content">
        <SecondTitle
          textContent="Certificaciones..."
          modifierClass="certifications__title"
        />
        <SecondList
          routeList={cerfificationTypes}
          modifierClassList="certifications__nav-list"
          modifierClassRouteList=""
          modifierClassRoute=""
        />
        <div id="desarrolloWeb" className="certifications-category-container">
          <SecondParagraph
            textContent="Desarrollo Web..."
            modifierClass="certifications-category__title"
          />
          <GenericList modifierClass="certifications-category-cards-container">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </GenericList>
        </div>
        <div id="ingles" className="certifications-category-container">
          <SecondParagraph
            textContent="Inglés..."
            modifierClass="certifications-category__title"
          />
          <GenericList modifierClass="certifications-category-cards-container">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </GenericList>
        </div>
        <div
          id="habilidadesBlandas"
          className="certifications-category-container"
        >
          <SecondParagraph
            textContent="Habilidades Blandas..."
            modifierClass="certifications-category__title"
          />
          <GenericList modifierClass="certifications-category-cards-container">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </GenericList>
        </div>
      </div>
    </section>
  );
}
