import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const sumar = (num = 1) => {
        setCounter(counter + num)
    }

    const restar = (num = 1) => {
        setCounter(counter - num)
    }

    return {sumar, restar, counter}


}