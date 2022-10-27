import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from 'containers/indexContainers';
import {
  Home,
  Projects,
  Preparation,
  Contact,
  Status404,
} from 'pages/indexPages';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/preparation" element={<Preparation />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<Status404 />} />
          </Routes>
        </Layout>
      </Wrapper>
    </BrowserRouter>
  );
}
