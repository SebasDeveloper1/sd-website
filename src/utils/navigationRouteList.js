export function navigationRouteList() {
  const routeList = [
    { routeName: 'Home', routeLink: '/' },
    { routeName: 'Clothes', routeLink: '/login' },
    { routeName: 'Electrics', routeLink: '/signup' },
    {
      routeName: 'Furniture',
      routeLink: '/password-recovery',
    },
    {
      routeName: 'Toys',
      routeLink: '/password-recovery-email',
    },
    {
      routeName: 'Others',
      routeLink: '/create-password',
    },
    {
      routeName: 'Error404',
      routeLink: '/error404',
    },
  ];

  return routeList;
}
