import { 
    SET_TODO_INPUT, 
    ADD_TODO, 
    DELETE_TODO,
    SET_NAME_PRODUCT,
    SET_PRICE_PRODUCT,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from "./constants"

const initState = {
    todos: [],
    todoInput: '',
    nameProduct: '',
    priceProduct: '',
    products: []
}

const reducer = (state, action) => {
    console.log(typeof state.priceProduct);
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
        case DELETE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        case SET_NAME_PRODUCT:
            return {
                ...state,
                nameProduct: action.payload
            }
        case SET_PRICE_PRODUCT:
            return {
                ...state,
                priceProduct: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case DELETE_PRODUCT:
            const newProducts = [...state.products]
            newProducts.splice(action.payload, 1)
            return {
                ...state,
                products: newProducts
            }
        default:
            throw new Error('Invalid action.')
    }

}

export { initState }
export default reducer