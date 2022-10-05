import React, { useContext } from 'react';
import {
  Header,
  HeroHome,
  AboutSection,
  AbilitiesSection,
  ProjectsSection,
  Modal,
} from 'containers/indexContainers';
import { EventContext } from 'context/EventContext';
import './Home.scss';

export function Home() {
  const { state } = useContext(EventContext);
  return (
    <>
      <Header idSection="1" />
      <main className="home">
        <HeroHome />
        <AboutSection />
        <AbilitiesSection />
        <ProjectsSection />
      </main>
      <Modal
        modifierClass={
          state.openModal.modalState ? 'modal-container--open' : ''
        }
      />
    </>
  );
}
