import React, { useEffect, useState } from 'react'
import {RiChatDeleteFill} from "react-icons/ri"

const Categories = ({data, setCategoryData, setCategories}) => {
const [keyword, setKeyword] = useState("")

useEffect(()=>{
handleCategory()

},[keyword])
    const handleCategory= async()=>{
 await setCategoryData(data.filter((item)=>{
            return item.category.toLowerCase() === keyword
            }))
    }


  return (
  <>
<div className="categories-container">

<ul>
    <li className='close'> <RiChatDeleteFill size={25} id='close-icon' onClick={()=>{
        setCategories(false)

    }} /></li>

    <li onClick={()=>{
setCategoryData([])
setKeyword("")
setCategories(false)
    } } style={keyword===""? {backgroundColor:"gray"}:{backgroundColor:"gainsboro"}}>All Categories</li>
<li onClick={()=>{
setKeyword("men's clothing")
} } style={keyword==="men's clothing"?{backgroundColor:"gray"}:{backgroundColor:"gainsboro"}}>Men's Fashion</li>
<li onClick={()=>setKeyword("women's clothing")} style={keyword==="women's clothing"? {backgroundColor:"gray"}:{backgroundColor:"gainsboro"}} >Women's Fashion</li>
<li onClick={()=>setKeyword("jewelery")} style={keyword==="jewelery"? {backgroundColor:"gray"}:{backgroundColor:"gainsboro"}}>Jewelery</li>
<li onClick={()=>setKeyword("electronics")} style={keyword==="electronics"? {backgroundColor:"gray"}:{backgroundColor:"gainsboro"}}>Electronics</li>
</ul>
</div>
  </>
  )
}

export default Categories
