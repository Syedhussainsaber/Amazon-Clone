import { useEffect, useState } from 'react'
import Navbar from './common/Navbar'
import Cards from './common/Cards'
// import Categories from './common/Categories'
import { useApiData } from '../context/ProductsApi'
// import { getCarts } from '../apis/firestoreApi'

const HomeComponent = () => {
// const [data,setData] = useState([])
const [categoryData, setCategoryData] = useState([])
const [categories, setCategories]= useState(false)
const apiData = useApiData()


  return (
    <>
    <Navbar data={apiData} setCategoryData={setCategoryData}  setCategories={setCategories}/>

{categoryData.length > 0 ?
  <div className="items">
    <h2>{categoryData[0].category}</h2>
  <div className="items-container">

    {
categoryData.map((item, index)=>{
  
  return <Cards image={item.image} title={item.title} price={item.price} description={item.description} rating={item.rating.rate} id={item.id} key={index} />
  })
    }
</div>
</div>
:
<div className="items">
<h2>Products</h2>
<div className="items-container">
  {
  apiData.map((item,index)=>{

    return <Cards image={item.image} title={item.title} price={item.price} description={item.description} rating={item.rating.rate} id={item.id} key={index} />
      })
  }
  </div> 
  </div>
}


</>
  )
}

export default HomeComponent
