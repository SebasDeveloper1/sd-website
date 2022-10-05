import React from 'react';
import { PrimaryParagraph } from 'components/indexComponents';
import './CardMore.scss';

export function CardMore(props) {
  const { textContent, modifierClass } = props;
  return (
    <article
      className={modifierClass ? `card-more ${modifierClass}` : 'card-more'}
    >
      <PrimaryParagraph
        textContent={textContent}
        modifierClass="card-more__name"
      />
    </article>
  );
}
