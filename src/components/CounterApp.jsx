import React from 'react'
import { usCounter } from '../hooks/usCounter'

export const CounterApp = () => {

    const{counter, increment, reset, decrement } = usCounter(0)


  return (
    <>
    <h1>Counter:</h1>
    <h4>{counter}</h4>
    <button className="btn btn-primary" onClick={() => increment () }>+1</button>
    <button className="btn btn-danger" onClick={()=> reset () }>Reset</button>
    <button className="btn btn-primary" onClick={()=> decrement (1, false) }>-1</button>
    </>
  )
}