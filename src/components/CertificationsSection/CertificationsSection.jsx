/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  SecondParagraph,
  CertificateCard,
  GenericLoadingCard,
} from 'components/indexComponents';
import { GenericList } from 'containers/indexContainers';
import './CertificationsSection.scss';

export function CertificationsSection({
  sectionId,
  sectionName,
  dataList,
  loading,
  error,
}) {
  return (
    <div id={sectionId} className="certifications-category-container">
      <SecondParagraph
        textContent={`${sectionName} (${dataList.length})`}
        modifierClass="certifications-category__title"
      />
      <GenericList modifierClass="certifications-category-cards-container">
        {loading ? (
          <>
            <GenericLoadingCard />
            <GenericLoadingCard />
          </>
        ) : error ? (
          <p>{`Error... ${error}`}</p>
        ) : (
          dataList.map((certificate) => (
            <CertificateCard
              key={`certificate__${certificate.id}`}
              image={certificate?.image}
              link={certificate?.link}
              name={certificate?.name}
              school={certificate?.school}
              time={certificate?.creationTime}
            />
          ))
        )}
      </GenericList>
    </div>
  );
}
