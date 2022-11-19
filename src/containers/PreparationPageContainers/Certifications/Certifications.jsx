/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  SecondTitle,
  SecondList,
  CertificationsSection,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import { certificationTypeList } from 'utils/certificationTypeList';
import './Certifications.scss';

export function Certifications() {
  const { dataList, loading, error } = useGetData({
    Ref: 'certifications',
  });
  const { cerfificationTypes } = certificationTypeList({ dataList });

  return (
    <section className="certifications">
      <div className="certifications-content">
        <SecondTitle
          textContent="Certificaciones"
          modifierClass="certifications__title"
        />
        <SecondList
          routeList={cerfificationTypes}
          modifierClassList="certifications__nav-list"
          modifierClassRouteList=""
          modifierClassRoute=""
        />
        {cerfificationTypes.map((section) => (
          <CertificationsSection
            key={`certificationSection__${section?.routeName}`}
            sectionId={section?.routeLink}
            sectionName={section?.routeName}
            dataList={section?.routeData}
            loading={loading}
            error={error}
          />
        ))}
      </div>
    </section>
  );
}
