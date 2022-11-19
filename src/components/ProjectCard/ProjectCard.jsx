import React from 'react';
import { ThirdTitle, FirstParagraph } from 'components/indexComponents';
import './ProjectCard.scss';

export function ProjectCard({
  modifierClass,
  style,
  onClick,
  onKeyDown,
  projectData,
}) {
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
          src={projectData?.images[0]}
          alt=""
        />
        <div className="project-info-container">
          <ThirdTitle
            textContent={projectData?.name}
            modifierClass="project__name"
          />
          <FirstParagraph
            textContent={projectData?.type}
            modifierClass="project__tools"
          />
        </div>
      </button>
    </li>
  );
}
