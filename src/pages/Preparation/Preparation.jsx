import React from 'react';
import {
  HeroPreparation,
  SchoolsSection,
  ProfessionalTitles,
  Certifications,
} from 'containers/indexContainers';
import { GoToUpButton } from 'components/indexComponents';
import './Preparation.scss';

export function Preparation() {
  return (
    <main className="preparation-page">
      <div id="top" />
      <HeroPreparation />
      <SchoolsSection />
      <ProfessionalTitles />
      <Certifications />
      <GoToUpButton />
    </main>
  );
}
