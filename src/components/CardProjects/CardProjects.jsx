import React from 'react';
import projectImage from 'images/project-pruebas.png';
import { TertiaryTitle, PrimaryParagraph } from 'components/indexComponents';
import './CardProjects.scss';

export function CardProjects(props) {
  const { style, onClick, onKeyDown } = props;

  return (
    <li className="card-project-container">
      <button
        type="button"
        className="card-project"
        style={style}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <img className="card-project__img" src={projectImage} alt="" />
        <div className="project-info-container">
          <TertiaryTitle textContent="React JS" modifierClass="project__name" />
          <PrimaryParagraph
            textContent="JavaScript, React, Css, Html, Git"
            modifierClass="project__tools"
          />
          <PrimaryParagraph
            textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            modifierClass="project__desc"
          />
        </div>
      </button>
    </li>
  );
}
