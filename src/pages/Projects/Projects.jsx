import React, { useContext } from 'react';
import { HeroProjects, GenericList, Modal } from 'containers/indexContainers';
import {
  ProjectCard,
  ProjectDetailsCard,
  GoToUpButton,
} from 'components/indexComponents';
import { EventContext } from 'context/EventContext';
import './Projects.scss';

export function Projects() {
  const { state, handleModal, handleModalDown } = useContext(EventContext);

  return (
    <>
      <main className="projects-page">
        <div id="top" />
        <HeroProjects />
        <div className="projects-grid-container">
          <GenericList>
            <ProjectCard
              modifierClass="projects-grid__card"
              onClick={handleModal}
              onKeyDown={handleModalDown}
            />
            <ProjectCard
              modifierClass="projects-grid__card"
              onClick={handleModal}
              onKeyDown={handleModalDown}
            />
            <ProjectCard
              modifierClass="projects-grid__card"
              onClick={handleModal}
              onKeyDown={handleModalDown}
            />
            <ProjectCard
              modifierClass="projects-grid__card"
              onClick={handleModal}
              onKeyDown={handleModalDown}
            />
            <ProjectCard
              modifierClass="projects-grid__card"
              onClick={handleModal}
              onKeyDown={handleModalDown}
            />
            <ProjectCard
              modifierClass="projects-grid__card"
              onClick={handleModal}
              onKeyDown={handleModalDown}
            />
          </GenericList>
        </div>
        <GoToUpButton />
      </main>
      <Modal
        modifierClass={
          state.openModal.modalState ? 'modal-container--open' : ''
        }
      >
        <ProjectDetailsCard />
      </Modal>
    </>
  );
}
