import React from 'react';
import {
  HeroPreparation,
  ProfessionalTitles,
  Certifications,
} from 'containers/indexContainers';
import { GoToUpButton, MetaHead } from 'components/indexComponents';
import './Preparation.scss';

export default function Preparation() {
  return (
    <>
      <MetaHead
        title="SebasDeveloper | Educación"
        description="Conoce las habilidades y tecnologías que he dominado a lo largo de mi camino como desarrollador Front End (@SebasDeveloper)"
        image="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        url={document.location.href}
      />
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
