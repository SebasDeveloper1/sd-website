import React from 'react';
import {
  HeroHome,
  AboutSection,
  AbilitiesSection,
  ProjectsSection,
  PreparationSection,
  ContactSection,
} from 'containers/indexContainers';
import { GoToUpButton, MetaHead } from 'components/indexComponents';
import './Home.scss';

export function Home() {
  return (
    <>
      <MetaHead
        title="SebasDeveloper | Inicio"
        description="Portafolio profesional de Sebastián Pedroza (@SebasDeveloper) sobre temas de Desarrollo Web, JavaScript, CSS, HTML, React y más."
        image="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        url={document.location.href}
      />
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
