
import { Avatar, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Carousal from '../carousal/Carousal'
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux'
import { reusability } from '../../redux/slices/ProductSlice'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Grid } from '@mui/material';
import { WomensProductsBanner, MenProductsBanner, ElectronicsBanner } from '../banners/banners.jsx';

const newArrivals = [
  {
    id: 1,
    name: 'Women T-Shirt',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRISEhERERIREhEREhERERERERESGBkZGRgUGBgcIy4lHB4rHxgYJjgmKy8xNTU3GiQ7QDs0Pzw2NTEBDAwMEA8QHhISHjQkJSE0NDQ0NDQ0NDQxNDQ0NDQ0NTQ0NTQ0NjQ0NDQ0NDE0NDQ3NDQ0NDQ0NDQ0MTQ0NzQ0NP/AABEIAOMA3gMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIDBwQGCAX/xABAEAACAQMBBAgDBgMFCQAAAAABAgADBBEhBQYSMQcTIkFRYXGBMpGhFEJicoKxkqLBI1Jzk7IWJDRDU1TC0eH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQEBAAICAgIBBAMBAAAAAAAAAQIRAzESIQRBUTJCYYEicZEU/9oADAMBAAIRAxEAPwDc0REBERAREQERIgIny7HbtrWqPRoXFOq9NQ7CmwYBScZyNDrzwdMifUhNlnaYiIQREQERECJ0bpO3lqWlKilvU4LitUyGAVitNPiOGBGpKjXzncr26Skj1ajBEpqWZm5Ko1JnnHe3bzXlxUuGyFPYpKeaUlzgeupJ82Mtjjut+Dj8st3qO0bO6WLxAFrUqFfGe12qTN68OV+k+1S6Xl04rFh+W4Vv3UTUSDJmQHPpNfDF13gwv03JT6W7U/Fa3I9Oqb92Ezr0r2J/5F4P0UD+1SaXEnMeGKP/AC4N62fSRs2owQ1KlEtoGq02Vc+bDIHqdJ2+lVVgGUhgwBVlIIIPeCOYnlsnlOw7r723Nkw6tjUoE9u3ZjwHxKf3W8xz7wZW8f4Z5/Fmt4vQ8T5mxNsUbuilei3Er6EH4kYc0YdxH/3lPpzJx2WXVTERCCIiBEROJtC9p0Kb1qzhKdNSzMc4A9BqT3ADU5g7cuYLm5p01L1Ki01HNnYKo9SdJqzb/Sq5yllS4By6+uMk+aoNB6kn0mv9o7Ur1247is9Zu4u2Qv5V5KPIAS8wt7dOHxcsu/TcO2OkqzpZWgHunHenYpZ83Ya/pBnQtt9Iu0KwZUdbVDkYoA8ePAu2ufNeGdWBmF5pMJHXh8fDH63/ALfS3Z2w9nXp3CjPCeGomccdM6Mvy1HmBPQ2zNoU7inTr0WD06i8SkfIgjuIOQR3ETzHynZN1N669kxKdui5BqW7EgE8uJT91sd/fpkHTEZ47U5+Hzm53HoWJ17d3ey0vAOqqAVMdqhUwtVfHA+8PMZE7DMbNPPuNl1UxEiEIkE41Og55M+Ftze2ytAeurKXHKjT/tKp/SPh9Tgec1Jvf0gXF4GpUwbe2OhQHNSqPxsO78I08SZaY2tcOHLP+I5vSTvkLlvs1u+bam2XdTpcOOWPFVPLxOvcDNeOcmSTLquNe/um0mpp6GGEwx8YjGNO885kAkIssRJaIjMGY8wLMeXrLE85gDae8yhufpCHZdxd6GsbgFiTbVSFrpqcDuqKP7y/UZHhj0FSdWAZSCGAYMDkEHUEHwnlZDNwdEu8nGhsKrdukC9uSfipfeTPipOg8D4CZ54/bk+Tx7nlP7bOiImTiIiIETTHSdvV17/ZKLZoUW/tWU6Vao0x5quvqfQTuXSTvKbSh1VJsXFyGVSOdOmNHqeR1wPM57jNHvy9Jphj9uz43F+6/wBMR/aSplXOvrI75q7XLWYzLUzoZAhKhEriZMQVhCgc6HvByCNCD4z7dnvdtCkMJeVwByDsKoHpxg4nxSsqVjSLjL3Nuzt0g7U5fbG/ybcH/RPl32817WyKl3cMDzXrGRD+lcD6T5nBJ4ZGorMMZ1J/xiyfSAsyBJbElfSqpjUxjMtiWCwIAgiZOGUIhLE+k49Q4OZyGOcj5TivyI7xIqmVCefqJdW1PpMGf6SynnI2rMnJTlOVYXr0KlOtSbhqUmDqe7I7j4gjII7wTOMg0Eswll9enpPdvbVO8t6dxT04x20zrTqD4kPofmCD3z680J0a7yfY7gpWfgtrgcLls8FOoBlH8u9T6jPKb6BmGWOq8zm4/DLSZhuK6U0eo7BERWd2bQKqjJY+QAmaas6Wd5gANn0myW4WuSD8K6FaXqdGPljxkYzd0rhhc8tR0LebbTXlxUuGyFY8FJT9ykueEevMnzYz4znul1lKk6OnqySTUYmPwn2kM3I+0huRHgcyhP11hG3MVuyZNE5mDi7PqRM9AaQtGbEcMkScQsoVleGZcSCINMRWOGZCJGIQx4khZeSBAgLJCyQIhJiUYS5lWgcWsO+caodQfHQzmVBpODU7x7yKyzYf/cyU9T7z6b7HK2KXx4gHu2tlBxwlVTi4h49oMP0mfOoD5yuN2xwu65tNfYS58h798pxADLGYevZiEUEliFVVBZmJ0AAHM+UtvTouUnbK4/vNNz9Em8JuKFS2qEu1pwBXP3qTZCg+Y4SPTE6juv0WXFfhqXrNbUjg9UMG4ceBzonvk+Qm4Nj7Gt7WmKVtSWkg58I7THxYnVj5mZ5ZSuLn5ccvUda6QN8vsSpSohXuKoY4bUUkwQHIHMluQ78GaRquzszuxd3ZndmOWZmOSxPiSZuTe/o6W7qvc0bg0qz8PGlQF6TFVCjB5roB4jymrtubu3dmcXNEqmcLWTtUW9GHI+TYPlLYXHS/x7hJqX2+WukpUl+L3mJ/KXdbAx19Ziz9D9JapMTH6ytrPK6ZgdB6znIdBMe0tlVrdbdqgAW6orcUiDnKMSAD+LGDjwYSqPyEmXZhnL05aGZAZiQywMlsySCJAMcUkQRIxBeULyBeV4pQtIBhG2bMZmINLZhKSZVjBaULQhVzPn1zrOZUeZt27Hr7y0o4yKlxTDD8AYF/5Q0rlfTLly1i2dvvsVqOwrWiqAm3a2qVsfcZg3GwHf26mP1TUKtw+s9UbXsEuKFa3ckLWpvTZhjKhhjiGdMjn7T4OwNwNn2hDrR66qNetuCKjg+KjHCp8wAZlMtOHj5pjL+Wod2twr69KuU+zUDr11ZSOIfgTm3roPObl3X3Ns7EA0k462MNcVMNVOeYB5KPIY88zssSLlapny5ZdpiIkMyYqtJWUq6qysCGVgGUg8wQeYmWIGud4+i63q5qWbfZah16sgtbsfIc09sj8M1Tt3Yd1ZtwXNJkycI47VJ/ysND6c/ET03OPeWdOqjU6qLURhhkdQyn2MtMrG+HyMsfV9x5Uczs24O6DX9fL4FrQZDcHJDNniIRcd54cE9wOfCdz3l6JMkvs6oqAnW3rs3Cv5KmCceTA+s79unu/TsbZLdMFvjquBjrKpxxN6aADwAEtlluel+TmmWPrt0zpo2Nm0t61NAFtKgQhRgJRcBRgDkAyoPeaaVuXpPVO0rNa1KrQcditTemw8mBB99Z5XuaDU3ek4w9J3puPB0JVh8xGFT8fP1Y5iPMoacGm8zrUmrulckNIZpx+skGrCdsjGVLTC1SUNSFduQXkGpOKWk8UI8nIDyetnDLwGkbR5OX1kq1ScfjkFo2eS1R53XodsOs2iKhHZtqNSpnuDNimB64dj7TohM3X0H7M4be4uSNa9UU1PilMcx+pmH6ZTK+nNz5f4tnyYiZOIiIgIiICIiAiIgIiIETSXTJuz1dVb+kv9nXISuAPhrAdl/IMBj1HnN2z523dlU7q3rW1T4ayFc4yVbmrDzDAH2ky6Wwy8bt5ZUywaZb60ei9SjUGHpO1Nx3cSkg48RpzmIDTM2j0satxypaULSJOy5JzEiXAxIRPZKkwTJRcwd+ogCRMj6aTGYLNEREIQ09N7i2HUWFnTxg9SjsPx1O231Yzzbs2066tRojINarSpAjmONgufrPV6KAABoAAAPACZZOXnvUXiIlXOREQEREBERAREQEREBERA0V0x7MSnepWUqPtFIM6j4uNDw8RHgV4f4TNeO2Zt3pysBi0uRoeJ7dvMEca/LD/OagmuN9O/iu8IREzomBk+wlmkm1QmBkzG5zJd8wFhN9+oImZnbCjHfA7IzOO75jpN1jEE5kgQiyxhWT7qoEGWxKmE2ado6NLTrNpWgxkI71T5cCMwP8QWekJoroVtuK+qP3U7V/ZmdAPpxTesyy7cHN+pMREqyIiICIiAiIgIiICIiAiIgau6cq4FvaU/vPXdwPJEKn61Fmlp33pd2uK971SHKWidVpqOtbtP8ALsr6qZ0tKYGrewm2M9O/gxvjClTx2m9hMVR8mWqOTKASza/iCpM6qBqYRcamYq1SOk+sYrVqZlEWQq5nJRcDMjtSTyu6rjEgCTzlwMCWaMbyoEHUy6iQr3W0+gyj2758clt1B/MahI/lE3BNWdB6f2V43eatEewVj/5GbTmOXbz+b9dTERKsiIiAiIgIiICIiAiIgRmdB3q6R7agtWnbN9ouMMilVJo035cTOdGxzwuc4xpznYt8dq/ZrO5r5wy0yqf4j9hP5iD7TzYapxiXwx326ODime7fpeo+rO7F6jkszMcksTksT3kmcdnJkEyVWau7+IgCZqdPvMslMDUzHVqyU9Iq1JgC5lgM6mZqaSvauvKpp05FSZXONBMYEssIsiu3dMx0GZxDqZFRl6iVEyKJCiZVElMja3QfU0vk8Gt2+Ycf0E2vNK9DV1w3dakTpVt+IebI4x9GabqmGfbzueazqYiJViREQEREBERAREQEiTMdYZVh4qw+kDS/S7vStdksqDBqdFy9ZlOVaqMqEB7woLZ8z5TWomQY7+7SXXhm+OOo9TjwmM1FEp5mYALKNV8JhZ8yy+5F6tSYgudTLKneZcCQjW+xVmc6DzkLpMbNmSsgzNTT5TGi5l6zcIx3wMNd8zGgkDWZEEKz3drKJlWUWXELPt7mX/UX1pUJwvWim5zpw1MoSfIcWfaekBPKLz0tuntX7VaW9xnLPTXj8qi9lx/EDMuSfbi+Vj7mT7MREzchERAREQEREBERAidO6Qt7RZUeCnhrqurCkvci8jVbyHcO8+hncJ5y382i1baF2zHIp1WoIO5Vp9jA9wT7mWxm614cJll76jqmokhjOQQpleATbT0PCz7YwpMyquJOJBMlMmlpKiUEktCUs0KshRM6KFGTCU6KM984LsSZkr1CxmNRIquV36WAl1EhRLiSmLCQTBkQlBM2v0LbY/4iyY8v94pZ8NFqD58Bx5manzPu7k7S6i+taucL1q038OCp2GJ9OLPtK5TcZcuPlhY9KxIkzB5hERAREQEREBERAqZ5VvbjrKlSqedWo9Q58XYt/WepLquESpUbPCiM7Y58Kgk49hPKrLNON1/FndSAJBYSuDGJq7AmBECBOYUS6UyZnCqup5wnQiADJ+U49armKtbMwgQi36gBLARJEIkSsvKiWhJKmTKkwIkk+Gh8fAyIgeo9hXvX29vX/wCtRpVD5FlBI+ZM+hOndFd1x7NoAnJpNVpHyw5Kj+FlncZz3t5WU1lYmIiQqREQEREBERAxugIIIBBBBBGQQeYImrN5+i0ktUsGUA5JtqhwB5I/h5N8+6bWiTLZ0vhncLuPL21NkXFu3DcUalFs4HGpCt+VuTexM4BSeq69BHUo6K6sMMrKGVh4EHQzq20ujrZlbJFA0GP3rdjTA9F1X6TSZ/l1Y/Kn7o8/BJdQo85ta96H150L1l8FrUg/8ykftOv3vRbtJMlOorjuCVeFj7OFA+ct5YtcefC/bpLXHgMTAzEz795ujtGn8djcetNOtA90yJ8ivbOhxUp1KZ8Kish+ok7laTKZdVxgIl9PGOAeMlKgEmW4YxArJjSWRc6AEnwAyZAqYxOfQ2RdP8FrcVPyUKjfsJ9K23M2nU+Gxrj84FL/AFkRuK3PGd117EcM7ta9GO1H+KnSo/4ldT79jin17XoguTjrbugnj1aPV/1cMjyxVvNxz7fT6E9oKaVzbEniSoK4GuOBlVdPdPrNpTp+5m46bPapUFd6z1UCHKKigA5yACT9Z3CY5Xd9ODlymWVsTERIZkREBERAREQEREBERAREQIlWQHQgEeYzEQODcbGtX+O1t3zz4qNNv3E4b7p7OPOwtPahTH7CIkrbrF/sds3/ALG2/wApZlTdTZw5WFn729I/uIiSnyv5cylsa1X4bW3X8tGmP6TmJRUfCqr6ACIkK7ZIkxIQREQEREBERAREQP/Z',
  },
  {
    id: 2,
    name: 'Men Shoes',
    image: 'https://freepngimg.com/thumb/categories/627.png',
  },
  {
    id: 3,
    name: 'Smart Phones',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 4,
    name: 'Laptops',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZh8LdwzQn-400EXbD-OLM0KDaPdSYEYQtUlQdLWiZA&usqp=CAU&ec=48665699'
  },
  {
    id: 5,
    name: 'Sunglasses',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kWMwTNqU3-NlMD0wWhQFqbtnhEwKtgIBeba2Wk_qcw&usqp=CAU&ec=48665699'
  },
  {
    id: 6,
    name: 'fragrance',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84rAOkjtT4pvnOqRFWONQyecNinAuawvXLN24gYgbQQ&usqp=CAU&ec=48665699'
  },
];

