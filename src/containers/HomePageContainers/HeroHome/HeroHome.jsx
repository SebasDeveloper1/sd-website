import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import videoHero from 'videos/hero-background.mp4';
import sebasDeveloper from 'images/sebas-developer.jpg';
import {
  FirstTitle,
  FirstButton,
  SecondTitle,
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
              textContent="Hi I'm Sebastian Pedroza"
            />
            <SecondTitle
              textContent="[ Frontend Developer ]"
              modifierClass="hero__subtitle"
            />
            <FirstButton
              type="button"
              modifierClass="hero__dowload-btn"
              textButton="Download CV"
              srcIcon={faDownload}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
