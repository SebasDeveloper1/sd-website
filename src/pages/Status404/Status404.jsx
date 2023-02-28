import React from 'react';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import status404 from 'images/404_status.svg';
import {
  FirstParagraph,
  SecondTitle,
  SecondButton,
  MetaHead,
} from 'components/indexComponents';
import './Status404.scss';

const onClick = () => {
  window.history.back();
};

export default function Status404() {
  return (
    <>
      <MetaHead
        title="SebasDeveloper | 404"
        description="(Status 404) No encontramos lo que estabas buscando."
        image="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        url={document.location.href}
      />
      <main className="status-404">
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
            textContent="No encontramos lo que estabas buscando."
            modifierClass="status-404__subtitle"
          />

          <SecondButton
            type="button"
            textButton="Regresar"
            modifierClass="status-404__back-btn"
            srcIcon={faAngleLeft}
            onClick={onClick}
          />
        </div>
      </main>
    </>
  );
}
