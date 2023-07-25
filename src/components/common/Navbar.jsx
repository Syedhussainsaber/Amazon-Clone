import React, { useEffect, useState } from 'react'
import {HiSearch} from "react-icons/hi"
import {CgShoppingCart} from "react-icons/cg"
import { useNavigate } from 'react-router-dom'
import { useCartApi } from '../../context/CartsApi'



const Navbar = ({setCategories}) => {

const {carts} = useCartApi()

const navigate = useNavigate()

  return (
    <>
<div className='navbar'>
      <img src={"/amazon-logo.png"} alt="Logo" width={"120"} height={"45"} onClick={()=> navigate("/")} style={{cursor:"pointer"}} />

<div className="searchInput"> 
  <button className='all-btn' onClick={async()=> {
   await setCategories(true)
  }}>All</button>

<input type='search' placeholder='Search Amazon'/>
<HiSearch size={25} className='searchIcon'/>
</div>

<div className="accountState">
  <p>Hello, Sigin</p>
  <h4>Account & Lists</h4>
</div>

<div className="cart">
<span className='count'>{carts.length}</span>

<CgShoppingCart size={45} onClick={()=> navigate("/add-to-cart")} cursor={"pointer"} />
<span>Cart</span>
</div>
    </div>
  
    </>

  )
}

export default Navbar
