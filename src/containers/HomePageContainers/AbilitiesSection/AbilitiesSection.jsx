/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { GenericList } from 'containers/indexContainers';
import {
  SecondTitle,
  FirstParagraph,
  AbilityCard,
  CardMore,
  AbilityLoadingCard,
} from 'components/indexComponents';
import { useGetData } from 'hooks/useGetData';
import './AbilitiesSection.scss';

export function AbilitiesSection() {
  const [toolList, setToolList] = useState([]);
  const { dataList, loading, error } = useGetData({ Ref: 'tools' });

  useEffect(() => {
    const sortData = async () => {
      const sortList = await dataList.sort(
        (a, b) => a.toolTimestamp - b.toolTimestamp
      );
      return setToolList(sortList);
    };
    sortData();
  }, [loading]);

  return (
    <section className="abilities">
      <div className="abilities-content">
        <SecondTitle
          textContent="Languages and Tools..."
          modifierClass="abilities__title-section"
        />
        <FirstParagraph
          textContent="Soy un apasionado por las tecnologías Web, enseño programación con JavaScript y Solidity. Web3 Builder & Ethereum Blockchain Developer."
          modifierClass="abilities__paragraph"
        />
        <GenericList modifierClass="abilities__card-container">
          {loading ? (
            <>
              <AbilityLoadingCard />
              <AbilityLoadingCard />
              <AbilityLoadingCard />
              <AbilityLoadingCard />
            </>
          ) : error ? (
            <p>Error...</p>
          ) : (
            toolList.map((tool) => (
              <AbilityCard
                key={`tools__${tool.id}`}
                abilityID={tool.id}
                abilityName={tool.toolName}
                abilityDesc={tool.toolDesc}
                abilityImg={tool.toolImg}
                abilityLink={tool.toolLink}
              />
            ))
          )}
          <CardMore
            textContent="🚀 Improving daily 😊"
            modifierClass="abilities__card-more"
          />
        </GenericList>
      </div>
    </section>
  );
}
