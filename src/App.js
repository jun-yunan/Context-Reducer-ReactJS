import { actions, useStore } from "./store";



function App() {
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state

    const handleAddTodo = () => {
        dispatch(actions.addTodo(todoInput))
    }
    
    const handleDelete = (index) => {
        dispatch(actions.deleteTodo(index))
    }
    return (
        <div>
            <input type="text" 
                value={todoInput}
                placeholder="Enter todo..."
                onChange={event => {
                    dispatch(actions.setTodoInput(event.target.value))
                }}
            />
            <button onClick={handleAddTodo}>Add todo</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo} <button onClick={handleDelete}>Delete</button></li>
            ))}
        </div>
    )
}

export default App