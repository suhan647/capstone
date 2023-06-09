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
import { NavLink, useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import ProfileIcon from "../profile/Profile";
import { toast } from "react-toastify";
import  {searchproducts} from '../../redux/slices/SearchSlice'


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
  const authenticated = useSelector((state) => state.authentication.user)
  const dispatch = useDispatch()

  const [search, setSearch] = React.useState([])
 const navigate = useNavigate()
 
const SearchHandler = () => {
  console.log("search", search);
  dispatch(searchproducts(search))
  let s=search ?  navigate(`categories/${search}`) : ""
}

React.useEffect(() => {

},[dispatch])
  
  const cart = () => {
    if(!authenticated){
      toast.error("You need to login To view the cart")
    }
  }

  const PreferencePage = () => {
    if(!authenticated){
      toast.error("You need to login To view Your preferences")
    }
  }


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 4 }}>
        <img src={shoplogo} height="40px" alt="myntra" />
      </Typography>
      <Divider />
      <List>
        <ListItem >
          <NavLink
            to="/"
            className="link link_container"
            activeclassname ="action"
          >
            Home
          </NavLink>
        </ListItem>
        <ListItem >
        <NavLink
            to="categories/mens-shirts"
            className="link link_container"
            activeclassname ="action"
          >
            Men
            </NavLink>
        </ListItem>
        <ListItem >
        <NavLink
            to="/categories/womens-dresses"
            className="link link_container"
            activeclassname ="action"
          >
            Women
            </NavLink>
        </ListItem>


        <ListItem >
        <NavLink
            to="/preference"
            className="link link_container"
            activeclassname ="action"
          >
            Preferences
            </NavLink>
        </ListItem>


        <ListItem >
        <NavLink
            to="/categories/laptops"
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

              <Grid item xs={1.5} sx={{ marginLeft: "10px" }}>
                <Box className="link_container , dis">
                  <NavLink to="/" className="link" activeclassname ="active">
                    Home
                  </NavLink>
                </Box>
              </Grid>

              <Grid item xs={1.5}>
                <Box className="link_container , dis" >
                <NavLink
            to="/categories/mens-shirts" 
            className="link link_container"
            activeclassname ="action">
                    Men
                    </NavLink>
                </Box>
              </Grid>

              <Grid item xs={1.5}>
                <Box className="link_container , dis">
                <NavLink
            to="/categories/womens-dresses"
            className="link link_container"
            activeclassname ="action"
          >
                    Women
                    </NavLink>
                </Box>
              </Grid>

              <Grid item xs={1.5}>
                <Box className="link_container , dis" onClick={PreferencePage}>
                <NavLink
            to="/preference"
            className="link link_container"
            activeclassname ="action"
          >
                    Preference
                    </NavLink>
                </Box>
              </Grid>
            

              <Grid item xs={1.5}>
                <Box className="link_container , dis">
                <NavLink
            to="/categories/laptops"
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

              <Grid className="searchbar" item xs={2.5}>
                <span
                  style={{
                    display: "flex",
                    backgroundColor: "#f0f0f5",
                    alignItems: "center",
                    color: "grey",
                    padding: "6px",
                  }}
                >
                  <SearchIcon sx={{ paddingLeft: "2px" }} onClick={SearchHandler} />
                  <input
                    className="textbox"
                    type="text"
                    placeholder="search for products..."
                    onChange={(e) => {setSearch(e.target.value)}}
                  />
                </span>
              </Grid>
            </Grid>
          </Box>

          <Grid item xs={1.5}>

            <Box
              className="icons_container"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Box sx={{ alignItems:'center'}}>
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
                    <LocalMallOutlinedIcon onClick={cart}/>
                  </NavLink>
                </StyledBadge>
                <Box>
                  <small onClick={cart}>bag</small>
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
            display: { xs: "block", sm: "block", md:'block', lg:"none" },
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
