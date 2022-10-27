/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Link } from 'react-scroll';
import './SecondList.scss';

export function SecondList(props) {
  const {
    routeList,
    modifierClassList,
    modifierClassRouteList,
    modifierClassRoute,
  } = props;

  return (
    <ul
      className={
        modifierClassList ? `second-list ${modifierClassList}` : 'second-list'
      }
    >
      {routeList.map((route) => (
        <li
          className={`second-list-item ${modifierClassRouteList}`}
          key={`nav-item__${route.routeName}`}
        >
          <Link
            activeClass={
              modifierClassRoute
                ? `second-list-item--active ${modifierClassRoute}`
                : 'second-list-item--active'
            }
            to={route.routeLink}
            spy
            smooth
            offset={-130}
            duration={500}
          >
            {route.routeName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
