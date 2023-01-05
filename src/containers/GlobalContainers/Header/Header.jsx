import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  faBars,
  faClose,
  faDownload,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import logoBasic from 'images/sebas-developer.logo.png';
import userImg from 'images/sebas-developer.jpg';
import {
  FirstButton,
  ThirdButton,
  ImageButton,
  NavList,
  SecondTitle,
} from 'components/indexComponents';
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
                <div className="nav-data-buttons-container">
                  <FirstButton
                    type="button"
                    modifierClass="nav__data-btn"
                    textButton={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <Link
                        to="/contact"
                        className="nav__data-btn--link"
                        onClick={handleHeaderMenu}
                      >
                        Contáctame
                      </Link>
                    }
                    srcIcon={faMessage}
                  />
                  <ThirdButton
                    type="button"
                    modifierClass="nav__data-btn"
                    textButton={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <a
                        className="nav__data-btn--link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/CV%2FSebasDeveloperCV.pdf?alt=media&token=1079ce97-8f8b-4427-adb3-41d3e080737d"
                      >
                        Descargar CV
                      </a>
                    }
                    srcIcon={faDownload}
                  />
                </div>
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
