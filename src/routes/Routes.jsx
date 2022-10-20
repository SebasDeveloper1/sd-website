import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'containers/indexContainers';
import { Home, Projects, Status404 } from 'pages/indexPages';

export function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route path="*" element={<Status404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
