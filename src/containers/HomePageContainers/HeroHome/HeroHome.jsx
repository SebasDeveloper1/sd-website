import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import videoHero from 'videos/hero-background.mp4';
import sebasDeveloper from 'images/sebas-developer.webp';
import {
  FirstTitle,
  FirstButton,
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
            <FirstButton
              type="button"
              modifierClass="hero__dowload-btn"
              textButton={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <a
                  className="hero__dowload-btn--link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/CV%2FSebasDeveloperCV.pdf?alt=media&token=1079ce97-8f8b-4427-adb3-41d3e080737d"
                >
                  Descargar CV
                </a>
              }
              srcIcon={faDownload}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
