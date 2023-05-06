import React, { useState } from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Order() {
  const orders = useSelector((state) => state.orders.orderlist);

  console.log(orders);

  return (
    <div>
      {orders ? <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", marginBottom: "10px" , marginTop: "100px",}}>My Order</Typography>  : <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", marginBottom: "10px" , marginTop: "100px",}}>You Have not ordered anything yet </Typography>}
      {/* <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", marginBottom: "10px" , marginTop: "100px",}}>My Order</Typography> */}
      {orders.map((item) => (
        <Paper
          className="paper-order"
          key={item.id}
          sx={{
            marginTop: "40px",
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
            <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
              <img
                className="order-img"
                src={item.thumbnail}
                alt="Product"
                style={{ maxWidth: "20%", height: "auto" }}
              />
              <Typography
                variant="subtitle1"
                component="h3"
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "#333",
                  marginLeft: "20px",
                }}
              >
                {item.title}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#f57c00",
                  fontWeight: "bold",
                  fontSize: "24x",
                  marginRight: "120px",
                }}
              >
                Price: ${item.price}
              </Typography>
              <IconButton
                className="shopping-button"
                style={{
                  padding: "6px",
                  // borderRadius: "50%",
                  // backgroundColor: "#ff8f00",

                  color: "green",
                  marginLeft: "150px",
                }}
                onClick={() => alert("Order Placed")}
              >
                <ShoppingCartIcon fontSize="small" />
                <Typography
                  variant="subtitle1"
                  style={{
                    marginLeft: 4,
                    color: "white",
                    fontWeight: "bold",
                    flex: 1,
                    color:'green'
                  }}
                >
                  Order Placed
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
