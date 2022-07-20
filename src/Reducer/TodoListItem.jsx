export const TodoListItem = ({todo, onDeleteValue, onChangeDone}) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span   
                className={`align-self-center text-center ${todo.done ? 'text-decoration-line-through' : ''}`}
                role="button"
                onClick={() => onChangeDone(todo.id)}
            >{todo.desc}</span>
        <button 
            className='btn btn-outline-danger'
            onClick={() => onDeleteValue(todo.id)}
        >Borrar</button>
        </li>
    </>
  )
}
