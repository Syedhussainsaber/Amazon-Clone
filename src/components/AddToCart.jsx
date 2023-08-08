import React, { useEffect, useMemo, useState } from 'react'
import { useCartApi } from '../context/CartsApi'
import Navbar from './common/Navbar'
import {AiFillPlusSquare,AiFillMinusSquare} from "react-icons/ai"
import Checkout from './Checkout'
import { Button } from 'antd'


const AddToCart = () => {
const {carts,handleRemove,total_amount,increaseQuantity,decreaseQuantity} = useCartApi()

// const [quantity, setQuantity] = useState(1)




// Increase the product Quantity
// const increaseQuantity = (item,index)=>{
//   item.quantity++
//   setQuantity(item.quantity)
// }

  
//Decrease the product quantity
// const decreaseQuantity = async(item,index)=>{

//  item.quantity--
//   if(item.quantity===0){
// //  handleRemoveBtn(index)
// // item.quantity++
// handleRemove(index)
//   }
//   setQuantity(item.quantity)
// }


// Removing the Product using Remove Button
// const handleRemoveBtn = async(index)=>{
// await carts.splice(index,1)
// setCartsLength(carts.length)
// }

// useEffect Hook to update the quantity value and carts on the page
// useEffect(()=>{
// if(cartsLength === 0){
//   total_amount = 0
//   setBillAmount(0)
// }
// },[cartsLength,quantity,billAmount])



return (
  <>
  <Navbar/>

<div className="container">
<div className="shopping-container">
<h3 className='shopping-cart'>Shopping Carts</h3>
{
carts?.map((item,index)=>{
return <>
<div className="product" key={index}>
  <div className="product-img">
    <img src={item.image} alt={"product-image"} className='product-image' width={150} height={200} />
  </div>
  <div className="product-details">
  <h3>{item.title}</h3>
  <h3>{"Rs."+Math.ceil(item.price * 82)+"/-"}</h3>
<p>{item.description}</p>
<div className="btns">
  <div className="quatity-section">
<p>Quantity : <AiFillMinusSquare cursor={"pointer"} onClick={()=>{
  if(item.quantity >0){
      decreaseQuantity(index)

      if(item.quantity ===1){
        handleRemove(index)
      }
  }
  else{
    alert("Invalid Quantity")
  }
 
}}/> {item.quantity} <AiFillPlusSquare cursor={"pointer"} onClick={()=> {
 if(item.quantity >0 && item.quantity <10){
    increaseQuantity(index)
 }
 else{
  alert("Invalid Quantity")
}
}
}/></p>

  </div>
<Button className='remove-btn' style={{cursor:"pointer"}} onClick={()=>{
handleRemove(index)
}}>Remove</Button>
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
<h2>{"Rs."+(total_amount)+"/-"}</h2>
<Checkout amount ={total_amount*100}/>
</div>

</div>
</>
  )
}

export default AddToCart

