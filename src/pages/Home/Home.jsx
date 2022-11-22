import React from 'react';
import { Helmet } from 'react-helmet';
import {
  HeroHome,
  AboutSection,
  AbilitiesSection,
  ProjectsSection,
  PreparationSection,
  ContactSection,
} from 'containers/indexContainers';
import { GoToUpButton } from 'components/indexComponents';
import './Home.scss';

export function Home() {
  return (
    <>
      <Helmet>
        <title>SebasDeveloper | Home</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SebasDeveloper" />
        <meta name="twitter:creator" content="@SebasDeveloper" />
        <meta name="twitter:title" content="SebasDeveloper" />
        <meta name="twitter:description" content="Portafolio SebasDeveloper" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        />
      </Helmet>
      <main className="home-page">
        <div id="top" />
        <HeroHome />
        <AboutSection />
        <AbilitiesSection />
        <ProjectsSection />
        <PreparationSection />
        <ContactSection />
        <GoToUpButton />
      </main>
    </>
  );
}
