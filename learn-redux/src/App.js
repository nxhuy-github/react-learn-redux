import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/index'

function App() {
  const counter = useSelector(state => state.counter) // get state from store
  const isLogged = useSelector(state => state.isLogged) // get state from store
  const dispatch = useDispatch()                      // this function helps us to execute a Action

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
      {isLogged ? <h3>Valuable Information</h3> : <h3>Nothing</h3>}
    </div>
  );
}

export default App;
