import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import videoHero from 'videos/hero-background.mp4';
import sebasDeveloper from 'images/sebas-developer.jpg';
import {
  PrimaryTitle,
  PrimaryButton,
  SecondaryTitle,
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
            <PrimaryTitle
              modifierClass="hero__title"
              textContent="Hi I'm Sebastian Pedroza"
            />
            <SecondaryTitle
              textContent="[ Frontend Developer ]"
              modifierClass="hero__subtitle"
            />
            <PrimaryButton
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
