import React from 'react';
import { Header } from '@containers/Header/Header';
import { HeroHome } from '@containers/HeroHome/HeroHome';
import './Home.scss';

export function Home() {
  return (
    <>
      <Header idSection="1" />
      <main className="home">
        <HeroHome />
      </main>
    </>
  );
}
