/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroProjects, GenericList } from 'containers/indexContainers';
import {
  ProjectCard,
  GoToUpButton,
  GenericLoadingCard,
  MetaHead,
} from 'components/indexComponents';
import { useSearchProjects } from 'hooks/useSearchProjects';
import './Projects.scss';

export function Projects() {
  const navigate = useNavigate();
  const { loading, error, searchValue, setSearchValue, searchedProjects } =
    useSearchProjects();

  /* Sorting the projects by creation time. */
  searchedProjects.sort((a, b) => b.creationTime - a.creationTime);

  /**
   * When the user clicks on a project, navigate to the project's page.
   */
  const onClickHandler = (project) => {
    navigate(`/project/${project?.slug}`);
  };

  return (
    <>
      <MetaHead
        title="SebasDeveloper | Proyectos"
        description="Conoce más de los proyectos construidos por @SebasDeveloper y de las habilidades usadas durante su construcción."
        image="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        url={document.location.href}
      />
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
                  projectData={project}
                />
              ))
            )}
          </GenericList>
        </div>
        <GoToUpButton />
      </main>
    </>
  );
}
