import React from 'react';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';
import {
  SecondTitle,
  FirstParagraph,
  FirstButton,
  SecondButton,
  Slideshow,
} from 'components/indexComponents';
import './ProjectDetailsCard.scss';

export function ProjectDetailsCard() {
  return (
    <div className="project-details-container">
      <div className="project-details-content">
        <div className="project-detais__img">
          <Slideshow />
        </div>
        <div className="project-details-info-container">
          <div className="project-details-info-content">
            <SecondTitle
              textContent="AppDopta"
              modifierClass="project-details__name"
            />
            <FirstParagraph
              textContent="JavaScript, React, Css, Html, Git, Github, Sass"
              modifierClass="project-details__tools"
            />
            <FirstParagraph
              textContent="Soy un apasionado de la tecnología y del aprendizaje colaborativo, cuento con un perfil profesional completo que se encuentra avalado por mi formación como Ingeniero de Sistemas y especialmente por mi enfoque técnico como desarrollador Front-End."
              modifierClass="project-details__descr"
            />
            <div className="project-details-btn-container">
              <FirstButton
                type="button"
                textButton="Preview"
                modifierClass="project-details__preview-btn"
                srcIcon={faLink}
              />
              <SecondButton
                type="button"
                textButton="Code"
                modifierClass="project-details__code-btn"
                srcIcon={faCode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
