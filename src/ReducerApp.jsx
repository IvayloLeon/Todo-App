import { useTodo } from "./Hooks/index"
import { FormReducer, TodoItem } from "./Reducer/index"

import './styles.css'

export const ReducerApp = () => {

    const {pendientes, onChangeDone, onDeleteValue, onNewValue, todos, dispatch} = useTodo()

    return (
        <div className="p-4">
            <h1>Todo's: {todos.length}. Pendientes: {pendientes}</h1>
            <hr />

            <div className="row">
                <div className='col-7'>
                    <ul className="list-group">
                        <TodoItem
                            todos={todos}
                            onDeleteValue={onDeleteValue}
                            onChangeDone={onChangeDone}
                        />
                    </ul>
                </div>

                <div className='col-5'>
                    <h2 className="text-center">Formulario</h2>
                    <hr />
                    <FormReducer
                        onNewValue={onNewValue}
                        todos={todos}
                        dispatch={dispatch}
                    />
                </div>
            </div>
        </div>
    )
}
