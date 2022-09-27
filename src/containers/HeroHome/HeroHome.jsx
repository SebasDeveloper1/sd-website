import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { PrimaryTitle } from '@components/PrimaryTitle/PrimaryTitle';
import { SecondaryTitle } from '@components/SecondaryTitle/SecondaryTitle';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import videoHero from '@videos/hero-background.mp4';
import sebasDeveloper from '@images/sebas-developer.jpg';
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
      ></video>

      <div className="hero__container">
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
              modifierClass="hero__subtitle"
              textContent="[ Frontend Developer ]"
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
