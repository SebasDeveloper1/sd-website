import React from 'react';
import { PrimaryLink } from '@components/PrimaryLink/PrimaryLink';
import './NavList.scss';

export function NavList(props) {
  const {
    itemsList,
    modifierClassList,
    modifierClassItemList,
    modifierClassItem,
  } = props;

  return (
    <ul
      className={
        modifierClassList ? `nav__list ${modifierClassList}` : `nav__list`
      }
    >
      {Object.entries(itemsList).map(([itemId, infoItem]) => (
        <li
          className={`nav__list-item ${modifierClassItemList}`}
          key={`nav-item__${itemId}`}
        >
          <PrimaryLink
            href={infoItem.itemHref}
            textLink={infoItem.itemName}
            modifierClass={
              infoItem.itemStatus
                ? `nav__list-link ${modifierClassItem} nav__list-link--active`
                : `nav__list-link ${modifierClassItem}`
            }
          />
        </li>
      ))}
    </ul>
  );
}
