/* eslint-disable no-nested-ternary */
import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { faCode, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import {
  SecondTitle,
  ThirdTitle,
  FirstParagraph,
  SecondButton,
  ThirdButton,
  Slideshow,
} from 'components/indexComponents';
import { ProjectDetailsPageLoading } from 'containers/indexContainers';
import { Status404 } from 'pages/indexPages';
import { useGetData } from 'hooks/useGetData';
import './ProjectInfo.scss';

export function ProjectInfo() {
  const [projectInfo, setProjectInfo] = useState({});
  const { dataList, loading, error } = useGetData({ Ref: 'projects' });
  const { projectId } = useParams();

  useLayoutEffect(() => {
    const projectData = dataList.find((project) => project?.slug === projectId);
    return setProjectInfo(projectData);
  }, [loading]);

  return (
    <div>
      {loading ? (
        <ProjectDetailsPageLoading />
      ) : error ? (
        <p>{`Error... ${error}`}</p>
      ) : projectInfo ? (
        <section className="project-details-container">
          <div className="project-detais__img">
            <Slideshow imagesList={projectInfo?.images} />
          </div>
          <div className="project-details-info-container">
            <SecondTitle
              textContent={projectInfo?.name}
              modifierClass="project-details__name"
            />
            <div className="details__categ-container">
              <FirstParagraph
                textContent={projectInfo?.category}
                modifierClass="project-details__categ"
              />
              <FirstParagraph
                textContent={projectInfo?.type}
                modifierClass="project-details__level"
              />
            </div>
            <FirstParagraph
              textContent={projectInfo?.description}
              modifierClass="project-details__desc"
            />
            <ThirdTitle
              textContent="Tecnologías"
              modifierClass="project-details__subtitle"
            />

            <ul className="project-details__tools-list">
              {projectInfo?.tools.map((tool) => (
                <li
                  key={`${projectInfo?.name}__tool-${tool}`}
                  className="details-tools-list__item"
                >
                  <FirstParagraph
                    textContent={tool}
                    modifierClass="project-details__tool"
                  />
                </li>
              ))}
            </ul>

            <div className="project-details-btn-container">
              <a
                className="project-details-btn"
                href={projectInfo?.linkView}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SecondButton
                  type="button"
                  textButton="Ver en la web"
                  modifierClass="project-details__preview-btn"
                  srcIcon={faExternalLink}
                />
              </a>
              <a
                className="project-details-btn"
                href={projectInfo?.linkRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ThirdButton
                  type="button"
                  textButton="Ver código"
                  modifierClass="project-details__code-btn"
                  srcIcon={faCode}
                />
              </a>
            </div>
          </div>
        </section>
      ) : (
        <Status404 />
      )}
    </div>
  );
}
