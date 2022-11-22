import React from 'react';
import { Helmet } from 'react-helmet';
import {
  HeroHome,
  AboutSection,
  AbilitiesSection,
  ProjectsSection,
  PreparationSection,
  ContactSection,
} from 'containers/indexContainers';
import { GoToUpButton } from 'components/indexComponents';
import './Home.scss';

export function Home() {
  return (
    <>
      <Helmet>
        <title>SebasDeveloper | Inicio</title>
      </Helmet>
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
    </>
  );
}
