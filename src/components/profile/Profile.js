import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, ListItemIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem
          onClick={handleClose}
          style={{
            color: "#333",
            fontWeight: "bold",
            padding: "20px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{
            color: "#333",
            fontWeight: "bold",
            padding: "20px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileIcon;
