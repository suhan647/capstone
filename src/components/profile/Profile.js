import React, {  useState } from 'react';
import { Avatar, Menu, MenuItem, ListItemIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase/Config'
import { toast } from 'react-toastify';
import {  useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../../redux/slices/AuthSlice';
import { Box } from '@mui/system';
import LocalMallIcon from '@mui/icons-material/LocalMall';


const profileIconStyles = {
  avatar: {
    cursor: 'pointer',
    height: '40px',
    width: '40px',
    marginRight: '10px',
  },
};

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate()
  const dispatch = useDispatch()

 const authenticated = useSelector((state) => state.authentication.user)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function logoutUser  () {
    signOut(auth).then(() => {
      navigate('/')
      dispatch(isLoggedIn(false))
      toast.success("Logout successfully")
      console.log("auth", auth);
    }).catch((error) => {
      toast.error(error.message)
    });
  }

  return (
    <>
      <Avatar
        style={profileIconStyles.avatar}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.disneyplusinformer.com%2Fwp-content%2Fuploads%2F2021%2F06%2FLuca-Profile-Avatars-3.png&f=1&nofb=1&ipt=b8595dfe02d10f2116cd73f6c51a6c8136096815a45a05a809d09b9da467d70b&ipo=images"
        onClick={handleMenu}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: "10px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {!authenticated ?
            <NavLink to='/register'>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#333",
                fontWeight: "bold",
                padding: "20px",
                textDecoration: 'none !important',
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
                 
              }}
            >
              <ListItemIcon>
                <AssignmentIndIcon fontSize="small" /> 
              </ListItemIcon>
              Register
            </MenuItem>
          </NavLink>  
             :
             " "
                }
       
         {!authenticated ? 
         <NavLink to='/login' sx={{ textDecoration: 'none' }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              color: "#333",
              fontWeight: "bold",
              padding: "20px",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
              textDecoration: 'none', 
            }}
          >
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        </NavLink>
          :
          " "
          }


    {authenticated ? 
         <NavLink to='/order' sx={{ textDecoration: 'none' }}>
          <MenuItem
            onClick={handleClose}
            sx={{
              color: "#333",
              fontWeight: "bold",
              padding: "20px",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
              textDecoration: 'none', 
            }}
          >
            <ListItemIcon>
              <LocalMallIcon fontSize="small" />
            </ListItemIcon>
            My orders
          </MenuItem>
        </NavLink>
           :
          " "
          } 


        <Box  onClick={logoutUser}>
        <MenuItem
          onClick={handleClose}
         
          sx={{
            color: "#333",
            fontWeight: "bold",
            padding: "20px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
            textDecoration: 'none', 
          }}
        >
          <ListItemIcon  >
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileIcon
