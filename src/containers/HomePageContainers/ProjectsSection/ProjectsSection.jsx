import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {
  SecondTitle,
  FirstParagraph,
  ProjectCard,
  SecondButton,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './ProjectsSection.scss';

export function ProjectsSection() {
  const { dataList, loading, error } = useGetData({ Ref: 'projects' });
  const navigate = useNavigate();

  const onClickHandler = (project) => {
    navigate(`/project/${project.slug}`);
  };

  return (
    <section className="projects">
      <div className="projects-content">
        <SecondTitle
          textContent="Featured projects..."
          modifierClass="projects__title-section"
        />
        <FirstParagraph
          textContent="Me apasiona escribir y crear contenido sobre ReactJS en mi canal de YouTube y en este blog donde escribo de JavaScript y las conferencias que imparto."
          modifierClass="projects__paragraph"
        />
        <ul className="projects__container-cards">
          {dataList.map((project) => (
            <ProjectCard
              key={`project-home__${project.id}`}
              onClick={() => {
                onClickHandler(project);
              }}
              onKeyDown={() => {
                onClickHandler(project);
              }}
              projectData={project}
            />
          ))}
        </ul>
        <SecondButton
          type="button"
          modifierClass="projects__see-more-btn"
          textButton="See more projects"
          srcIcon={faEye}
        />
      </div>
    </section>
  );
}
