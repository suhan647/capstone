import { Avatar, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Carousal from '../carousal/Carousal'
import Tooltip from '@mui/material/Tooltip';
import {  useDispatch } from 'react-redux'
import {  reusability } from '../../redux/slices/ProductSlice'
import ElectronicProductsBanner from '../banners.js/ElectronicProductsBanner';

function Home() {

  const dispatch = useDispatch()

  const Phones = () => {
    dispatch(reusability("smartphones"))
  }

  return (
    <>
  <Box>
   <Carousal />
   </Box>

   <Box sx={{overflowX: 'hidden',display:'flex',justifyContent:'center',mt:'60px',alignItems:'center', }}>
   <Stack className='scroll' direction="row" spacing={10} sx={{marginX:'5px',mt:'20px',overflowX:'scroll', whiteSpace:'nowrap',padding:'20px',overflowY:'none',border:'2px solid grey',borderRadius:"30px 10px",backgroundColor:"yellow" }}>
    
   <Tooltip title="Phones">
      <Avatar className='hoverzoom' onClick={Phones}  alt="phones" src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Laptops">
      <Avatar className='hoverzoom'  alt="laptops" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Mens">
      <Avatar className='hoverzoom'  alt="laptops" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Womens">
      <Avatar className='hoverzoom'  alt="laptops" src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Shoes">
      <Avatar className='hoverzoom'  alt="laptops" src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>
    
    </Stack>
    </Box>

    <Box sx={{mt:'40px'}}>
    <ElectronicProductsBanner/>
    </Box>
</>
   
  )
}

export default Home
