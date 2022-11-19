/* eslint-disable no-nested-ternary */
import React from 'react';
import { GenericList } from 'containers/indexContainers';
import {
  SecondTitle,
  ThirdTitle,
  SecondParagraph,
  ContactCard,
  GenericLoadingCard,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './ContactSection.scss';

export function ContactSection() {
  const { dataList, loading, error } = useGetData({ Ref: 'contact' });

  return (
    <section className="contact">
      <div className="contact-content">
        <SecondTitle
          textContent="Contacta conmigo"
          modifierClass="contact__title-section"
        />
        <div className="contact-section__header">
          <ThirdTitle
            textContent="@SebasDeveloper"
            modifierClass="contact-section__header-title"
          />
          <SecondParagraph
            textContent="¿Quieres trabajar conmigo? ¡Hazme un ping!"
            modifierClass="contact-section__header-paragraph"
          />
        </div>
        <GenericList modifierClass="contact-container-cards">
          {loading ? (
            <>
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
            </>
          ) : error ? (
            <p>{`Error... ${error}`}</p>
          ) : (
            dataList.map((item) => (
              <ContactCard
                key={`contactItem__${item?.id}`}
                link={item?.link}
                imgSrc={item?.image}
                name={item?.name}
                nickname={item?.nickname}
              />
            ))
          )}
        </GenericList>
      </div>
    </section>
  );
}
