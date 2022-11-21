import React from 'react';
import aboutImage from 'images/about-img.jpg';
import { FirstParagraph, SecondTitle } from 'components/indexComponents';
import './AboutSection.scss';

export function AboutSection() {
  return (
    <section className="about">
      <div className="about-content">
        <img
          src={aboutImage}
          alt="Sebas Pedroza en la Platzi Conf 2022"
          className="about__img"
        />
        <div className="about-text-container">
          <SecondTitle textContent="¿Quién soy?" modifierClass="about__title" />
          <FirstParagraph
            textContent="
            Hola! Soy Sebastian Pedroza, soy ingeniero de sistemas y desarrollador Font-End. Me considero una persona creativa, innovadora, curiosa y sobre todo apasionada por el mundo de la tecnología. Busco colaborar de forma efectiva en el desarrollo personal y profesional de las personas con las que trabajo y en la elaboración de productos y servicios tecnológicos de calidad que aporten un valor agregado al mundo y que impacten de forma positiva en la vida de sus usuarios."
            modifierClass="about__descr"
          />
        </div>
      </div>
    </section>
  );
}
