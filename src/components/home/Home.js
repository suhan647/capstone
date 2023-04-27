import { Avatar, Button, Grid, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Carousal from '../carousal/Carousal'
import Tooltip from '@mui/material/Tooltip';
import {  useDispatch, useSelector } from 'react-redux'
import { productItems, reusability } from '../../redux/slices/ProductSlice'
import { addItem } from '../../redux/slices/CartSlice'
import { Link, } from 'react-router-dom'
import Loader from '../loaders/Loader'
import { addToWishList } from '../../redux/slices/WishlistSlice'
import { useNavigate } from 'react-router-dom'
import apiService from '../../services/apiService'

function Home() {

  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const category = useSelector((state) => state.productsList.reuse)

  console.log(category);

  useEffect(() => {

    async function getData(){
      try {
        setLoading(true)
        let data = category ? await apiService.get(`/products/category/${category}`) : await apiService.get('/products')
        setProducts(data.data.products)
     dispatch(productItems(data))
     setLoading(false)
      } catch (error) {
        setLoading(true)
        console.log(error);
        setLoading(false)
      }
    }
    getData()
  },[category])


  const HandleAddToCart = (items) =>{
   dispatch(addItem(items))
   console.log(items);
  }
 
  const HandleWishList = (items) => {
       dispatch(addToWishList(items))      
  }

  const Phones = () => {
    dispatch(reusability("smartphones"))
  }

  return (
    <>
  <Box>
   <Carousal />
   </Box>

   <Box sx={{overflowX: 'hidden',display:'flex',justifyContent:'center',mt:'60px',alignItems:'center', }}>
   <Stack className='scroll' direction="row" spacing={10} sx={{marginX:'5px',mt:'20px',overflowX:'scroll', whiteSpace:'nowrap',padding:'20px',overflowY:'none',border:'2px solid grey',borderRadius:"30px 10px",backgroundColor:"yellow" }}>
    
   <Tooltip title="Phones">
      <Avatar className='hoverzoom' onClick={Phones}  alt="phones" src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Laptops">
      <Avatar className='hoverzoom'  alt="laptops" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Mens">
      <Avatar className='hoverzoom'  alt="laptops" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Womens">
      <Avatar className='hoverzoom'  alt="laptops" src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Shoes">
      <Avatar className='hoverzoom'  alt="laptops" src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>
    
    </Stack>
    </Box>
   
<Box sx={{display:'flex',justifyContent:'center',mt:'5px'}}>
  <h2>{category ? `${category}` :"All Products"}</h2>
</Box>
{loading ? <Loader /> : 
<Box sx={{display:'flex', justifyContent:'center'}}>
<Box sx={{width:'95%'}}>
  <Grid container sx={{display:'flex',}}>

{products  ? products.map((items) => {
  
return(
  <>
  <Grid className='hoverzoom' item xs={12} md={4} sx={{mt:'30px',paddingX:'20px',backgroundColor:"white",border:'20px solid white',borderRadius:'50px 20px'}}>
    <Box sx={{display:'flex', justifyContent:'center'}}>
      <Link to={`/productdetails/${items.id}`}>
    <img src={items.thumbnail} height='300px' width='300px' alt='products'/>
    </Link>
    </Box>

    <Box sx={{md:{marginLeft:'90px'},lg:{marginLeft:'90px'}}}>
   <Box className='margin' sx={{mt:'10px',fontFamily:"sans-serif",}}>
    <b style={{fontSize:'15px'}}>{items.title}</b>
    <br/>
    <small>{items.description.length > 30 ? items.description.slice(0, 40) + "..."  : null}</small>
   </Box>

   <Stack className='margin' direction="row" spacing={1} sx={{alignItems:'center'}} >
   <p style={{fontFamily:'fantasy'}}>${items.price} /-</p>
    <b style={{fontFamily:'sans-serif',fontSize:'8px', color:'red'}}>{items.discountPercentage}% OFF</b>
   </Stack>
   </Box>
   
   <Box className='cartbutton' sx={{display:'flex', justifyContent:'space-between',paddingright:'40px'}} >
   
   <Button  variant='contained' onClick={() =>HandleAddToCart(items)} sx={{backgroundColor:'#FF3131',marginright:'50px'}}>Add to cart</Button>
   <Button  variant='contained' sx={{backgroundColor:'#FF3131'}} onClick={() => HandleWishList(items)}>wishList</Button>

   </Box>
   
  </Grid>
  </>
)
}) : <p>loading...</p>}
  </Grid>
</Box>
</Box>
}
</>
   
  )
}

export default Home
