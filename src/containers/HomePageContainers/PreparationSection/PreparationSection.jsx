import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { GenericList } from 'containers/indexContainers';
import {
  SecondTitle,
  ImageLink,
  SecondButton,
} from 'components/indexComponents';
import './PreparationSection.scss';

export function PreparationSection() {
  return (
    <section className="preparation">
      <div className="preparation-content">
        <SecondTitle
          textContent="Preparation and Studies..."
          modifierClass="preparation__title-section"
        />
        <GenericList modifierClass="preparation__container-cards">
          <ImageLink />
          <ImageLink />
        </GenericList>
        <SecondButton
          type="button"
          modifierClass="preparation__see-more-btn"
          textButton="See more details"
          srcIcon={faEye}
        />
      </div>
    </section>
  );
}
