import React from 'react';
import {
  Header,
  HeroHome,
  AboutSection,
  AbilitiesSection,
} from 'containers/indexContainers';
import './Home.scss';

export function Home() {
  return (
    <>
      <Header idSection="1" />
      <main className="home">
        <HeroHome />
        <AboutSection />
        <AbilitiesSection />
      </main>
    </>
  );
}
