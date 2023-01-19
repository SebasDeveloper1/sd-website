import React from 'react';
import logoBasic from 'images/sebas-developer.logo.png';
import { FirstParagraph } from 'components/indexComponents';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src={logoBasic}
          alt="@SebasDeveloper Logo"
          className="footer-section__logo"
        />
        <FirstParagraph
          textContent="Sebastian Pedroza ◉ @SebasDeveloper ◉ 2023"
          modifierClass="footer-section__paragraph"
        />
        <FirstParagraph
          textContent="Hecho con el 💙 por Sebastian Pedroza"
          modifierClass="footer-section__title"
        />
      </div>
    </footer>
  );
}
