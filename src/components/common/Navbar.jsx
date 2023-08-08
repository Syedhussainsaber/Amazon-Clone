import React, { useEffect, useState } from 'react'
import {HiSearch} from "react-icons/hi"
import {CgShoppingCart} from "react-icons/cg"
import { useNavigate } from 'react-router-dom'
import { useCartApi } from '../../context/CartsApi'
import { Button, Dropdown, Space, Input,List,Avatar,Modal} from 'antd';
import { AudioOutlined } from '@ant-design/icons'
import { useApiData } from '../../context/ProductsApi'
import {BsThreeDotsVertical} from "react-icons/bs"


const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'black',
    }}
  />
);

const Navbar = ({data, setCategoryData, setCategories}) => {

  const [keyword, setKeyword] = useState("")
const {carts,total_items} = useCartApi()
const products = useApiData()
const navigate = useNavigate()
const [searchValue, setSearchValue] = useState("")
const [searchProducts, setSearchProducts] = useState([])
const [open,setOpen] = useState(false)
const [searchTitle, setSearchTitle] = useState("")
const [displayMenu, setDisplayMenu] = useState(false)

useEffect(()=>{
  handleCategory()
  
  },[keyword])

  useEffect(()=>{
setTimeout(()=>{
handleSearch()
// onSearch(searchValue)
},800)
  },[searchValue])


  const handleSearch = ()=>{
    setSearchProducts(
      products.filter((product)=>{
return Object.values(product).join("").toLowerCase().includes(searchValue.toLowerCase())
      })
    )
  }

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false)
};



      const handleCategory= async()=>{
   await setCategoryData(data.filter((item)=>{
              return item.category.toLowerCase() === keyword
              }))
      }
  
      const onSearch = (value) =>{
// console.log(products)
setOpen(true)
setSearchValue(value)
setSearchProducts(products.filter((item)=>{
return Object.values(item).join("").toLowerCase().includes(value.toLowerCase())
}))
console.log(searchProducts)
      }

const items = [
  {
    key: '1',
    label: (
      <a  onClick={()=>{
        setCategoryData([])
        setKeyword("")
        setCategories(false)
            } }>
All Categories

      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a onClick={()=>{
        setKeyword("men's clothing")
        } }>
Men's Fashion
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a onClick={()=>setKeyword("women's clothing")}  >
Women's Fashion
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a onClick={()=>setKeyword("jewelery")} >
Jewelery
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a onClick={()=>setKeyword("electronics")}>
Electronics
      </a>
    ),
  }

];

  return (
    <>
<div className='navbar'>
      <img src={"/amazon-logo.png"} alt="Logo" width={"120"} height={"45"} onClick={()=> navigate("/")} style={{cursor:"pointer"}} />

<div className="searchInput"> 


<Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button size='large'>All</Button>
      </Dropdown>
     
    </Space>
 </Space>

{/* <input type='search' placeholder='Search Amazon'/> */}
<Search placeholder="search products" size='large' className='search-box' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} suffix={suffix} bordered onSearch={onSearch} enterButton/>
{/* <HiSearch size={25} className='searchIcon'/> */}
</div>



<div className={displayMenu? "accountState showMenu":"accountState hideMenu"} >
  <p>Hello, Sigin</p>
  <h4>Account & Lists</h4>
</div>

<div className="cart">
<span className='count'>{total_items}</span>

<CgShoppingCart size={45} onClick={()=> navigate("/add-to-cart")} cursor={"pointer"} />
<span>Cart</span>
</div>
<div className="navbar-mobile">
<BsThreeDotsVertical size={30} color='white' cursor={"pointer"} onClick={()=> setDisplayMenu(!displayMenu)}  />
</div>

    </div>


  
    <div className="search-results">
 <>
 {
 searchValue ? <List
  itemLayout="horizontal"
  // className={searchValue?"zindex10":'zindex0'}
  dataSource={searchProducts}
  size="large"
  style={{
width:"552px",padding:"8px",position:"absolute",
backgroundColor:"white",
left:"26%", 
top:"70px",
border:"1px solid #fcab41",
borderRadius:"8px",
overflowY:"scroll",
height:"50vh",
zIndex:searchValue?30:0
}}
    renderItem={(item, index) => (
    <List.Item key={index} style={{cursor:"pointer"}} >

      <List.Item.Meta
      style={{padding:"10px",  backgroundColor:"white",}}
        avatar={<Avatar src={item.image} size={40} />}
       
        title={<a onClick={()=>{
          // setOpen(true)
          setSearchValue(item.title)
setSearchTitle(item.title)
        }
}>{item.title}</a>}
        description={item.description}
      />
      
      <div className="btns" style={{display:'flex',flexDirection:"column",
    gap:"10px"
    }}>
      <Button onClick={()=>{
        setOpen(true)
      }}>View more</Button>
      {/* <Button>Add to cart</Button> */}
      </div>
      {
        searchTitle === item.title ?
        <Modal title={item.title}
        open={open}
        onOk={handleOk}
      okText="OK"
        onCancel={handleCancel}>
      <img src={item.image} alt={item.title} height={300}/>
      <h4 style={{textAlign:"center",margin:"10px",fontSize:"18px"}}>{"Rs."+Math.ceil(item.price*82)+"/-" }</h4>
      <p style={{fontSize:"15px"}}>{item.description}</p>
      </Modal>
        :<></>
      }

     
    </List.Item>
  )}
/>:<></>
 }


</>
   
</div>
    </>

  )
}

export default Navbar
