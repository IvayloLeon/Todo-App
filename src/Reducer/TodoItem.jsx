import { TodoListItem } from "./index"

export const TodoItem = ({todos, onDeleteValue, onChangeDone}) => {
   
  return (
    <>
        {todos.map(todo => 
            <TodoListItem
                todo={todo}
                key={todo.id}
                onDeleteValue={onDeleteValue}
                onChangeDone={onChangeDone}
            />
        )}        
    </>
  )
}
