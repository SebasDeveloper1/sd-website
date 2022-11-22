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
        <title>SebasDeveloper | Inicio</title>
        <meta name="apple-mobile-web-app-title" content="sebasdeveloper.dev" />
        <meta name="application-name" content="sebasdeveloper.dev" />
        <meta name="theme-color" content="#04001e" />
        <meta property="og:url" content={document.location.href} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@SebasDeveloper" />
        <meta name="twitter:domain" content="sebasdeveloper.dev" />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        />
        <meta name="twitter:site" content="@SebasDeveloper" />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:title"
          content="Portafolio profesional de Sebastián Pedroza"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        />
        <meta
          property="og:description"
          content="Portafolio profesional de Sebastián Pedroza (@SebasDeveloper) sobre temas de Desarrollo Web, JavaScript, CSS, HTML, React y más."
        />
        <meta property="og:site_name" content="sebasdeveloper.dev" />
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
