/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';
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
  const { slug } = useParams();

  useEffect(() => {
    const sortData = async () => {
      const projectList = await dataList.find(
        (project) => project.slug === slug
      );
      return setProjectInfo(projectList);
    };
    sortData();
  }, [loading]);

  return (
    <div>
      {loading ? (
        <ProjectDetailsPageLoading />
      ) : error ? (
        <p>Error...</p>
      ) : projectInfo ? (
        <section className="project-details-container">
          <div className="project-detais__img">
            <Slideshow imagesList={projectInfo?.projectImages} />
          </div>
          <div className="project-details-info-container">
            <SecondTitle
              textContent={projectInfo?.projectName}
              modifierClass="project-details__name"
            />
            <div className="details__categ-container">
              <FirstParagraph
                textContent={projectInfo?.projectCateg}
                modifierClass="project-details__categ"
              />
              <FirstParagraph
                textContent={projectInfo?.projectLevel}
                modifierClass="project-details__level"
              />
            </div>
            <FirstParagraph
              textContent={projectInfo?.projectDesc}
              modifierClass="project-details__desc"
            />
            <ThirdTitle
              textContent="Tools..."
              modifierClass="project-details__subtitle"
            />

            <ul className="project-details__tools-list">
              {projectInfo?.projectTools.map((tool) => (
                <li
                  key={`${projectInfo?.projectName}__tool-${tool}`}
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
                href={projectInfo.projectLinkView}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SecondButton
                  type="button"
                  textButton="Preview"
                  modifierClass="project-details__preview-btn"
                  srcIcon={faLink}
                />
              </a>
              <a
                className="project-details-btn"
                href={projectInfo.projectLinkRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ThirdButton
                  type="button"
                  textButton="Code"
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
