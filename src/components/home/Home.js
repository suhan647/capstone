import { Avatar, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Carousal from "../carousal/Carousal";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import { reusability } from "../../redux/slices/ProductSlice";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Grid } from "@mui/material";
import {
  WomensProductsBanner,
  MenProductsBanner,
  ElectronicsBanner,
} from "../banners/banners.jsx";

const popularBrands = [
  {
    id: 1,
    name: "Adidas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UaO3ygvFec-eegY-9KqbZzjl-meGqGGNO_fVJm9jCg&s",
  },
  {
    id: 2,
    name: "Nike",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 3,
    name: "Puma",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 4,
    name: "reebok",
    image:
      "data:image/png;base64,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",
  },
];

const newArrivals = [
  {
    id: 1,
    name: "Women T-Shirt",
    image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMq9YsVK0d7G2tJ1DQ1j61AqPjwa0RS37VLaEkhZSinw&usqp=CAU&ec=48665699",

      },
  {
    id: 2,
    name: "Men Shoes",
    image: "https://img.freepik.com/premium-photo/men-fashion-leather-derby-shoes-isolated-yellow_107612-405.jpg?size=626&ext=jpg&ga=GA1.1.91273752.1682885983&semt=ais",
  },
  {
    id: 3,
    name: "Smart Phones",
    image:
    "https://4.img-dpreview.com/files/p/E~C102x0S800x800T1200x1200~articles/0591932989/_BR14386.jpeg",
  },
  {
    id: 4,
    name: "Laptops",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3nOAV_Zi7li59YTioKAek7ZF5FxpyukUcM5I5g1Pxw&usqp=CAU&ec=48665699",
  },
  {
    id: 5,
    name: "Sunglasses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kWMwTNqU3-NlMD0wWhQFqbtnhEwKtgIBeba2Wk_qcw&usqp=CAU&ec=48665699",
  },
  {
    id: 6,
    name: "fragrance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84rAOkjtT4pvnOqRFWONQyecNinAuawvXLN24gYgbQQ&usqp=CAU&ec=48665699",
  },
];

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Phones = () => {
    dispatch(reusability("smartphones"));
    navigate("/categories");
  };
  const Laptops = () => {
    dispatch(reusability("laptops"));
    navigate("/categories");
  };
  const Mens = () => {
    dispatch(reusability("mens"));
    navigate("/categories");
  };
  const Womens = () => {
    dispatch(reusability("womens"));
    navigate("/categories");
  };
  const Shoes = () => {
    dispatch(reusability("shoes"));
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
              onClick={Laptops}
              alt="laptops"
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>
          <Tooltip title="Mens">
            <Avatar
              className="hoverzoom"
              onClick={Mens}
              alt="mens-shoes"
              src="https://img.freepik.com/free-photo/alternative-man-tying-boots-shoelaces-floor_53876-101248.jpg?size=626&ext=jpg&ga=GA1.1.91273752.1682885983&semt=ais"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>

          <Tooltip title="Womens">
            <Avatar
              className="hoverzoom"
              onClick={Womens}
              alt="womens"
              src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>

          <Tooltip title="Shoes">
            <Avatar
              className="hoverzoom"
              onClick={Shoes}
              alt="shoes"
              src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              sx={{ height: "120px", width: "120px" }}
            />
          </Tooltip>
        </Stack>
      </Box>

      <Box sx={{ padding: "30px" }}>
        <h2 style={{ marginBottom: "20px" }}>Popular Brands</h2>
        <Grid container spacing={4} justifyContent="center">
          {popularBrands.map((brand) => (
            <Grid item key={brand.id}>
              <Avatar
                alt={brand.name}
                src={brand.image}
                sx={{ height: "150px", width: "200px" }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ padding: "30px" }}>
        <h2 style={{ marginBottom: "20px" }}>New Arrivals</h2>
        <Grid container spacing={4} justifyContent="center">
          {newArrivals.map((product) => (
            <Grid item key={product.id}>
              <img
                alt={product.name}
                src={product.image}
                style={{ height: "250px", width: "200px" }}
              />
              <h4 style={{ margin: "10px 0" }}>{product.name}</h4>
            </Grid>
          ))}
        </Grid>
      </Box>

      <WomensProductsBanner />
      <MenProductsBanner />
      <ElectronicsBanner />
    </>
  );
}
export default Home;
