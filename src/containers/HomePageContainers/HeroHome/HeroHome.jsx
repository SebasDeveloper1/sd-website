import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import videoHero from 'videos/hero-background.mp4';
import sebasDeveloper from 'images/sebas-developer.webp';
import {
  FirstTitle,
  SecondLink,
  SecondTitle,
  ThirdTitle,
} from 'components/indexComponents';
import './HeroHome.scss';

export function HeroHome() {
  return (
    <section className="hero">
      <video
        src={videoHero}
        className="hero__background-video"
        autoPlay
        loop
        muted
        type="video/mp4"
      />

      <div className="hero__content">
        <div className="hero__info-container">
          <img
            className="hero__info-image"
            src={sebasDeveloper}
            alt="SebasDeveloper"
          />
          <div className="hero__text">
            <SecondTitle
              textContent="Hola, yo soy"
              modifierClass="hero__title-txt"
            />
            <FirstTitle
              modifierClass="hero__title"
              textContent="Sebastian Pedroza"
            />
            <ThirdTitle
              textContent="[ Frontend Developer ]"
              modifierClass="hero__subtitle"
            />
            <SecondLink
              href="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/CV%2FJohan%20Sebastian%20Pedroza%20BonillaCV.pdf?alt=media&token=d447b778-89be-4967-ab27-80aee319745a"
              textContent="Descargar CV"
              modifierClass="hero__dowload-btn"
              srcIcon={faDownload}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
