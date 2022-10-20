import React, { useContext } from 'react';
import { HeroSection, Modal } from 'containers/indexContainers';
import { ProjectDetailsCard } from 'components/indexComponents';
import { EventContext } from 'context/EventContext';
import './Projects.scss';

export function Projects() {
  const { state } = useContext(EventContext);
  return (
    <>
      <main className="projects-page">
        <HeroSection />
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
