import React from 'react'

const CartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let product = action.payload
        return {
            ...state,
            carts : [...state.carts, product],
            total_amount: (state.total_amount+Math.ceil(product?.price * 82))
        }
    }

if(action.type === "REMOVE_ITEM"){
let updatedCarts = state.carts.filter((currentElm,index)=>{
    console.log(action.payload,index)
return index !== action.payload
        })
return {
    ...state,
    carts:updatedCarts
}
}

if(action.type === "EMPTY_CARTS"){
return {
    ...state,
    carts:[]
}
}

if(action.type === "TOTAL_PRICE"){
  
    let total_amount = state.carts?.reduce((accumulator,currentItem)=>{
        let {quantity, price} = currentItem
return accumulator+=quantity*Math.ceil(price*82)
    },0)

    return {
        ...state,
total_amount
    }
}

if(action.type === "TOTAL_ITEMS"){
    let total_items = state.carts?.reduce((accumulator, currentItem)=>{
let {quantity}= currentItem
return accumulator+=quantity
 },0)

 return {
    ...state,
    total_items
 }
}

if(action.type ==="INCREASE_QUANTITY"){
let increaseQuantity = state.carts.map((currentElm,index)=>{
    if(action.payload === index){
        let quantity=currentElm.quantity + 1
        return {
            ...currentElm,
            quantity:quantity
        }
    }
    else{
        return {
            ...currentElm
        }
    }
})

return {
    ...state,
    carts:increaseQuantity
}
}

if(action.type === "DECREASE_QUANTITY"){
   
    let decreaseQuantity = state.carts.map((currentElm,index)=>{
        if(action.payload ===index){
        let quantity=currentElm.quantity - 1

        return {
            ...currentElm,
            quantity:quantity
        }
    }
else{
    return {
        ...currentElm
    }
}
        })

        return {
            ...state,
carts:decreaseQuantity
        }
}

if(action.type ==="ZERO_QUANTITY"){
let updatedCarts = state.carts.filter((item)=>{
return item.id !== action.payload
})

return {
    ...state,
    carts:updatedCarts
}
}

return state
}

export default CartReducer
