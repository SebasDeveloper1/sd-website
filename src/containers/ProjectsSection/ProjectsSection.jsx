import React, { useContext } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {
  SecondTitle,
  CardProjects,
  SecondButton,
} from 'components/indexComponents';
import { EventContext } from 'context/EventContext';
import './ProjectsSection.scss';

export function ProjectsSection() {
  const { handleModal, handleModalDown } = useContext(EventContext);
  return (
    <section className="projects">
      <div className="projects-content">
        <SecondTitle
          textContent="Featured projects..."
          modifierClass="projects__title-section"
        />
        <ul className="projects__container-cards">
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
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
