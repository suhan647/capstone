import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { resetCart } from '../redux/slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const Checkout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleToken = (token) => {
    console.log(token);
    setPaymentComplete(true);
    
  };

  const handleClose = () => {
    setPaymentComplete(false);
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

      <Modal open={paymentComplete} onClose={handleClose}>
  <div style={{
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <Typography variant='h5' style={{marginBottom: '10px'}}>
      Payment Complete!
    </Typography>
    <Typography variant='subtitle1'>
      Thank you for shopping with us.
    </Typography>
    <Button 
      variant="contained" 
      color="primary" 
      style={{marginTop: '20px'}}
      onClick={handleClose}
    >
      Close
    </Button>
  </div>
</Modal>

    </> 
  );
};

export default Checkout;
