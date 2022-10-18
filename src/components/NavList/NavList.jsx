/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.scss';

export function NavList(props) {
  const {
    routeList,
    modifierClassList,
    modifierClassRouteList,
    modifierClassRoute,
  } = props;

  return (
    <ul
      className={
        modifierClassList ? `nav__list ${modifierClassList}` : 'nav__list'
      }
    >
      {routeList.map((route) => (
        <li
          className={`nav__list-Route ${modifierClassRouteList}`}
          key={`nav-Route__${route.routeName}`}
        >
          <NavLink
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
