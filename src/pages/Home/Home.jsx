import React, { useContext } from 'react';
import {
  HeroHome,
  AboutSection,
  AbilitiesSection,
  ProjectsSection,
  PreparationSection,
  ContactSection,
  Modal,
} from 'containers/indexContainers';
import { ProjectDetailsCard } from 'components/indexComponents';
import { EventContext } from 'context/EventContext';
import './Home.scss';

export function Home() {
  const { state } = useContext(EventContext);
  return (
    <>
      <main className="home">
        <HeroHome />
        <AboutSection />
        <AbilitiesSection />
        <ProjectsSection />
        <PreparationSection />
        <ContactSection />
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