import { Avatar, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Carousal from "../carousal/Carousal";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import { reusability } from "../../redux/slices/ProductSlice";
import ElectronicProductsBanner from "../banners.js/ElectronicProductsBanner";
import { useNavigate } from "react-router-dom";
// import MensProductsBanner from "../banners.js/MensProductsBanner";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Phones = () => {

    dispatch(reusability("smartphones"))
    navigate('/categories')
  }
  const Laptops = () => {
    dispatch(reusability("laptops"))
    navigate('/categories')
  }
  const Womens = () => {
    dispatch(reusability("womens"))
    navigate('/categories')
  }
  const Shoes = () => {
    dispatch(reusability("shoes"))
    navigate('/categories')
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
      <Avatar className='hoverzoom'  onClick={Laptops} alt="laptops" src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid="sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Womens">
      <Avatar className='hoverzoom' onClick={Womens} alt="womens" src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>

      <Tooltip title="Shoes">
      <Avatar className='hoverzoom' onClick={Shoes} alt="shoes" src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" sx={{ height: '120px', width: '120px' }}/>
      </Tooltip>
    
      </Stack>
   </Box>

<Box sx={{padding: '30px'}}>
<h2 style={{marginBottom: '20px'}}>New Arrivals</h2>
<Grid container spacing={4} justifyContent="center">
{newArrivals.map((product) => (
<Grid item key={product.id}>
<img alt={product.name} src={product.image} style={{height: '250px', width: '200px'}} />
<h4 style={{margin: '10px 0'}}>{product.name}</h4>
</Grid>
))}
</Grid>
</Box>

   <WomensProductsBanner />
   <MenProductsBanner/>
   <ElectronicsBanner />
 </>)
}
    dispatch(reusability("smartphones"));
    navigate("/categories");
  };

  return (
    <>
      <Box>
        <Carousal />
      </Box>

      <Box
        sx={{
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",
          mt: "60px",
          alignItems: "center",
        }}
      >
        <Stack
          className="scroll"
          direction="row"
          spacing={10}
          sx={{
            marginX: "5px",
            mt: "20px",
            overflowX: "scroll",
            whiteSpace: "nowrap",
            padding: "20px",
            overflowY: "none",
            border: "2px solid grey",
            borderRadius: "30px 10px",
            backgroundColor: "yellow",
          }}
        >
          <Tooltip title="Phones">
            <Avatar
              className="hoverzoom"
              onClick={Phones}
              alt="phones"
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>

          <Tooltip title="Laptops">
            <Avatar
              className="hoverzoom"
              alt="laptops"
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>

          <Tooltip title="Mens">
            <Avatar
              className="hoverzoom"
              alt="laptops"
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>

          <Tooltip title="Womens">
            <Avatar
              className="hoverzoom"
              alt="laptops"
              src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>

          <Tooltip title="Shoes">
            <Avatar
              className="hoverzoom"
              alt="laptops"
              src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>
        </Stack>
      </Box>

      <Box sx={{ mt: "40px" }}>
        <ElectronicProductsBanner />
        {/* <MensProductsBanner /> */}
      </Box>
    </>
  );
}
export default Home;
