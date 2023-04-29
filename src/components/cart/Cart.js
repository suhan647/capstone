import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem,increaseQuantity, decreaseQuantity, resetCart } from '../../redux/slices/CartSlice'
import '../../App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Checkout from '../../checkout/Checkout'

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

  return (
    <Box sx={{ marginTop: '8%', fontFamily: 'sans-serif' }}>
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
  </Box>
  {cartProducts.map((items) => {
    const quantity = quantities[items.id] || 0
    return (
      <>
        <Box sx={{ maxWidth: '100%', backgroundColor: '#F8F8F8', padding: '20px', borderRadius: '10px' }}>
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} sm={4}>
      <img src={items.images[0]} alt='product' style={{ width: '100%', borderRadius: '5px' }} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            {items.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {items.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Typography variant="subtitle1" component="span" sx={{ marginRight: '10px' }}>
              Quantity:
            </Typography>
            <Button
              size="small"
              disableElevation
              variant="outlined"
              onClick={() => HandleDecrease(items.id)}
              sx={{ backgroundColor: 'white', color: 'black' }}
            >
              -
            </Button>
            <Typography variant="subtitle1" component="span" sx={{ margin: '0 10px' }}>
              {quantity}
            </Typography>
            <Button
              size="small"
              disableElevation
              variant="outlined"
              onClick={() => HandleIncrease(items.id)}
              sx={{ backgroundColor: 'white', color: 'black' }}
            >
              +
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Typography variant="h6" component="span" sx={{ marginRight: '10px' }}>
              ${items.price * quantities[items.id]} /-
            </Typography>
            <Typography variant="subtitle2" component="span" sx={{ color: 'red' }}>
              -{items.discountPercentage}% OFF
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' onClick={() => HandleRemove(items.id)} sx={{ backgroundColor: 'red', color: "white", alignItems: 'center', display: 'flex' }} startIcon={<DeleteIcon sx={{ fontSize: '20px', color: 'white' }} />}>
            Remove
          </Button>
        </Box>
      </Box>
    </Grid>
</Grid>
</Box>
      </>
    )
  })}
      <Box sx={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif' }}>
<Paper sx={{ mt: '30px', width: '100%', maxWidth: '800px', mx: '20px', mb: '20px', backgroundColor: 'grey.100' }}>
{cartProducts.length !== 0 ? (
<Box sx={{ p: '20px' }}>
<Typography variant="h6" sx={{ mb: '20px', color: 'primary.main' }}>
Your Order Summary
</Typography>
<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
Shipping Charge
</Typography>
<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
$5
</Typography>
</Box>
<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
Tax Charges
</Typography>
<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
$5
</Typography>
</Box>
<Box sx={{ height: '1px', backgroundColor: 'grey.300', mb: '10px' }} />
<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
<Typography variant="h6" sx={{ color: 'primary.main' }}>
Grand Total
</Typography>
<Typography variant="h6" sx={{ color: 'primary.main' }}>
${grandTotal + 10} /-
</Typography>
</Box>
<Box sx={{ height: '1px', backgroundColor: 'grey.300', mb: '20px' }} />
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
<Checkout grandTotal={grandTotal} />
</Box>
</Box>
) : (
<Box sx={{ p: '20px', textAlign: 'center' }}>
<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
Your cart is empty
</Typography>
</Box>
)}
</Paper>
</Box>

        </Box>
  )
}

export default Cart