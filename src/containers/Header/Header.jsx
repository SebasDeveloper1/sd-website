import React from 'react';
import {
  faUserCircle,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import logoBasic from '@images/sebas-developer.logo.png';
import { ImageButton } from '@components/ImageButton/ImageButton';
import { SecondaryTitle } from '@components/SecondaryTitle/SecondaryTitle';
import { PrimaryParagraph } from '@components/PrimaryParagraph/PrimaryParagraph';
import { PrimaryButton } from '@components/PrimaryButton/PrimaryButton';
import { NavList } from '@components/NavList/NavList';
import { navigationItemList } from '@utils/navigationItemList';
import { useEvents } from '@hooks/useEvents';
import './Header.scss';

export function Header(props) {
  const { idSection } = props;

  /* Destructuring the state and handleHeaderMenu from the useEvents hook. */
  const { state, handleHeaderMenu } = useEvents();

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <a className="nav__logo-container" href="/">
            <img
              className="nav__logo-img"
              src={logoBasic}
              alt="Koi Store Logo"
            />
          </a>
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
            nav__menu-container--open to the class nav__menu-container. If it is false, it will not add
            anything. */
            className={`nav__menu-container ${
              state.openMenuHeader ? `nav__menu-container--open` : ``
            }`}
          >
            <section className="nav__info-container nav__info-container--mobile">
              <div className="nav__info-data-container">
                <ImageButton
                  type="button"
                  modifierClass="nav__info-image"
                  typeIcon="FontAwesomeIcon"
                  srcIcon={faUserCircle}
                  altIcon="User"
                />
                <div className="nav__info-data-text">
                  <SecondaryTitle
                    textContent="Jessica Casas"
                    modifierClass="nav__data-title"
                  />
                  <PrimaryParagraph
                    textContent="koistore@example.com"
                    modifierClass="nav__data-subtitle"
                  />
                </div>
              </div>
              <PrimaryButton
                type="button"
                textButton="Log up"
                modifierClass="nav__data-btn"
              />
            </section>

            <SecondaryTitle
              textContent="Categories..."
              modifierClass="nav__categories-title"
            />

            <NavList
              /* Passing the result of the function navigationItemList to the itemsList prop. */
              itemsList={navigationItemList({ idItem: idSection })}
              modifierClassList=""
              modifierClassItemList=""
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
