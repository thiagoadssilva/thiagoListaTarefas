import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import ListTask from './components/ListTask';

const routes = {
  '/': () => <HomeScreen />,
  '/listTask': () => <ListTask />
}

function App() {
  return (useRoutes(routes));
}

export default App;
