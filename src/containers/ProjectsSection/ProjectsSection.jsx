import React, { useContext } from 'react';
import { GenericList } from 'containers/indexContainers';
import {
  SecondaryTitle,
  CardProjects,
  SecondaryButton,
} from 'components/indexComponents';
import { EventContext } from 'context/EventContext';
import './ProjectsSection.scss';

export function ProjectsSection() {
  const { handleModal, handleModalDown } = useContext(EventContext);
  return (
    <section className="projects">
      <div className="projects-content">
        <SecondaryTitle
          textContent="Featured projects..."
          modifierClass="projects__title-section"
        />
        <GenericList modifierClass="projects__container-cards">
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
          <CardProjects onClick={handleModal} onKeyDown={handleModalDown} />
        </GenericList>
        <SecondaryButton
          type="button"
          modifierClass="projects__see-more-btn"
          textButton="💻 See more projects 😋"
        />
      </div>
    </section>
  );
}
