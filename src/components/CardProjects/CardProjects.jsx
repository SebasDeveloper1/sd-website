import React from 'react';
import { ThirdTitle, FirstParagraph } from 'components/indexComponents';
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
        <img
          className="card-project__img"
          src="https://leonidasesteban.com/_next/image?url=https%3A%2F%2Fd1ngjctyujvjjy.cloudfront.net%2Fprojects%2Fcovers%2F2a0065e7-38d4-43d5-88d4-a1ee3b37cdb9%2FThumbnail-vocabulario.dev.png&w=1920&q=75"
          alt=""
        />
        <div className="project-info-container">
          <ThirdTitle
            textContent="Aplicacion AppDopta"
            modifierClass="project__name"
          />
          <FirstParagraph
            textContent="JavaScript, React, Css, Html, Git, Github, Sass"
            modifierClass="project__tools"
          />
        </div>
      </button>
    </li>
  );
}
