/* eslint-disable no-nested-ternary */
import React from 'react';
import { HeroContact, GenericList } from 'containers/indexContainers';
import {
  GenericLoadingCard,
  ContactCard,
  MetaHead,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './Contact.scss';

export default function Contact() {
  /* A custom hook that is fetching data from firebase. */
  const { dataList, loading, error } = useGetData({ Ref: 'contact' });

  return (
    <>
      <MetaHead
        title="SebasDeveloper | Contáctame"
        description="¿Quieres trabajar conmigo? ¡Hazme un ping"
        image="https://firebasestorage.googleapis.com/v0/b/sd-website-f934d.appspot.com/o/sebasDeveloper%2Fabout-img.jpg?alt=media&token=eb68dc54-90d6-4d99-8052-19d7f6b7476c"
        url={document.location.href}
      />
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
    </>
  );
}
