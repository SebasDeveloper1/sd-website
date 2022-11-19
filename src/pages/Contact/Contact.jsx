/* eslint-disable no-nested-ternary */
import React from 'react';
import { HeroContact, GenericList } from 'containers/indexContainers';
import { GenericLoadingCard, ContactCard } from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './Contact.scss';

export function Contact() {
  const { dataList, loading, error } = useGetData({ Ref: 'contact' });

  return (
    <main className="contact-page">
      <HeroContact />
      <section className="contact-page__container-cards">
        <GenericList modifierClass="contact-page__cards-list">
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
      </section>
    </main>
  );
}
