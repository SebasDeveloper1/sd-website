/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  ImageLink,
  SecondTitle,
  SecondParagraph,
  GenericLoadingCard,
} from 'components/indexComponents';
import { GenericList } from 'containers/indexContainers';
import { useGetData } from 'hooks/useGetData';
import './HeroPreparation.scss';

export function HeroPreparation() {
  const { dataList, loading, error } = useGetData({ Ref: 'schools' });

  return (
    <section className="preparation-hero">
      <div className="preparation-hero-info">
        <SecondTitle
          textContent="🎓 Mi preparación"
          modifierClass="preparation-hero-info__title"
        />
        <SecondParagraph
          textContent="Conoce las instituciones que han apoyado mi crecimiento y las habilidades que he obtenido en mi paso de ellas."
          modifierClass="preparation-hero-info__descr"
        />
        <GenericList modifierClass="schools-cards-container">
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
      </div>
    </section>
  );
}
