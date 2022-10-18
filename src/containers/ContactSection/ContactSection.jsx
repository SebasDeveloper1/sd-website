import React from 'react';
import { GenericList } from 'containers/indexContainers';
import {
  SecondTitle,
  ThirdTitle,
  SecondParagraph,
  ContactCard,
} from 'components/indexComponents';
import './ContactSection.scss';

export function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-content">
        <SecondTitle
          textContent="Contact me..."
          modifierClass="contact__title-section"
        />
        <div className="contact-section__header">
          <ThirdTitle
            textContent="@SebasDeveloper"
            modifierClass="contact-section__header-title"
          />
          <SecondParagraph
            textContent="Do you want to work with me?, send me a ping!"
            modifierClass="contact-section__header-paragraph"
          />
        </div>
        <GenericList modifierClass="contact-container-cards">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </GenericList>
      </div>
    </section>
  );
}
