/* eslint-disable no-nested-ternary */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroProjects, GenericList } from 'containers/indexContainers';
import {
  ProjectCard,
  GoToUpButton,
  GenericLoadingCard,
} from 'components/indexComponents';
import { useSearchProjects } from 'hooks/useSearchProjects';
import './Projects.scss';

export function Projects() {
  const navigate = useNavigate();
  const { loading, error, searchValue, setSearchValue, searchedProjects } =
    useSearchProjects();

  /* Sorting the projects by creation time. */
  searchedProjects.sort((a, b) => b.creationTime - a.creationTime);

  const onClickHandler = (project) => {
    navigate(`/project/${project?.slug}`);
  };

  return (
    <main className="projects-page">
      <div id="top" />
      <HeroProjects
        searchInputValue={searchValue}
        setSearchInputValue={setSearchValue}
      />
      <div className="projects-grid-container">
        <GenericList>
          {loading ? (
            <>
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
            </>
          ) : error ? (
            <p>{`Error... ${error}`}</p>
          ) : (
            searchedProjects.map((project) => (
              <ProjectCard
                key={`project-home__${project?.id}`}
                modifierClass="projects-grid__card"
                onClick={() => {
                  onClickHandler(project);
                }}
                onKeyDown={() => {
                  onClickHandler(project);
                }}
                projectData={project}
              />
            ))
          )}
        </GenericList>
      </div>
      <GoToUpButton />
    </main>
  );
}
