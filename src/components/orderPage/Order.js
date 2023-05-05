import React, { useState } from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Order() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "iPhone X",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyiJNZinS3zGV2NaPHN-v3l5HyTYI0ptfTwyZz0Ici6WE28O93VSlR1KVTuv0t1546fSiROiXZns&usqp=CAU0&ec=48665699",
      quantity: 1,
      price: "$899",
    },
    {
      id: 2,
      name: "Chain Pin Tassel Earrings",
      image: "https://i.dummyjson.com/data/products/80/3.png",
      quantity: 3,
      price: "$45",
    },
    {
      id: 3,
      name: "printed high quality T shirts",
      image: "https://i.dummyjson.com/data/products/53/2.jpg",
      quantity: 5,
      price: "$35",
    },
  ]);

  return (
    <div>
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", marginBottom: "50px" }}>My Order</Typography>
      {items.map((item) => (
        <Paper
          className="paper-order"
          key={item.id}
          sx={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            className="box"
            justifyContent="space-between"
            padding="8px"
            sx={{ flexGrow: 1 }}
          >
            <Box sx={{ display:"flex",flex: 1,  alignItems:"center" }}>
              <img
                className="order-img"
                src={item.image}
                alt="Product"
                style={{ maxWidth: "20%", height: "auto"}}
              />
              <Typography
                variant="subtitle1"
                component="h3"
                
                style={{ fontWeight: "bold", fontSize:"24px", color: "#333", marginLeft: "20px" }}
              >
                {item.name}
              </Typography>
            </Box>
            <Box  sx={{display:"flex", flex: 1, alignItems:"center" }}>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#f57c00",
                  fontWeight: "bold",
                  fontSize: "24x",
                  marginRight: "120px",
                }}
              >
                Price: {item.price}
              </Typography>
              <IconButton
                className="shopping-button"
                style={{
                  padding: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#ff8f00",
                  color: "white",
                  marginLeft: "150px",
                }}
              >
                <ShoppingCartIcon fontSize="small" />
                <Typography
                  variant="subtitle1"
                  style={{
                    marginLeft: 4,
                    color: "white",
                    fontWeight: "bold",
                    flex: 1,
                  }}
                >
                  Qty: {item.quantity}
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Paper>
      ))}
    </div>
  );
}

export default Order;
