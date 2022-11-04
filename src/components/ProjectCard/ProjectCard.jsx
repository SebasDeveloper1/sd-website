import React from 'react';
import { ThirdTitle, FirstParagraph } from 'components/indexComponents';
import './ProjectCard.scss';

export function ProjectCard(props) {
  const { modifierClass, style, onClick, onKeyDown, projectData } = props;

  const tools = projectData.projectTools.join(', ');

  return (
    <li
      className={
        modifierClass
          ? `card-project-container ${modifierClass}`
          : 'card-project-container'
      }
    >
      <button
        type="button"
        className="card-project"
        style={style}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <img
          className="card-project__img"
          src={projectData.projectImages[0]}
          alt=""
        />
        <div className="project-info-container">
          <ThirdTitle
            textContent={projectData.projectName}
            modifierClass="project__name"
          />
          <FirstParagraph textContent={tools} modifierClass="project__tools" />
        </div>
      </button>
    </li>
  );
}
