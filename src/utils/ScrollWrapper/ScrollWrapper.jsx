import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * When the pathname changes, scroll to the top of the page.
 * @returns The children prop.
 */
export default function ScrollWrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}
