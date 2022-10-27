import React from 'react';
import { SecondParagraph, ImageLink } from 'components/indexComponents';
import { GenericList } from 'containers/indexContainers';
import './SchoolsSection.scss';

export function SchoolsSection() {
  return (
    <section className="schools">
      <div className="schools-content">
        <SecondParagraph
          textContent="Instituciones que han sido parte fundamental de mi crecimiento"
          modifierClass="schools__title-section"
        />
        <GenericList modifierClass="schools-cards-container">
          <ImageLink />
          <ImageLink />
        </GenericList>
      </div>
    </section>
  );
}
