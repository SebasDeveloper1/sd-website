import React from 'react';
import './ImageLink.scss';

export function ImageLink({ imageLink, imageUrl, imageAlt }) {
  return (
    <li className="image-link">
      <a
        href={imageUrl}
        className="image-link__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageLink} alt={imageAlt} className="image-link__img" />
      </a>
    </li>
  );
}
