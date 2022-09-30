import React from 'react';
import {
  CardAbility,
  PrimaryParagraph,
  SecondaryTitle,
} from 'components/indexComponents';
import './AbilitiesSection.scss';

export function AbilitiesSection() {
  return (
    <section className="abilities">
      <div className="abilities-content">
        <SecondaryTitle
          textContent="My abilities..."
          modifierClass="abilities__title-section"
        />

        <div className="abilities__container-cards">
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <CardAbility />
          <article className="card-ability card-ability--more">
            <PrimaryParagraph
              textContent="🚀 Improving daily 😊"
              modifierClass="ability__desc ability__name--more"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
