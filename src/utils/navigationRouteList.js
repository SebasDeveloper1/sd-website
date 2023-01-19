/**
 * It returns an array of objects with two properties each: routeName and routeLink.
 * @returns An array of objects.
 */
export function navigationRouteList() {
  const routeList = [
    { routeName: 'Inicio', routeLink: '/' },
    { routeName: 'Proyectos', routeLink: '/projects' },
    { routeName: 'Educación', routeLink: '/Preparation' },
    { routeName: 'Contáctame', routeLink: '/contact' },
  ];

  return routeList;
}
