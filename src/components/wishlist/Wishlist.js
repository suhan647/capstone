import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Card, CardContent, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { removeFromWishList } from '../../redux/slices/WishlistSlice';

function WishList() {
  const data = useSelector((state) => state.wishListSlice.list);

  console.log(data);

const dispatch = useDispatch()

  const removeWishListHandler = (item) =>{
      dispatch(removeFromWishList(item.id))
  }

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: '100px',width: "100%", display: 'flex', justifyContent: 'center' }}>
        {data.length !== 0 ?data.map((item) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={4} sx={{ width: "100%", marginTop: '20px' }} item key={item.id}>
              <Card sx={{ width: "100%", marginTop: '10px', ml: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={item.thumbnail} alt='dummy' height='200px' />
                </Box>

                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
                    <b>{item.title}</b>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
                    <b><small>{item.description}</small></b>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '10px' }}>
                    <b style={{ display: 'flex', alignItems: 'center' }}>
                      <small style={{ padding: "5px" }}>Ratings: </small>{item.rating}
                      <span style={{ color: 'yellowgreen', padding: '10px' }}> <StarIcon fontSize='small' /> </span>
                    </b>

                    <b style={{ display: 'flex', alignItems: 'center' }}>
                      <small style={{ padding: "5px" }}>price: </small>${item.price}/-
                    </b>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'right', mt: '20px' }}>
                    <Button sx={{ display: 'flex', justifyContent: 'right', mr: '20px', backgroundColor: 'red' }} variant="contained" size="small" onClick={() => {removeWishListHandler(item)}}>remove</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        }) : <h1 style={{marginTop:'100px'}}>No items in Wishlist</h1>}
      </Grid>
    </>
  )
}

export default WishList;
