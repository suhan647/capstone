import React from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Order() {
  const orders = useSelector((state) => state.orders.orderlist);

  console.log(orders);

  return (
    <div>
      {orders.length > 0 ? (
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            marginTop: "100px",
          }}
        >
          My Order
        </Typography>
      ) : (
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          You Have not ordered anything yet
        </Typography>
      )}
      {orders.map((item) => (
        <Paper
          className="paper-order"
          key={item.id}
          sx={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            className="box"
            justifyContent="space-between"
            padding="3px"
            sx={{
              flexGrow: 1,
              width: "100%",
              maxWidth: "800px",
              padding: "26px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flex: "1 1 100%",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <img
                className="order-img"
                src={item.thumbnail}
                alt="Product"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: "1 1 100%",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="h3"
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "#333",
                  marginBottom: "16px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: "#f57c00",
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginBottom: "16px",
                }}
              >
                Price: ${item.price}
              </Typography>
              <IconButton
                className="shopping-button"
                style={{
                  padding: "6px",
                  color: "green",
                }}
                onClick={() => alert("Order Placed")}
              >
                <ShoppingCartIcon fontSize="small" />
                <Typography
                  variant="subtitle1"
                  style={{
                    marginLeft: 4,
                    fontWeight: "bold",
                    flex: 1,
                    color: "green",
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
