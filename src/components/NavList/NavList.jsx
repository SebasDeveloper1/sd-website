/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { EventContext } from 'context/EventContext';
import './NavList.scss';

export function NavList({
  routeList,
  modifierClassList,
  modifierClassRouteList,
  modifierClassRoute,
}) {
  const { handleHeaderMenu } = useContext(EventContext);

  return (
    <ul
      className={
        modifierClassList ? `nav__list ${modifierClassList}` : 'nav__list'
      }
    >
      {routeList.map((route) => (
        <li
          className={`nav__list-item ${modifierClassRouteList}`}
          key={`nav-item__${route.routeName}`}
        >
          <NavLink
            onClick={handleHeaderMenu}
            to={route.routeLink}
            end
            className={({ isActive }) =>
              isActive
                ? `nav__list-link ${modifierClassRoute} nav__list-link--active`
                : `nav__list-link ${modifierClassRoute}`
            }
          >
            {route.routeName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
