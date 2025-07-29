import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/Store/Store';
import Task from './Components/Task';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Task />
      </div>
    </Provider>
  );
}

export default App;