import React from 'react';
import { HeroContact, GenericList } from 'containers/indexContainers';
import { ContactCard } from 'components/indexComponents';
import './Contact.scss';

export function Contact() {
  return (
    <main className="contact-page">
      <HeroContact />
      <section className="contact-page__container-cards">
        <GenericList modifierClass="contact-page__cards-list ">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </GenericList>
      </section>
    </main>
  );
}
