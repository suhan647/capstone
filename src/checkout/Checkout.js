import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { resetCart } from '../redux/slices/CartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = (props) => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToken = (token) => {
    console.log(token);
    // setOpen(true);
    dispatch(resetCart()); 
  };

  return (
    <>
      <StripeCheckout
        stripeKey="pk_test_51N1ly9SA8Hoo3dY0CZxddEcN7sjDcYvLRaMyzTJijF9093wR3FolrB60H74JizOEkXPnibC5yAIFLG3xOXJQ8A4m00SUPG2TjQ"
        token={handleToken}
        billingAddress
        shippingAddress
        name="My Awesome Store"
        description="Checkout with Stripe"
        amount={(props.grandTotal + 10) + "00"}
        currency="USD"
      >
        <Button variant='contained' sx={{backgroundColor:'#ff1b6b'}}>Checkout</Button>
      </StripeCheckout>

    </> 
  );
};

export default Checkout;
