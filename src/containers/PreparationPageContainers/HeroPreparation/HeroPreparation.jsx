import React from 'react';
import { SecondTitle, SecondParagraph } from 'components/indexComponents';
import heroPreparation from 'images/slide3.webp';
import './HeroPreparation.scss';

export function HeroPreparation() {
  return (
    <section className="preparation-hero">
      <div className="preparation-hero-content">
        <div className="preparation-hero-info">
          <SecondTitle
            textContent="My preparation"
            modifierClass="preparation-hero-info__title"
          />
          <SecondParagraph
            textContent="Comparte y discute sobre temas de programación, diseño, marketing, video, startups y negocios."
            modifierClass="preparation-hero-info__descr"
          />
        </div>
        <img
          className="preparation-hero-content__img"
          src={heroPreparation}
          alt=""
        />
      </div>
    </section>
  );
}
