import React, { useContext } from 'react'
import CounterContext from './Context/CounterContext'

const Counter = () => {

  const {state, dispatch} = useContext(CounterContext)

  return (
    <div className="App">
      <button className='btn' onClick={() => dispatch({ type: 'increment' })}>+</button>
      <p>{state.count}</p>
      <button className='btn' onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  )
}

export default Counter