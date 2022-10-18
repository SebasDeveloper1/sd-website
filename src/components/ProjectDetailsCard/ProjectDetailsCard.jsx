import React from 'react';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';
import {
  SecondTitle,
  FirstParagraph,
  FirstButton,
  SecondButton,
} from 'components/indexComponents';
import './ProjectDetailsCard.scss';

export function ProjectDetailsCard() {
  return (
    <div className="project-details-container">
      <div className="project-details-content">
        <img
          className="project-detais__img"
          src="https://leonidasesteban.com/_next/image?url=https%3A%2F%2Fd1ngjctyujvjjy.cloudfront.net%2Fprojects%2Fcovers%2F2a0065e7-38d4-43d5-88d4-a1ee3b37cdb9%2FThumbnail-vocabulario.dev.png&w=1920&q=75"
          alt=""
        />
        <div className="project-details-info-container">
          <div className="project-details-info-content">
            <SecondTitle
              textContent="Aplicacion AppDopta"
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
