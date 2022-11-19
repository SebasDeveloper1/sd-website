export function certificationTypeList({ dataList }) {
  const getFilteredList = (list, category) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    list
      .filter((item) => item.category === category)
      .sort((a, b) => b.creationTime - a.creationTime);

  const webDevelopmentList = getFilteredList(dataList, 'webDevelopment');
  const mobileDevelopmentList = getFilteredList(dataList, 'mobileDevelopment');
  const englishList = getFilteredList(dataList, 'english');
  const softSkillsList = getFilteredList(dataList, 'softSkills');
  const challengeList = getFilteredList(dataList, 'challenge');
  const eventList = getFilteredList(dataList, 'event');

  const cerfificationTypes = [
    {
      routeName: 'Desarollo Web',
      routeLink: 'desarrolloWeb',
      routeData: webDevelopmentList,
    },
    {
      routeName: 'Desarollo Móvil',
      routeLink: 'desarrolloMovil',
      routeData: mobileDevelopmentList,
    },
    { routeName: 'Inglés', routeLink: 'ingles', routeData: englishList },
    {
      routeName: 'Hab. Blandas',
      routeLink: 'habilidadesBlandas',
      routeData: softSkillsList,
    },
    {
      routeName: 'Desafíos',
      routeLink: 'challenge',
      routeData: challengeList,
    },
    {
      routeName: 'Eventos',
      routeLink: 'event',
      routeData: eventList,
    },
  ];

  return { cerfificationTypes };
}
