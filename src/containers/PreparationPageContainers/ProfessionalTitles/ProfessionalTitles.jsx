/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  SecondTitle,
  ProfessionalTitlesCard,
  GenericLoadingCard,
} from 'components/indexComponents';
import { GenericList } from 'containers/indexContainers';
import { useGetData } from 'hooks/useGetData';
import './ProfessionalTitles.scss';

export function ProfessionalTitles() {
  const { dataList, loading, error } = useGetData({
    Ref: 'professionalTitles',
  });
  return (
    <section className="prof-titles">
      <div className="prof-titles-content">
        <SecondTitle
          textContent="Titulos Profecionales"
          modifierClass="prof-titles__title"
        />
        <GenericList modifierClass="prof-titles-cards-container">
          {loading ? (
            <>
              <GenericLoadingCard />
              <GenericLoadingCard />
            </>
          ) : error ? (
            <p>{`Error... ${error}`}</p>
          ) : (
            dataList.map((certificate) => (
              <ProfessionalTitlesCard
                key={`professionalTitle__${certificate.id}`}
                image={certificate?.image}
                link={certificate?.link}
                name={certificate?.name}
                school={certificate?.school}
                time={certificate?.time}
              />
            ))
          )}
        </GenericList>
      </div>
    </section>
  );
}
