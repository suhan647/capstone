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
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Men Shoes",
    image: "https://freepngimg.com/thumb/categories/627.png",
  },
  {
    id: 3,
    name: "Smart Phones",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    name: "Laptops",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZh8LdwzQn-400EXbD-OLM0KDaPdSYEYQtUlQdLWiZA&usqp=CAU&ec=48665699",
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
              src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid="
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
