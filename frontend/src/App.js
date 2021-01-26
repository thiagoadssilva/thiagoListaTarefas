import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import ListTask from './components/ListTask';
import RegisterTask from './components/RegisterTask';
import UpdateTask from './components/UpdateTask';

const routes = {
  '/': () => <HomeScreen />,
  '/listTask': () => <ListTask />
}

function App() {
  return (useRoutes(routes));
}

export default App;
