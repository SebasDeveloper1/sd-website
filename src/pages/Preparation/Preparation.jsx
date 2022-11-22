import React from 'react';
import { Helmet } from 'react-helmet';
import {
  HeroPreparation,
  ProfessionalTitles,
  Certifications,
} from 'containers/indexContainers';
import { GoToUpButton } from 'components/indexComponents';
import './Preparation.scss';

export function Preparation() {
  return (
    <>
      <Helmet>
        <title>SebasDeveloper | Educación</title>
      </Helmet>
      <main className="preparation-page">
        <div id="top" />
        <HeroPreparation />
        <ProfessionalTitles />
        <Certifications />
        <GoToUpButton />
      </main>
    </>
  );
}
