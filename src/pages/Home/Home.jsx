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
import { ProjectDetailsCard, GoToUpButton } from 'components/indexComponents';
import { EventContext } from 'context/EventContext';
import './Home.scss';

export function Home() {
  const { state } = useContext(EventContext);
  return (
    <>
      <main className="home-page">
        <div id="top" />
        <HeroHome />
        <AboutSection />
        <AbilitiesSection />
        <ProjectsSection />
        <PreparationSection />
        <ContactSection />
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
