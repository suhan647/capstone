import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../App.css'

//images
import  electronicoffer  from '../images/carousal-images/electronicoffer.png'
import  fashion  from '../images/carousal-images/fashion.png'
import  hot  from '../images/carousal-images/hot.png'
import  ramzan  from '../images/carousal-images/ramzan.png'
import  mobile  from '../images/carousal-images/mobile.png'
import  summer  from '../images/carousal-images/summer.png'
import  menssale  from '../images/carousal-images/menssale.png'


  const Carousal = () => (
  <Box className='carousal_container'>     
    <Carousel infiniteLoop autoPlay showThumbs={false}>

    <div className='image'>
            <img alt="shoe" src={menssale}   />
        </div>
        <div className='image'>
            <img alt="shoe" src={electronicoffer}   />
        </div>
        <div className='image'>
            <img alt="" src={hot}  />
        </div>  
       
        <div className='image'>
            <img alt="" src={ramzan}  />
        </div>
        <div className='image'>
            <img alt="" src={mobile} />
        </div>
        <div className='image'>
            <img alt="" src={fashion} />
        </div>
        <div className='image'>
            <img alt="" src={summer} />
        </div>
       
    </Carousel>
    </Box>

  )

  export default Carousal
