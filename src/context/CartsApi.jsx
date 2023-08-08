import React,{createContext, useContext, useEffect, useReducer} from "react";
import reducer from "../components/reducers/CartReducer";
const CartContext = createContext()

const getLocalCarts= ()=>{
    const localCarts = localStorage.getItem("carts")
    if(localCarts==[]){
        return []
    }
    else if(localCarts==null){
        return []
    }
    else{
        return JSON.parse(localCarts)
    }
    
}

const initialState = {
    carts:getLocalCarts(),
    total_items:0,
total_amount:0,
shipping_fees:"100"
}



const CartApi = ({children})=>{
const [state, dispatch] = useReducer(reducer, initialState)



useEffect(()=>{

    dispatch({type:"TOTAL_PRICE"})   
    dispatch({type:"TOTAL_ITEMS"})
    localStorage.setItem("carts",JSON.stringify(state.carts))
     
},[state?.carts])


const handleCart = (product)=>{
dispatch({type:"ADD_TO_CART",payload:product})
}

const handleRemove = (index)=>{
    dispatch({type:"REMOVE_ITEM",payload:index})
}

const increaseQuantity = (index)=>{
dispatch({type:"INCREASE_QUANTITY",payload:index})
}

const decreaseQuantity = (index)=>{
dispatch({type:"DECREASE_QUANTITY",payload:index})
}

const emptyCarts = ()=>{
    dispatch({type:"EMPTY_CARTS"})
}


return (
<CartContext.Provider value={{...state,handleCart,handleRemove,increaseQuantity,decreaseQuantity,emptyCarts}}>
{children}
</CartContext.Provider>
)

}

const useCartApi = ()=>{
    return useContext(CartContext)
}

export {CartApi,useCartApi}