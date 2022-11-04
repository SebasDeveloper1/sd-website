import React from 'react';
import { HeroProjects, GenericList } from 'containers/indexContainers';
import { ProjectCard, GoToUpButton } from 'components/indexComponents';
import './Projects.scss';

export function Projects() {
  return (
    <main className="projects-page">
      <div id="top" />
      <HeroProjects />
      <div className="projects-grid-container">
        <GenericList></GenericList>
      </div>
      <GoToUpButton />
    </main>
  );
}
