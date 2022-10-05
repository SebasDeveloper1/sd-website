import React from 'react';
import { NavigationRoutes } from 'routes/Routes';
import { EventContext } from 'context/EventContext';
import { useEvents } from 'hooks/useEvents';

export default function App() {
  return (
    <EventContext.Provider value={useEvents()}>
      <NavigationRoutes />
    </EventContext.Provider>
  );
}
