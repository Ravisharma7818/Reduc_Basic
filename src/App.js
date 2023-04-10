import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'
const App = () => {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Simple Increament Decreament App With Redux

        <button onClick={() => {
          dispatch(decNumber())
        }}>-</button>
        <input value={myState} />
        <button onClick={() => {
          dispatch(incNumber())
        }}>+</button>
      </h1>


    </div>
  )
}

export default App