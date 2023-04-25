import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../../App.css'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material'
import { addItem } from '../../redux/slices/CartSlice'

function ProductDetails() {

    const [singleData, setSingleData] = useState([])

    const [images, setImages] = useState([])
    const [multiImage, setMultiImage] = useState([])

    const {id} = useParams()
    // const products = useSelector((state) => state.productsList.products)
    const dispatch = useDispatch()

    // let single = products.data.products.find((product) =>product.id === id)
    // console.log('single',single);

    async function productData(id) {
        try {
            let data = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(data.data);
        setSingleData(data.data)
        setImages(data.data.images[0])
        setMultiImage(data.data.images)
        } catch (error) {
            console.log(error);
        }
    }


useEffect(() => {
    productData(id)
},[])

const HandleAddToCart = (singleData) => {
 dispatch(addItem(singleData))
}
 
  return (
    <>
    
    <Box className='container' sx={{ marginTop: '8%',fontFamily:'sans-serif' }}>

<Box className='main' sx={{display:'flex',marginLeft:'20px',}}>
    <Box className='multiimage' sx={{}} >
{multiImage.map((img) => {
    return <div >
        <img style={ img === images ? {border:'5px solid red',height:'90px'} : {} } onClick={()=> {setImages(img)}} src={img} alt='pro-img' height={70} width={100} />
        </div>
})}
</Box>

<Box className='singleImage' sx={{paddingLeft:'20px'}}>
<img src={images} height={375} width={370}  />
</Box>

<Box className='info' sx={{marginLeft:"10%"}}>

    <Box sx={{alignItems:'center',display:'flex'}}>
   <b style={{fontSize:"30px"}}>{singleData.title}</b>
   </Box>

   <Box sx={{alignItems:'center',display:'flex'}}>
   <p>{singleData.description}</p>
   </Box>

   <Box sx={{alignItems:'center',display:'flex'}}>
   <p><b>Brand :</b> {singleData.brand}</p>
   </Box>

   <Box sx={{alignItems:'center',display:'flex'}}>
   <p><b>Category :</b> {singleData.category}</p>
   </Box>

   <Box sx={{alignItems:'center',display:'flex'}}>
   <p style={{alignItems:'center'}}><b>Ratings : {singleData.rating}</b><span style={{color:'yellow'}}><StarIcon fontSize="small"/></span></p>
   </Box>

   <Box sx={{alignItems:'center',display:'flex'}}>
   <p><b>Available Quantity :</b> {singleData.stock}</p>
   </Box>

   <Box sx={{alignItems:'center',display:'flex',width:'100%'}}>
   <p style={{display:'flex',alignItems:'center'}}> 
    <b>Price: ${singleData.price}</b>
   <b style={{marginLeft:'6px', fontSize:'9px',color:'red'}}>-{singleData.discountPercentage}%</b>
   </p>
   </Box>

   <Box sx={{mt:'10px'}}>
   <Button sx={{backgroundColor:'red'}} variant='contained' onClick={() =>{HandleAddToCart(singleData)}}><b>Add Item To Cart</b></Button>
   </Box>
</Box>
</Box>
    </Box>
    </>
  
  )
}

export default ProductDetails