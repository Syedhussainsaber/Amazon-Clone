// import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import {BsStarFill} from "react-icons/bs"
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import { useCartApi } from '../../context/CartsApi';
import {CgShoppingCart} from "react-icons/cg"


const Cards = ({image,title,price, description,rating,id}) => {

  const [open,setOpen] = useState(false)
  const [ratingStars, setRatingStar]  = useState([])
  const {carts} = useCartApi()

const [addCart, setAddCart] = useState(true)

const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpen(false);
  };

  const {handleCart} = useCartApi()


const handleRating = ()=>{
let i = 0
    while(i<Math.round(rating)){
ratingStars[i]= i+1
i++
}
}


const handleOk = () => {
    setOpen(false)
};


handleRating()

useEffect(()=>{
if(carts?.length > 0){
  carts.map((item)=>{
if(item.id === id){
  setAddCart(false)
}
  })
}

},[])

  return (
<>

 <Card
 
    style={{
      width: 330,
      height:435,
      margin:10,
      padding:12,
      border:"solid 1px gray",
      overflowY:"hidden"
    }}
    cover={<img alt={title} style={{cursor:'pointer'}} src={image} width={50} height={280} />}
    type='inner'
  >
{/* {console.log(addCart)} */}

  {/* // Product Price */}
    <Meta title={title} description={"Rs."+Math.ceil(price*82)+"/-"}  style={{fontWeight:"bold",fontSize:"18px"}} />

  {/* Product Ratings */}
<p className='ratings'>{ratingStars.map((star)=>{
return <BsStarFill size={18} color='#febd69'/>
})} <span className='rating'>{rating}</span></p>



{/* // Show More  */}
<div className="details">
<span className='showmore' onClick={()=> setOpen(!open)}>Show more</span>
{/* // Add to Cart Button */}

{
addCart?<Button variant="contained" className='btn' onClick={()=>{
    handleCart({id:id,image:image,title:title,description:description,price:price,rating:rating,ratingStars:ratingStars,quantity:1})
setAddCart(!addCart)
}}><CgShoppingCart size={20} className='cart-icon'/> Add to cart</Button>:

 <Button color="success" disabled={true}>Added to cart!</Button>
}

</div>

  </Card>
<Modal  title={title}
        open={open}
        onOk={handleOk}
okText="OK"

        onCancel={handleCancel}>
<img src={image} alt={title} height={300}/>
<h4 style={{textAlign:"center",margin:"10px",fontSize:"18px"}}>{"Rs."+Math.ceil(price*82)+"/-" }</h4>
<p style={{fontSize:"15px"}}>{description}</p>
</Modal>
  </>
  )
}

export default Cards

