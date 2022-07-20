import { useForm } from "../Hooks/index"
import { actions } from "../Helpers/actions"

export const FormReducer = ({ onNewValue, todos, dispatch }) => {

    const { inputValue, onInputChange, onResetForm } = useForm({
        inputValue: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.length <= 2) return;

        todos.map(todo => {
            if(todo.desc.toLowerCase() == inputValue.toLowerCase()){
                const action = {
                    type: actions.delete,
                    payload: todo.id
                }

                dispatch(action)
            }
        })
        
        const todo = {
            id: new Date().getTime() * 2,
            desc: inputValue,
            done: false
        }
        
        onNewValue(todo)
        onResetForm()
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name='inputValue'
                className="form-control"
                placeholder="Tarea"
                value={inputValue}
                onChange={onInputChange }
            />

            <button
                className="btn btn-outline-info mt-3"
                type="submit"
            >
                Añadir
            </button>
        </form>
    )
}
