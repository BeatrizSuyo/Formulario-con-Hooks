import { useState } from "react"


export const useCounter = (initialValue = 0) => {

    const [ counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter +1)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    const decrement = () => {
        setCounter(counter -1)
    }
    
    //retornando un objeto para desestructurarlo
        return {
            counter,
            increment,
            reset,
            decrement
    }
}


