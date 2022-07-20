import { useEffect, useReducer } from "react"
import { actions } from "../Helpers/actions"
import { todoReducer } from "../Reducer/todoReducer"

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }
    
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)) || []
    }, [todos])

    const onNewValue = (todo) => {
        const action = {
            type: actions.add,
            payload: todo
        }

        dispatch(action)
    }

    const onDeleteValue = (id) => {
        const action = {
            type: actions.delete,
            payload: id
        }

        dispatch(action)
    }

    const onChangeDone = (id) => {
        const action = {
            type: actions.changeState,
            payload: id
        }

        dispatch(action)
    }

    const pendientes = todos.filter(todo => todo.done == false).length

    return {pendientes, onChangeDone, onDeleteValue, onNewValue, todos, dispatch}


}