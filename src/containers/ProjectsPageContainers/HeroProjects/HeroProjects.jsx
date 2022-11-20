import React from 'react';
import {
  SecondTitle,
  SecondParagraph,
  SearchInput,
} from 'components/indexComponents';
import './HeroProjects.scss';

export function HeroProjects({ searchInputValue, setSearchInputValue }) {
  return (
    <section className="projects-hero">
      <div className="projects-hero-info">
        <SecondTitle
          textContent="Mis proyectos"
          modifierClass="projects-hero-info__title"
        />
        <SecondParagraph
          textContent="Descubre mi trabajo y todos los proyectos que he construido para mostrar mis conocimientos y poner a prueba mis habilidades."
          modifierClass="projects-hero-info__descr"
        />
        <SearchInput
          type="text"
          name="searchProjects"
          placeholder="Buscar proyectos"
          modifierClassContainer="projects-hero-info__input"
          value={searchInputValue}
          onChange={setSearchInputValue}
        />
      </div>
    </section>
  );
}
