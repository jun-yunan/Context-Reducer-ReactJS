import { actions, useStore } from "./store";
import { useMemo, useRef } from "react";



function App() {
    const [state, dispatch] = useStore()
    const {todos, todoInput, nameProduct, priceProduct, products} = state

    const inputTodoRef = useRef()
    const nameProductRef = useRef()

    const handleAddTodo = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
        inputTodoRef.current.focus()
    }
    
    const handleDelete = (index) => {
        dispatch(actions.deleteTodo(index))
    }

    // Products
    const handleAddProduct = () => {
        dispatch(actions.addProduct({
            nameProduct,
            priceProduct: parseInt(priceProduct)
        }))
        dispatch(actions.setNameProduct(''))
        dispatch(actions.setPriceProduct(''))
        nameProductRef.current.focus()
    }

    const total = useMemo(() => {
        const total = products.reduce((result, product) => {
            return result + product.priceProduct
        }, 0)
        return total
    }, [products])

    const handleDeleteProduct = (index) => {
        dispatch(actions.deleteProduct(index))
    }
    return (
        <div>
            {/* App Todo List */}
            <input type="text" 
                ref={inputTodoRef}
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
            {/* App Product */}
            <h1>List Products</h1>
            <input type="text" 
                ref={nameProductRef}
                value={nameProduct}
                placeholder="Enter name product..."
                onChange={event => {
                    dispatch(actions.setNameProduct(event.target.value))
                }}
            />
            <br/>
            <input type="text" 
                value={priceProduct}
                placeholder="Enter price product..."
                onChange={event => {
                    dispatch(actions.setPriceProduct(event.target.value))
                }}
            />
            <br/>
            <h2>Total: {total}</h2>
            <br/>
            <button onClick={handleAddProduct}>Add Product</button>
            <br/>
            {products.map((product, index) => (
                <li key={index}>
                    {product.nameProduct} - {product.priceProduct}
                    <button onClick={handleDeleteProduct}>Delete Product</button>
                </li>
            ))}

            
        </div>
    )
}

export default App