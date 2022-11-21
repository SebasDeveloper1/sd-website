/* eslint-disable no-nested-ternary */
import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import {
  SecondTitle,
  FirstParagraph,
  ProjectCard,
  GenericLoadingCard,
  SecondButton,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './ProjectsSection.scss';

export function ProjectsSection() {
  const [projectList, setProjectList] = useState([]);
  const { dataList, loading, error } = useGetData({ Ref: 'projects' });
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useLayoutEffect(() => {
    const sortList = dataList
      .sort((a, b) => b.creationTime - a.creationTime)
      .slice(0, 6);
    return setProjectList(sortList);
  }, [loading]);

  const onClickHandler = (project) => {
    navigate(`/project/${project?.slug}`);
  };

  const redirectHandler = () => {
    navigate('/projects');
  };

  return (
    <section className="projects">
      <div
        ref={ref}
        className={
          inView
            ? 'projects-content entrance-animation entrance-animation-right'
            : 'projects-content entrance-animation'
        }
      >
        <SecondTitle
          textContent="Últimos proyectos"
          modifierClass="projects__title-section"
        />
        <FirstParagraph
          textContent="Me apasiona poner en práctica cada nuevo concepto que aprendo, por esto que realizo proyectos frecuentemente que ponen a prueba mis habilidades, que me permiten pulir mis técnicas y que me ofrecen la oportunidad de mostrarle al mundo lo que sé."
          modifierClass="projects__paragraph"
        />
        <ul className="projects__container-cards">
          {loading ? (
            <>
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
            </>
          ) : error ? (
            <p>{`Error... ${error}`}</p>
          ) : (
            projectList.map((project) => (
              <ProjectCard
                key={`project-home__${project?.id}`}
                onClick={() => {
                  onClickHandler(project);
                }}
                onKeyDown={() => {
                  onClickHandler(project);
                }}
                projectData={project}
              />
            ))
          )}
        </ul>
        <SecondButton
          type="button"
          modifierClass="projects__see-more-btn"
          textButton="Ver más proyectos "
          srcIcon={faEye}
          onClick={redirectHandler}
          onKeyDown={redirectHandler}
        />
      </div>
    </section>
  );
}
