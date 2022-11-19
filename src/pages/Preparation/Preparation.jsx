import React from 'react';
import {
  HeroPreparation,
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
      <ProfessionalTitles />
      <Certifications />
      <GoToUpButton />
    </main>
  );
}
