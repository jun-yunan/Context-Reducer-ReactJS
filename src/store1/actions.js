import { SET_TODO_INPUT } from "./constants";
import { ADD_TODO } from "./constants";
import { REMOVE_TODO } from "./constants";


export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const removeTodo = payload => ({
    type: REMOVE_TODO,
    payload
})