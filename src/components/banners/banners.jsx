import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const bannerStyles = {
  banner: {
    backgroundColor: '#f8f8f8',
    padding: '50px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    color: '#555',
    marginBottom: '40px',
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
    height: '80%',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

const CategoryBanner = ({ title, subtitle, imageUrl, buttonText, xs, md, justifyContent, alignItems, onClick }) => {
  return (
     <div style={bannerStyles.banner}>
      <Grid container spacing={2} justifyContent={justifyContent} alignItems={alignItems}>
        <Grid item xs={xs} md={md}>
          <img src={imageUrl} alt="Banner" style={bannerStyles.image} />
        </Grid>
        <Grid item xs={xs} md={md}>
          <div>
            <Typography variant="h3" style={bannerStyles.title}>
              {title}
            </Typography>
            <Typography variant="subtitle1" style={bannerStyles.subtitle}>
              {subtitle}
            </Typography>
            <Button variant="contained" style={bannerStyles.button} onClick={onClick}>
              {buttonText}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const WomensProductsBanner = () => {
  
  return (
    <Link style={{textDecoration: 'none'}} to='/categories/womens-jewellery'>
    <CategoryBanner
      title="Women's Collection"
      subtitle="Shop our collection of Women's Jewellery and accessories."
      imageUrl= "https://img.freepik.com/free-photo/vintage-still-life-with-roses-ballet-shoes_155003-636.jpg?size=626&ext=jpg&ga=GA1.1.91273752.1682885983&semt=ais"
      buttonText="Shop Now"
      xs={12} md={6}
      justifyContent="center"
      alignItems="center"
    />
    </Link>
  );
};

const MenProductsBanner = () => {

  return (
    <Link style={{textDecoration: 'none'}} to='/categories/mens-watches'>
    <CategoryBanner
      title="Men's Collection"
      subtitle="Shop our collection of men's accessories."
      buttonText="Shop Now"
      xs={12} md={6}
      justifyContent="center"
      alignItems="center"
      imageUrl="https://img.freepik.com/premium-photo/luxury-men-s-watch-with-cufflinks-breastplate-sunglasses-close-up_427248-563.jpg?size=626&ext=jpg&ga=GA1.1.91273752.1682885983&semt=ais"
     />
     </Link>
  );
};


const ElectronicsBanner = () => {

  return (
    <Link style={{textDecoration: 'none'}} to='/categories/automotive'>
    <CategoryBanner
      title="Electronics & Accessories"
      subtitle="Shop our collection of Laptops and Smartphones."
      imageUrl="https://img.freepik.com/free-photo/laptop-with-camera-smartphone-table_23-2148036986.jpg?size=626&ext=jpg&ga=GA1.1.91273752.1682885983&semt=ais"
      buttonText="Shop Now"
      xs={12} md={6}
      justifyContent="center"
      alignItems="center"
     />
     </Link>
  );
};

export { WomensProductsBanner, MenProductsBanner, ElectronicsBanner };