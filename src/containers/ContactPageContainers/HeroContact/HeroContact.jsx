import React from 'react';
import { SecondTitle, SecondParagraph } from 'components/indexComponents';
import sebasDeveloper from 'images/sebas-developer.jpg';
import './HeroContact.scss';

export function HeroContact() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-content">
        <figure className="contact-hero__img-container">
          <img
            className="contact-hero__img"
            src={sebasDeveloper}
            alt="SebasDeveloper"
          />
        </figure>
        <SecondTitle
          textContent="@SebasDeveloper"
          modifierClass="contact-hero__title"
        />
        <SecondParagraph
          textContent="¿Quieres trabajar conmigo? ¡Hazme un ping!"
          modifierClass="contact-hero__paragraph"
        />
      </div>
    </section>
  );
}
