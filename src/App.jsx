import React, { useReducer } from 'react';
import CounterContext from './Context/CounterContext';
import Counter from './Counter';
import reducer from './reducer'
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
      <CounterContext.Provider value={{state, dispatch}}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
