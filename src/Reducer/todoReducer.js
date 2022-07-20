import { actions } from "../Helpers/actions"

export const todoReducer = (initialValue = [], action) => {
    switch (action.type) {
        case actions.add:
            return [...initialValue, action.payload]
        
        case actions.delete:
            return initialValue.filter(todo => todo.id !== action.payload)

        case actions.changeState:
            return initialValue.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
    
        default:
            return initialValue
    }
}