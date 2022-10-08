import React from 'react';
import { SecondTitle } from 'components/indexComponents';
import './ContactSection.scss';

export function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-content">
        <SecondTitle
          textContent="Contact me..."
          modifierClass="contact__title-section"
        />
      </div>
    </section>
  );
}
