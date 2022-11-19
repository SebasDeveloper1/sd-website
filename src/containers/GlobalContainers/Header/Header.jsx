import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import logoBasic from 'images/sebas-developer.logo.png';
import userImg from 'images/sebas-developer.jpg';
import { ImageButton, NavList, SecondTitle } from 'components/indexComponents';
import { navigationRouteList } from 'utils/navigationRouteList';
import { EventContext } from 'context/EventContext';
import './Header.scss';

export function Header() {
  const { state, handleHeaderMenu } = useContext(EventContext);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <Link className="nav__logo-container" to="/">
            <img
              className="nav__logo-img"
              src={logoBasic}
              alt="@SebasDeveloper Logo"
            />
          </Link>
          <ImageButton
            type="button"
            modifierClass="nav__btn-hamburguer-container"
            typeIcon="FontAwesomeIcon"
            srcIcon={!state.openMenuHeader ? faBars : faClose}
            altIcon="Go to start"
            onClick={handleHeaderMenu}
          />
          <div
            /* A ternary operator. If the state.openMenuHeader is true, it will add the class
            nav__menu-container--open to the class nav__menu-container.
            If it is false, it will not add
            anything. */
            className={`nav__menu-container ${
              state.openMenuHeader ? 'nav__menu-container--open' : ''
            }`}
          >
            <section className="nav__info-container nav__info-container--mobile">
              <img
                src={userImg}
                alt="Sebas Developer"
                className="nav__info-image"
              />
              <div className="nav__info-data-text">
                <SecondTitle
                  textContent="@SebasDeveloper"
                  modifierClass="nav__data-title"
                />
                <Link
                  to="/contact"
                  className="nav__data-btn"
                  onClick={handleHeaderMenu}
                >
                  Contáctame
                </Link>
              </div>
            </section>
            <NavList
              /* Passing the result of the function navigationItemList to the itemsList prop. */
              routeList={navigationRouteList()}
              modifierClassList="nav__nav-bar--list"
              modifierClassRouteList="nav__nav-bar--last-child"
              modifierClassRoute=""
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
