import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
// import { Button, Typography, Grid } from '@material-ui/core';

const bannerStyles = {
  banner: {
    backgroundColor: '#222',
    padding: '50px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
    },
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
  subtitle: {
    color: '#ccc',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  },
  button: {
    backgroundColor: '#f44336',
    color: '#fff',
    borderRadius: '20px',
    padding: '10px 30px',
    '&:hover': {
      backgroundColor: '#f44336',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

const ElectronicProductsBanner = () => {
  return (
    <div style={bannerStyles.banner}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography variant="h3" style={bannerStyles.title}>
              Discover the Latest Electronics
            </Typography>
            <Typography variant="subtitle1" style={bannerStyles.subtitle}>
              Shop our collection of the newest and most innovative electronics.
            </Typography>
            <Button variant="contained" style={bannerStyles.button}>
              Shop Now
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src='https://i.ytimg.com/vi/7TKlt4fHzkw/maxresdefault.jpg' alt="Banner" style={bannerStyles.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ElectronicProductsBanner;
