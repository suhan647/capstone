import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem,increaseQuantity, decreaseQuantity, resetCart } from '../../redux/slices/CartSlice'
import '../../App.css'
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {

  const cartProducts = useSelector((state) => state.CartSlice.items)
  const quantities = useSelector((state) => state.CartSlice.quantities)
 
  const dispatch = useDispatch()

  const HandleRemove = (id) => {
    dispatch(removeItem(id))
  }

  const HandleIncrease = (id) => {
    dispatch(increaseQuantity({ id }))
  }
  
  const HandleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }))
  }

  function calculateGrandTotal(cartProducts, quantities) {
    let total = 0;  
    cartProducts.forEach(product => {
      total += product.price * quantities[product.id];
    });
    return total;
  }
  
  const grandTotal = calculateGrandTotal(cartProducts, quantities)

  const checkOutHandler = () => {
     alert('Your Order has been SuccessFully Placed')
     dispatch(resetCart());
  }

  return (
    <Box sx={{ marginTop: '8%',fontFamily:'sans-serif' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>{cartProducts.length === 0 ? <h2>No items in cart.</h2> : null}</Box>
      
      {
        cartProducts.map((items) => {

          const quantity = quantities[items.id] || 0

          return (
            <>

              <Box className='cartContainer' sx={{width:'65%',fontFamily:'sans-serif'}}>
                <Box className='cart2Container' sx={{ display: 'flex',padding:'40px',width:'auto' }}>

                  <Box sx={{marginRight:'30px'}}>
                    <img src={items.images[0]} alt='product' height='200px' width='200px' />
                  </Box>

                  <Box className='cenetr'>
                    <b style={{ fontSize: '30px' }}>{items.title}</b>
                    <p>{items.description}</p>
                    <Box sx={{ display: 'flex', alignItems: 'center',padding:'10px' }}>
                     <b>Quantity:</b>

                      <Button
                        size="small"
                        disableElevation
                        variant="text"
                        onClick={() => HandleDecrease(items.id)}
                        sx={{ backgroundColor: 'white', color: 'black' }}
                      >
                        <b>-</b>
                      </Button>

                      <b>{quantity}</b>

                      <Button
                        size="small"
                        disableElevation
                        variant="text"
                        onClick={() =>  HandleIncrease(items.id)}
                        sx={{ backgroundColor: 'white', color: 'black' }}
                      >
                        <b>+</b>
                      </Button>
                    </Box>

                    <Box>
                <b>${items.price * quantities[items.id]} /-</b>
                    <small style={{paddingLeft:'20px',color:'red'}}>-{items.discountPercentage}% OFF</small>
                    </Box>   

                  </Box>

                  <Box>
                    <Button variant='contained' onClick={() => HandleRemove(items.id)} sx={{backgroundColor:'red',color:"white",marginLeft:'90px', alignItems:'center',display:'flex', justifyContent:'flex-end',mt:'70px'}}  startIcon={<DeleteIcon  sx={{fontSize:'40px', color:'white'}}  />}>Remove</Button>
                  </Box>

                </Box>
             
              </Box>
             
            </>
          )
        })
      }
      <div style={{display:'flex',justifyContent:'center',fontFamily:"sans-serif",width:'100%'}}>
 <Paper sx={{mt:'30px', width:"65%", marginBottom:'20px'}} >
                {cartProducts.length !== 0 ? 
                <Box className='grandtotal' sx={{fontSize:"25px",display:'flex', flexDirection:'column',justifyContent:'center',}}>

                  <Box sx={{padding:"9px",}}>
                  <b>shipping Charge  :</b>
                  <b style={{padding:'19px',}}> $5</b>
                  </Box>
                 
                  <Box sx={{padding:"",}}>
                  <b>Tax Charges :</b>
                  <b style={{padding:'70px'}}> $5</b>
                  </Box>

           <Box sx={{height:'1px',backgroundColor:'black'}}></Box>

                  <Box sx={{padding:"9px"}}>
                  <b>GrandTotal  :</b>
                  <b style={{padding:'55px'}}> ${grandTotal + 10} /-</b>
                  </Box>

                  <Box sx={{height:'1px',backgroundColor:'black',}}></Box>

                 
                 <Button variant='contained' sx={{backgroundColor:'#ff1b6b'}} onClick={() => {checkOutHandler()}}>Checkout</Button>
                </Box>  
                : null} 
                 </Paper>
                 </div>
    </Box>
  )
}

export default Cart