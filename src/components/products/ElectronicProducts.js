import { Box, Button, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../../redux/slices/CartSlice'
import { productItems } from '../../redux/slices/ProductSlice'
import Carousal from '../carousal/Carousal'
import Loader from '../loaders/Loader'
import { addToWishList } from '../../redux/slices/WishlistSlice'

function ElectronicProducts() {

  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  // const productstate = useSelector((state) => state.productsList.products)
  const dispatch = useDispatch()

  // console.log(productstate);

  useEffect(() => {

    async function getData(){
     try {
      setLoading(true)
      let data=await axios.get('https://dummyjson.com/products/category/laptops')
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

  },[])

  const HandleAddToCart = (items) =>{
   dispatch(addItem(items))
   console.log(items);
  }

  const HandleWishList = (items) => {
    dispatch(addToWishList(items))      
}

  return (
    <>
    <Carousal />
    <Box sx={{marginTop:'5%'}}>
  
    <Box sx={{display:'flex',justifyContent:'center',mt:'5px'}}>
  <h2>Electronic Products</h2>
</Box>
{loading ? <Loader /> : 
<Box sx={{display:'flex', justifyContent:'center'}}>
<Box sx={{width:'95%'}}>
  <Grid container sx={{display:'flex',}}>

{products  ? products.map((items) => {
  
return(
  <>
  <Grid className='hoverzoom' item xs={12} md={4} sx={{mt:'30px',paddingX:'10px',backgroundColor:"white",border:'20px solid white',borderRadius:'50px 20px'}}>
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
   <Button  variant='contained' sx={{backgroundColor:'#FF3131'}}  onClick={() => HandleWishList(items)}>wishList</Button>

   </Box>
   
  </Grid>
  </>
)
}) : <p>loading...</p>}
  </Grid>
</Box>
</Box>
}
 
 </Box>
    
    </>
  )
}

export default ElectronicProducts