import React,{createContext, useContext, useEffect, useState} from 'react'
import axios from "axios"


const ApiContext = createContext()

 const ProductsApi = ({children}) => {

const [apiData, setApiData] = useState([])

const handleApi = async ()=>{
  try{
    // https://dummyjson.com/products
    const res = await  axios.get("https://fakestoreapi.com/products")
const data = res.data
    // console.log(data,"This is data")
    setApiData(data)
  }
   catch(err){
console.log(err)
   }
}

useEffect(()=>{
handleApi()
},[])

  return (
<ApiContext.Provider value={apiData}>
{children}
</ApiContext.Provider>
    )
}

export {ProductsApi}

export const useApiData = ()=>{
return useContext(ApiContext)
}

