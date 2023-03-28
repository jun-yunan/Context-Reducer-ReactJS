import { ADD_TODO } from "./constants"
import { SET_TODO_INPUT } from "./constants"
import { REMOVE_TODO } from "./constants"

const initState = {
    todos: [],
    totoInput: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error('Invalid actions')
    }
}


export { initState }
export default reducer