import React, { useState } from "react";
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Notification from "./Notification";

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(true)
  }

  const handleClose = () =>{
      setOpen(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        flexGrow: 1,
        width: "100%"
      }}
    >
      
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, alignItems: "center" }}>
        <TextField
          // onChange={handleSearchChange}
          //variant="filled"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton size="small">
                  <SearchIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              borderRadius: "2rem",
              backgroundColor: "#F9F9F9",
              borderBottom: "none !important",
            },
            inputProps: {
              style: {
                height: "1.5rem",
                padding: "4px",
              },
            },
          }}
          sx={{
            width: "100%",
            "@media(max-width: 600px)": {
              width: "70%",
            },
          }}
        />
       <Badge  variant="dot" 
        sx={{
          '& .MuiBadge-dot': {
              backgroundColor: "red",
              width: 10,
              height: 10,
              borderRadius: "50%",
          },
          '& .MuiBadge-anchorOriginTopRightCircle': {
              top: 0,
              right: 0,
          },
          fontSize: "10px",
      }}
       >
       <CircleNotificationsIcon  onClick={handleOpen} sx={{color: "#2E2C34", cursor: "pointer"}}/>
       </Badge>
       <Notification handleClose={handleClose}  open={open}/>
       <Typography sx={{color: "#2E2C34", fontSize: "17px", fontWeight: "500"}}>Deepak</Typography>
       <AccountCircleIcon  sx={{color: "#2E2C34"}}/>
      </Box>
    </Box>
  );
};

export default Header;
