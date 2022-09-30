import React from 'react';
import aboutImage from 'images/about-img.png';
import { PrimaryParagraph, SecondaryTitle } from 'components/indexComponents';
import './AboutSection.scss';

export function AboutSection() {
  return (
    <section className="about">
      <div className="about-content">
        <img src={aboutImage} alt="" className="about__img" />
        <div className="about-text-container">
          <SecondaryTitle
            textContent="Who I am?"
            modifierClass="about__title"
          />
          <PrimaryParagraph
            textContent=" Soy un apasionado de la tecnología y del aprendizaje colaborativo, cuento con un perfil profesional completo que se encuentra avalado por mi formación como Ingeniero de Sistemas y especialmente por mi enfoque técnico como desarrollador Front-End. Busco colaborar de forma efectiva en el desarrollo personal y profesional de las personas con las que trabajo y en la elaboración de productos y servicios tecnológicos de calidad."
            modifierClass="about__descr"
          />
        </div>
      </div>
    </section>
  );
}
