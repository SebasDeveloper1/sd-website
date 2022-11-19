/* eslint-disable no-nested-ternary */
import React, { useLayoutEffect, useState } from 'react';
import { GenericList } from 'containers/indexContainers';
import {
  SecondTitle,
  FirstParagraph,
  AbilityCard,
  CardMore,
  GenericLoadingCard,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './AbilitiesSection.scss';

export function AbilitiesSection() {
  const [toolList, setToolList] = useState([]);
  const { dataList, loading, error } = useGetData({ Ref: 'tools' });

  useLayoutEffect(() => {
    const sortList = dataList.sort((a, b) => a.toolTimestamp - b.toolTimestamp);
    return setToolList(sortList);
  }, [loading]);

  return (
    <section className="abilities">
      <div className="abilities-content">
        <SecondTitle
          textContent="Habilidades y Herramientas"
          modifierClass="abilities__title-section"
        />
        <FirstParagraph
          textContent="Soy un apasionado por el aprendizaje continuo, trabajo a diario para mejorar mis habilidades, aprender nuevas tecnologías y dominar nuevos conceptos que me permitan crecer como profesional y como ser humano."
          modifierClass="abilities__paragraph"
        />
        <GenericList modifierClass="abilities__card-container">
          {loading ? (
            <>
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
              <GenericLoadingCard />
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
            toolList.map((tool) => (
              <AbilityCard
                key={`tools__${tool?.id}`}
                abilityID={tool?.id}
                abilityName={tool?.toolName}
                abilityDesc={tool?.toolDesc}
                abilityImg={tool?.toolImg}
                abilityLink={tool?.toolLink}
              />
            ))
          )}
          <CardMore
            textContent="🚀 Mejorando a diario 😊"
            modifierClass="abilities__card-more"
          />
        </GenericList>
      </div>
    </section>
  );
}
