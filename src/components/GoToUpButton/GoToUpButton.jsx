import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './GoToUpButton.scss';

export function GoToUpButton() {
  return (
    <li className="gotoup-btn-container">
      <Link
        activeClass="gotoup-btn__link"
        to="top"
        smooth
        offset={-65}
        duration={500}
      >
        <FontAwesomeIcon
          icon={faAngleUp}
          className="gotoup-btn__link-icon"
          alt="Go to the top of the page"
        />
      </Link>
    </li>
  );
}
