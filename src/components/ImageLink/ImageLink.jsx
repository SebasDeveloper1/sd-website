import React from 'react';
import platziLogo from 'images/platzi-logo.svg';
import './ImageLink.scss';

export function ImageLink() {
  return (
    <li className="image-link">
      <a
        href="https://platzi.com/p/SebasDeveloper/"
        className="image-link__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={platziLogo} alt="Platzi" className="image-link__img" />
      </a>
    </li>
  );
}
