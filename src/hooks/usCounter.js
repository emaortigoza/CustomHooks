import { useState } from "react"

export const usCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (val = 1) =>{
        setCounter(counter + val)
    }
    const decrement = (val = 1, allowNegative = true) =>{
        if(!allowNegative && counter < 1) return
        setCounter(counter - val)
    }
    const reset = () =>{
        setCounter(initialValue)
    }

  return {
    counter,
    increment,
    reset,
    decrement
  }
}