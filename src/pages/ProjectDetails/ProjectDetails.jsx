import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ProjectInfo } from 'containers/indexContainers';
import './ProjectDetails.scss';

export function ProjectDetails() {
  const { projectId } = useParams();
  return (
    <>
      <Helmet>
        <title>{`SebasDeveloper | ${projectId}`}</title>
      </Helmet>
      <main className="project-details-page">
        <ProjectInfo />
      </main>
    </>
  );
}
