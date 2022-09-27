import React from 'react';
import status404 from '@images/404_status.svg';
import { PrimaryTitle } from '@components/PrimaryTitle/PrimaryTitle';
import { SecondaryTitle } from '@components/SecondaryTitle/SecondaryTitle';
import { TertiaryButton } from '@components/TertiaryButton/TertiaryButton';
import './Status404.scss';

const onClick = (e) => {
  window.history.back();
};

export function Status404() {
  return (
    <section className="status-404">
      <div className="container-404">
        <img
          src={status404}
          alt="Status 404"
          className="container-404__image"
        />
        <PrimaryTitle
          textContent="😥 Hmmm! 😥"
          modifierClass="status-404__title"
        />

        <SecondaryTitle
          textContent="We did not find what you were looking for."
          modifierClass="status-404__subtitle"
        />

        <TertiaryButton
          type="button"
          textButton="Go back"
          modifierClass="status-404__back-btn"
          onClick={onClick}
        />
      </div>
    </section>
  );
}
