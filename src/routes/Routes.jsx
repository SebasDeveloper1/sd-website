import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'containers/indexContainers';
import { Home, Status404 } from 'pages/indexPages';

export function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<Status404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
