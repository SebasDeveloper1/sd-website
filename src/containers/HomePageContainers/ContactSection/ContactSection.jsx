/* eslint-disable no-nested-ternary */
import React from 'react';
import { useInView } from 'react-intersection-observer';
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
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="contact">
      <div
        ref={ref}
        className={
          inView
            ? 'contact-content entrance-animation entrance-animation-right'
            : 'contact-content entrance-animation'
        }
      >
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
