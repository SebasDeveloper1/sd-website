import React from 'react';
import { ScrollWrapper } from 'utils/ScrollWrapper/ScrollWrapper';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'containers/indexContainers';
import {
  Home,
  Projects,
  ProjectDetails,
  Preparation,
  Contact,
  Status404,
} from 'pages/indexPages';

export function NavigationRoutes() {
  return (
    <BrowserRouter>
      <ScrollWrapper>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route
              exact
              path="/project/:projectId"
              element={<ProjectDetails />}
            />
            <Route exact path="/preparation" element={<Preparation />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Status404 />} />
          </Routes>
        </Layout>
      </ScrollWrapper>
    </BrowserRouter>
  );
}
