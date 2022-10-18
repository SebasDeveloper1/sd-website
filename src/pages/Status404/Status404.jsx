import React from 'react';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import status404 from 'images/404_status.svg';
import {
  FirstParagraph,
  SecondTitle,
  SecondButton,
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
        <SecondTitle
          textContent="😥 Hmmm! 😥"
          modifierClass="status-404__title"
        />

        <FirstParagraph
          textContent="We did not find what you were looking for."
          modifierClass="status-404__subtitle"
        />

        <SecondButton
          type="button"
          textButton="Go back"
          modifierClass="status-404__back-btn"
          srcIcon={faAngleLeft}
          onClick={onClick}
        />
      </div>
    </section>
  );
}
