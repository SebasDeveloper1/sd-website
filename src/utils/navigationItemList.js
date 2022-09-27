export function navigationItemList({ idItem }) {
  const itemsList = {
    1: { itemName: 'All', itemStatus: false, itemHref: '/home' },
    2: { itemName: 'Clothes', itemStatus: false, itemHref: '/login' },
    3: { itemName: 'Electrics', itemStatus: false, itemHref: '/signup' },
    4: {
      itemName: 'Furniture',
      itemStatus: false,
      itemHref: '/password-recovery',
    },
    5: {
      itemName: 'Toys',
      itemStatus: false,
      itemHref: '/password-recovery-email',
    },
    6: {
      itemName: 'Others',
      itemStatus: false,
      itemHref: '/create-password',
    },
    7: {
      itemName: 'Error404',
      itemStatus: false,
      itemHref: '/error404',
    },
  };

  itemsList[idItem] = { ...itemsList[idItem], itemStatus: true };

  return itemsList;
}
