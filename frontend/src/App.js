import React from 'react';
import {useRouter} from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import ListTask from './components/ListTask';
import RegisterTask from './components/RegisterTask';
import UpdateTask from './components/UpdateTask';

const routes = {
  '/': () => <HomeScreen />,
  '/listTask': () => <ListTask />,
  '/registerTask': () => <RegisterTask />,
  '/updateTask': () => <UpdateTask />
}

function App() {
  return useRouter(routes);
}

export default App;
