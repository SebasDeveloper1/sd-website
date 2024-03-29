/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { GenericList } from 'containers/indexContainers';
import {
  SecondTitle,
  FirstParagraph,
  GenericLoadingCard,
  ImageLink,
  SecondButton,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './PreparationSection.scss';

export function PreparationSection() {
  const { dataList, loading, error } = useGetData({ Ref: 'schools' });
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const redirectHandler = () => {
    navigate('/preparation');
  };

  return (
    <section className="preparation">
      <div
        ref={ref}
        className={
          inView
            ? 'preparation-content entrance-animation entrance-animation-left'
            : 'preparation-content entrance-animation'
        }
      >
        <SecondTitle
          textContent="Educación"
          modifierClass="preparation__title-section"
        />
        <FirstParagraph
          textContent={
            <span>
              Soy Ingeniero de Sistemas, egresado de la
              <b> Universidad de Cundinamarca </b>y estudiante permanente de
              <b> Platzi </b>
              en temas relacionados con Desarrollo e Ingeniería, Habilidades
              blandas, Inglés y mucho más.
            </span>
          }
          modifierClass="preparation__paragraph"
        />
        <GenericList modifierClass="preparation__container-cards">
          {loading ? (
            <>
              <GenericLoadingCard />
              <GenericLoadingCard />
            </>
          ) : error ? (
            <p>{`Error... ${error}`}</p>
          ) : (
            dataList.map((school) => (
              <ImageLink
                key={`schoolImg__${school?.creationTime}`}
                imageLink={school?.image}
                imageUrl={school?.website}
                imageAlt={school?.name}
              />
            ))
          )}
        </GenericList>
        <SecondButton
          type="button"
          modifierClass="preparation__see-more-btn"
          textButton="Ver más detalles"
          srcIcon={faEye}
          onClick={redirectHandler}
        />
      </div>
    </section>
  );
}
