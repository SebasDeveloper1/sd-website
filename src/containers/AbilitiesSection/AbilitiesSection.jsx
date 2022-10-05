import React from 'react';
import { GenericList } from 'containers/indexContainers';
import {
  SecondaryTitle,
  CardAbility,
  CardMore,
} from 'components/indexComponents';
import './AbilitiesSection.scss';

export function AbilitiesSection() {
  return (
    <section className="abilities">
      <div className="abilities-content">
        <SecondaryTitle
          textContent="Languages and Tools..."
          modifierClass="abilities__title-section"
        />
        <GenericList>
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardMore
            textContent="🚀 Improving daily 😊"
            modifierClass="abilities__card-more"
          />
        </GenericList>
      </div>
    </section>
  );
}
