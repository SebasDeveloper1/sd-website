/* eslint-disable react/self-closing-comp */
import React from 'react';
import './ProjectDetailsPageLoading.scss';

export function ProjectDetailsPageLoading() {
  return (
    <section className="project-details-container--loading">
      <div className="project-detais__img--loading"></div>
      <div className="project-details-info-container--loading">
        <div className="project-details__name--loading"></div>
        <div className="details__categ-container--loading">
          <div className="project-details__categ--loading"></div>
          <div className="project-details__level--loading"></div>
        </div>
        <div className="project-details__desc--loading"></div>
        <div className="project-details__subtitle--loading"></div>
        <div className="project-details__tools-list--loading"></div>
        <div className="project-details-btn-container--loading">
          <div className="project-details__preview-btn--loading"></div>
          <div className="project-details__preview-btn--loading"></div>
        </div>
      </div>
    </section>
  );
}
