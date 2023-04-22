import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import shoplogo from "../images/shoplogo.png";

import "../../App.css";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header(props) {
  const cartCount = useSelector((state) => state.CartSlice.items);
  const wishcount = useSelector((state) => state.wishListSlice.list);

  // console.log('cartcount', cartCount.length);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={shoplogo} height="40px" alt="myntra" />
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <NavLink
            to="/"
            className="link link_container"
            activeClassName="action"
          >
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/mensproducts" className="link link_container">
            Men
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/womensproducts" className="link link_container">
            Women
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/electronicproducts" className="link link_container">
            Electronics
            <sup style={{ color: "red", fontSize: "10px" }}>
              <b>New</b>
            </sup>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        sx={{
          color: "black",
          backgroundColor: "#C0C9D1;",
          marginBottom: "100px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, marginRight: "220px" }}
            classname="menuicon"
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            className="navflex"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              mt: "10px",
              marginLeft: "30px",
              marginBottom: "10px",
            }}
          >
            <Grid container sx={{ alignItems: "center", cursor: "pointer" }}>
              <Grid item xs={1}>
                <img src={shoplogo} height="70px" alt="myntra" />
              </Grid>

              <Grid item xs={1} sx={{ marginLeft: "10px" }}>
                <Box className="link_container , dis">
                  <NavLink to="/" className="link" activeClassName="active">
                    Home
                  </NavLink>
                </Box>
              </Grid>

              <Grid item xs={1}>
                <Box className="link_container , dis">
                  <NavLink to="/mensproducts" className="link">
                    Men
                  </NavLink>
                </Box>
              </Grid>

              <Grid item xs={2}>
                <Box className="link_container , dis">
                  <NavLink to="/womensproducts" className="link">
                    Women
                  </NavLink>
                </Box>
              </Grid>

              <Grid item xs={3}>
                <Box className="link_container , dis">
                  <NavLink to="/electronicproducts" className="link">
                    Electronics
                    <sup style={{ color: "red", fontSize: "10px" }}>
                      <b>New</b>
                    </sup>
                  </NavLink>
                </Box>
              </Grid>

              <Grid className="searchbar" item xs={3}>
                <span
                  style={{
                    display: "flex",
                    backgroundColor: "#f0f0f5",
                    alignItems: "center",
                    color: "grey",
                    padding: "6px",
                  }}
                >
                  <SearchIcon sx={{ paddingLeft: "2px" }} />
                  <input
                    className="textbox"
                    type="text"
                    placeholder="search for products..."
                  />
                </span>
              </Grid>
            </Grid>
          </Box>

          <Grid item xs={2}>
            <Box
              className="icons_container"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Box
                className="icons link_container"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StyledBadge badgeContent={wishcount.length} color="secondary">
                  <NavLink to="/wishlist" className="link">
                    {" "}
                    <FavoriteBorderOutlinedIcon />{" "}
                  </NavLink>
                </StyledBadge>

                <Box>
                  <small>wishList</small>
                </Box>
              </Box>

              <Box
                className="icons link  link_container"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mr: "22%",
                }}
              >
                <StyledBadge
                  badgeContent={cartCount.length}
                  color="secondary"
                  sx={{}}
                >
                  <NavLink to="/cart" className="link">
                    {" "}
                    <LocalMallOutlinedIcon />{" "}
                  </NavLink>
                </StyledBadge>
                <Box>
                  <small>bag</small>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
