import React from 'react';
import {
  SecondTitle,
  SecondParagraph,
  SearchInput,
} from 'components/indexComponents';
import heroProjects from 'images/hero_projects.svg';
import './HeroSection.scss';

export function HeroSection() {
  return (
    <section className="projects-hero">
      <div className="projects-hero-content">
        <div className="projects-hero-info">
          <SecondTitle
            textContent="My projects"
            modifierClass="projects-hero-info__title"
          />
          <SecondParagraph
            textContent="Comparte y discute sobre temas de programación, diseño, marketing, video, startups y negocios."
            modifierClass="projects-hero-info__descr"
          />
          <SearchInput
            type="text"
            name="searchProjects"
            placeholder="Search projects..."
            modifierClassContainer="projects-hero-info__input"
          />
        </div>
        <img className="projects-hero-content__img" src={heroProjects} alt="" />
      </div>
    </section>
  );
}
