import React,{createContext, useContext, useReducer} from "react";
import reducer from "../components/reducers/CartReducer";
const CartContext = createContext()

const initialState = {
    carts:[],
    total_item:"",
total_amount:"",
shipping_fees:"100"
}


const CartApi = ({children})=>{
const [state, dispatch] = useReducer(reducer, initialState)
    const handleCart = (product)=>{
dispatch({type:"ADD_TO_CART",payload:product})
}

return (
<CartContext.Provider value={{...state,handleCart}}>
{children}
</CartContext.Provider>
)

}

const useCartApi = ()=>{
    return useContext(CartContext)
}

export {CartApi,useCartApi}