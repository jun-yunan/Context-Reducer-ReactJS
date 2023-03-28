import { useStore, actions } from "./store";
import { useRef } from "react";
function App() {

    const [state, dispatch] = useStore()
    const { todos, todoInput } = state

    const inputRef = useRef()

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
        inputRef.current.focus()
    }

    return (
        <div>
            <input type="text" 
                ref={inputRef}
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}    <span onClick={() => {
                    dispatch(actions.removeTodo(index))
                }}>&times;</span></li>
            ))}
        </div>
    )
}

export default App