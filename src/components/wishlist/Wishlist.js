import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { removeFromWishList } from '../../redux/slices/WishlistSlice';
import { addToCart } from '../../redux/slices/CartSlice';

function WishList() {
  const data = useSelector((state) => state.wishListSlice.list);

  const dispatch = useDispatch()

  const removeWishListHandler = (item) => {
    dispatch(removeFromWishList(item.id))
  }

  const moveItemToCart = (item) => {
    dispatch(addToCart(item))
    dispatch(removeFromWishList(item.id))
  }

  return (
    <>
       <Grid container spacing={2} sx={{ marginTop: '100px' }}>
      {data.length !== 0 ? (
        data.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} sx={{ marginTop: '20px' }}>
            <Card sx={{ height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                <img src={item.thumbnail} alt='dummy' height='200px' />
              </Box>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <b>{item.title}</b>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <b>
                    <small>{item.description}</small>
                  </b>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ color: 'yellowgreen', mr: 1 }} fontSize='small' />
                    <b style={{ fontSize: '14px' }}>{item.rating}</b>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <b style={{ fontSize: '14px' }}>${item.price}/-</b>
                  </Box>
                </Box>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => {
                    removeWishListHandler(item);
                  }}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  onClick={() => {
                    moveItemToCart(item);
                  }}
                >
                  Move to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Box sx={{ p: '20px', textAlign: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              No Items in WishList
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid> 
    </>
  )
}

export default WishList;
