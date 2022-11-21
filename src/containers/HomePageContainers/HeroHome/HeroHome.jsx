import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import videoHero from 'videos/hero-background.mp4';
import sebasDeveloper from 'images/sebas-developer.jpg';
import {
  FirstTitle,
  FirstButton,
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
      />

      <div className="hero__content">
        <div className="hero__info-container">
          <img
            className="hero__info-image"
            src={sebasDeveloper}
            alt="SebasDeveloper"
          />
          <div className="hero__text">
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
                  href="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/CV%2FSebasDeveloperCV.pdf?alt=media&token=b069951c-8605-4f55-9957-534789161277"
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
