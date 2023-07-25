import React, { useEffect, useMemo, useState } from 'react'
import { useCartApi } from '../context/CartsApi'
import Navbar from './common/Navbar'
import {AiFillPlusSquare,AiFillMinusSquare} from "react-icons/ai"


const AddToCart = () => {

const {carts} = useCartApi()
const [quantity, setQuantity] = useState(1)
const [cartsLength,setCartsLength] = useState(carts.length)

// Increase the product Quantity
const increaseQuantity = (item)=>{
  item.quantity++
  setQuantity(item.quantity)
  }
  
  //Decrease the product quantity
  const decreaseQuantity = (item,index)=>{
  item.quantity--
  setQuantity(item.quantity)
  }

// Removing the Product using Remove Button
const handleRemoveBtn = (index)=>{
  carts.splice(index,index+1)
  setCartsLength(carts.length)
}

useEffect(()=>{
  
},[cartsLength])

  // useMemo Hook to update the quantity value on the page
useMemo(()=>{
if(quantity ===0){
const itemIndex=carts.filter((item,index)=>{
  if(item.quantity ===0){
    return index
  }
  })
  handleRemoveBtn(itemIndex)
 
}
},[quantity,cartsLength])






  return (
  <>
  <Navbar/>

<div className="container">
<div className="shopping-container">
<h3 className='shopping-cart'>Shopping Card</h3>
{
carts.map((item,index)=>{
return <>
<div className="product" key={index}>
  <div className="product-img">
    <img src={item.image} alt={"product-image"} className='product-image' width={150} height={200} />
  </div>
  <div className="product-details">
  <h3>{item.title}</h3>
  <h3>{item.price}</h3>
<p>{item.description}</p>
<div className="btns">
  <div className="quatity-section">
<p>Quantity : <AiFillMinusSquare cursor={"pointer"} onClick={()=>{
  if(item.quantity >0){
      decreaseQuantity(item,index)
  }
  else{
    alert("Invalid Quantity")
  }
 
}}/> {item.quantity} <AiFillPlusSquare cursor={"pointer"} onClick={()=> {
 if(item.quantity >0 && item.quantity <10){
    increaseQuantity(item)
 }
 else{
  alert("Invalid Quantity")
}
}
}/></p>

  </div>

<button className='remove-btn' style={{cursor:"pointer"}} onClick={(e)=>{
handleRemoveBtn(index)
setCartsLength(carts.length)
}}>Remove</button>
</div>

</div>
</div>
<br/>
<hr />
<br/> 
<br/> 
</>
    })
}

</div>
<div className="billing-container">
<h4>Total</h4>
</div>
</div>


  </>
  )
}

export default AddToCart
