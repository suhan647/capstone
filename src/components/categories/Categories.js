import { Avatar, Grid, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Carousal from '../carousal/Carousal'
import Tooltip from '@mui/material/Tooltip';
import {  useDispatch } from 'react-redux'
import { productItems } from '../../redux/slices/ProductSlice'
import { addItem } from '../../redux/slices/CartSlice'
import { Link, useParams } from 'react-router-dom'
import Loader from '../loaders/Loader'
import { addToWishList } from '../../redux/slices/WishlistSlice'
import apiService from '../../services/apiService'
import { AddShoppingCart, Favorite } from '@mui/icons-material';

function Categories() {

  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const category = useParams()
  console.log("params",category.name);

  useEffect(() => {

    async function getData(){

      window.scrollTo(0, window.innerHeight / 1);
      try {
      
        setLoading(true)
        let data = category ? await apiService.get(`/products/category/${category.name}`) : ''
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
  },[category, dispatch])


  const HandleAddToCart = (items) =>{
   dispatch(addItem(items))
   console.log(items);
  }
 
  const HandleWishList = (items) => {
       dispatch(addToWishList(items))      
  }

  return (
    <>
  <Box>
   <Carousal />
   </Box>

   <Box sx={{overflowX: 'hidden',display:'flex',justifyContent:'center',mt:'60px',alignItems:'center', }}>
   <Stack className='scroll' direction="row" spacing={10} sx={{marginX:'5px',mt:'20px',overflowX:'scroll', whiteSpace:'nowrap',padding:'20px',overflowY:'none',border:'2px solid grey',borderRadius:"30px 10px",backgroundColor:"yellow" }}>
    
   <Tooltip title="Phones">
    <Link to='/categories/smartphones'>
      <Avatar className='hoverzoom' alt="phones" src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Link>  
      </Tooltip>

      <Tooltip title="Laptops">
      <Link to='/categories/laptops'>
      <Avatar className='hoverzoom'  alt="laptops" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Link>
      </Tooltip>

      <Tooltip title="Mens">
      <Link to='/categories/mens-shoes'>
      <Avatar className='hoverzoom'  alt="mens-shoes" src="https://img.freepik.com/free-photo/alternative-man-tying-boots-shoelaces-floor_53876-101248.jpg?size=626&ext=jpg&ga=GA1.1.91273752.1682885983&semt=ais" sx={{ height: '120px', width: '120px' }}/>
      </Link>
      </Tooltip>

      <Tooltip title="Womens">
      <Link to='/categories/tops'>
      <Avatar className='hoverzoom'   alt="tops" src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Link>
      </Tooltip>

      <Tooltip title="Shoes">
      <Link to='/categories/womens-shoes'>
      <Avatar className='hoverzoom'  alt="womens-shoes" src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Link>
      </Tooltip>
    
    </Stack>
    </Box>
   
<Box sx={{display:'flex',justifyContent:'center',mt:'5px'}}>
  <h2>{category ? `${category.name}` :" "}</h2>
</Box>
{loading ? (
  <Loader open={loading} />
) : (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ width: '95%' }}>
      <Grid container spacing={3}>
        {products ? (
          products.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box
                sx={{
                  p: '10px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  transition: 'box-shadow .3s',
                  '&:hover': {
                    boxShadow: '0 0 10px rgba(0,0,0,.3)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to={`/productdetails/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      height='250px'
                      width='250px'
                      alt='product'
                    />
                  </Link>
                </Box>
                <Box sx={{ mt: '10px', fontFamily: 'sans-serif' }}>
                  <Typography variant='subtitle1' gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' gutterBottom>
                    {item.description.length > 30
                      ? item.description.slice(0, 40) + '...'
                      : null}
                  </Typography>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Typography variant='h6' component='span'>
                      ${item.price} /-
                    </Typography>
                    <Typography
                      variant='subtitle2'
                      color='error'
                      component='span'
                    >
                      {item.discountPercentage}% OFF
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton
                    color='primary'
                    onClick={() => HandleAddToCart(item)}
                  >
                    <AddShoppingCart />
                  </IconButton>
                  <IconButton
                    color='secondary'
                    onClick={() => HandleWishList(item)}
                  >
                    <Favorite /> 
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <p>loading...</p>
        )}
      </Grid>
    </Box>
  </Box>
)}

</>
   
  )
}

export default Categories
