import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ScrollWrapper = React.lazy(() =>
  import('utils/ScrollWrapper/ScrollWrapper')
);
const Layout = React.lazy(() =>
  import('containers/GlobalContainers/Layout/Layout')
);
const Home = React.lazy(() => import('pages/Home/Home'));
const Projects = React.lazy(() => import('pages/Projects/Projects'));
const ProjectDetails = React.lazy(() =>
  import('pages/ProjectDetails/ProjectDetails')
);
const Preparation = React.lazy(() => import('pages/Preparation/Preparation'));
const Contact = React.lazy(() => import('pages/Contact/Contact'));
const Status404 = React.lazy(() => import('pages/Status404/Status404'));

export function NavigationRoutes() {
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
}
