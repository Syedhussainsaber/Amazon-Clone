import React from 'react'

const CartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){
        let product = action.payload
        return {
            ...state,
            carts : [...state.carts, product]
        }
    }
return state
}

export default CartReducer
