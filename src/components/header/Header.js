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
import { useDispatch, useSelector } from "react-redux";
import { reusability } from "../../redux/slices/ProductSlice";
import ProfileIcon from "../profile/Profile";

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
  const dispatch = useDispatch()

  const Mens = () => {
   dispatch(reusability("mens-shirts"))
  }

  const Womens = () => {
    dispatch(reusability("womens-dresses"))
   } 

   const Electronics = () => {
    dispatch(reusability("laptops"))
   }

   const Home = () => {
    dispatch(reusability())
   }

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
        <ListItem  onClick={Home}>
          <NavLink
            to="/"
            className="link link_container"
            activeclassname ="action"
          >
            Home
          </NavLink>
        </ListItem>
        <ListItem onClick={Mens}>
        <NavLink
            to="categories"
            className="link link_container"
            activeclassname ="action"
          >
            Men
            </NavLink>
        </ListItem>
        <ListItem onClick={Womens}>
        <NavLink
            to="/categories"
            className="link link_container"
            activeclassname ="action"
          >
            Women
            </NavLink>
        </ListItem>
        <ListItem onClick={Electronics}>
        <NavLink
            to="/categories"
            className="link link_container"
            activeclassname ="action"
          >
            Electronics
            </NavLink>
            <sup style={{ color: "red", fontSize: "10px" }}>
              <b>New</b>
            </sup>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
 
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
            className="menuicon"
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
                <Box className="link_container , dis" onClick={Home}>
                  <NavLink to="/" className="link" activeclassname ="active">
                    Home
                  </NavLink>
                </Box>
              </Grid>

              <Grid item xs={1}>
                <Box className="link_container , dis" onClick={Mens}>
                <NavLink
            to="/categories" 
            className="link link_container"
            activeclassname ="action">
                    Men
                    </NavLink>
                </Box>
              </Grid>

              <Grid item xs={2}>
                <Box className="link_container , dis" onClick={Womens}>
                <NavLink
            to="/categories"
            className="link link_container"
            activeclassname ="action"
          >
                    Women
                    </NavLink>
                </Box>
              </Grid>

              <Grid item xs={3}>
                <Box className="link_container , dis" onClick={Electronics}>
                <NavLink
            to="/categories"
            className="link link_container"
            activeclassname ="action"
          >
                    Electronics
                    </NavLink>
                    <sup style={{ color: "red", fontSize: "10px" }}>
                      <b>New</b>
                    </sup>
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
              <Box sx={{display:"flex", alignItems:'center'}}>
              <ProfileIcon/>
              </Box>

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
                    <FavoriteBorderOutlinedIcon />
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
                  mr: "55%",
                }}
              >
                <StyledBadge
                  badgeContent={cartCount.length}
                  color="secondary"
                  sx={{}}
                >
                  <NavLink to="/cart" className="link">
                    <LocalMallOutlinedIcon />
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
            keepMounted: true, 
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
