import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import ListTask from './components/ListTask';
import RegisterTask from './components/RegisterTask';
import UpdateTask from './components/UpdateTask';

const routes = {
  '/': () => <HomeScreen />,
  '/listTask': () => <ListTask />,
  '/registerTask': () => <RegisterTask />,
  '/updateTask/:id': ({id}) => <UpdateTask id={id}/>
}

function App() {
  return (useRoutes(routes));
}

export default App;
