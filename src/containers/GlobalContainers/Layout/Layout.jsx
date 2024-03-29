import React from 'react';
import { Header, Footer } from 'containers/indexContainers';
import './Layout.scss';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
