import { 
    SET_TODO_INPUT, 
    ADD_TODO, 
    DELETE_TODO,  
    SET_NAME_PRODUCT,
    SET_PRICE_PRODUCT,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})

export const setNameProduct = payload => ({
    type: SET_NAME_PRODUCT,
    payload
})

export const setPriceProduct = payload => ({
    type: SET_PRICE_PRODUCT,
    payload
})

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload
})

export const deleteProduct = payload => ({
    type: DELETE_PRODUCT,
    payload
})