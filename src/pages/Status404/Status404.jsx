import React from 'react';
import status404 from 'images/404_status.svg';
import {
  PrimaryParagraph,
  SecondaryTitle,
  TertiaryButton,
} from 'components/indexComponents';
import './Status404.scss';

const onClick = () => {
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
        <SecondaryTitle
          textContent="😥 Hmmm! 😥"
          modifierClass="status-404__title"
        />

        <PrimaryParagraph
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
