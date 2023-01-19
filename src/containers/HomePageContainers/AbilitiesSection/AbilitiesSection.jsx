/* eslint-disable no-nested-ternary */
import React, { useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { GenericList } from 'containers/indexContainers';
import {
  SecondTitle,
  FirstParagraph,
  AbilityCard,
  CardMore,
  GenericLoadingCard,
  SecondButton,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './AbilitiesSection.scss';

export function AbilitiesSection() {
  const [toolList, setToolList] = useState([]);
  const [amountOfSkills, setAmountOfSkills] = useState(9);
  const { dataList, loading, error } = useGetData({ Ref: 'tools' });
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useLayoutEffect(() => {
    /* Sorting the dataList by the toolTimestamp property. */
    setToolList(dataList.sort((a, b) => a.toolTimestamp - b.toolTimestamp));
    return () => {
      setToolList([]);
    };
  }, [loading]);

  const seeAllSkills = () => {
    setAmountOfSkills(toolList.length);
  };

  return (
    <section className="abilities">
      <div
        ref={ref}
        className={
          inView
            ? 'abilities-content entrance-animation entrance-animation-left'
            : 'abilities-content entrance-animation'
        }
      >
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
            </>
          ) : error ? (
            <p>{`Error... ${error}`}</p>
          ) : (
            toolList
              .slice(0, amountOfSkills)
              .map((tool) => (
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
        {amountOfSkills !== toolList.length ? (
          <SecondButton
            type="button"
            modifierClass="preparation__see-more-btn"
            textButton="Ver más habilidades"
            srcIcon={faEye}
            onClick={seeAllSkills}
          />
        ) : null}
      </div>
    </section>
  );
}
