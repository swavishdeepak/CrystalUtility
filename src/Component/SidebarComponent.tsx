import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';






interface SidebarItem {
  text: string;
  link: string;
  icon: React.ElementType;
  subItems?: SidebarItem[];
}

interface SidebarListProps {
  items: SidebarItem[];
  location: { pathname: string };
}

const SideBarComponent: React.FC<SidebarListProps> = ({ items, location}) => {
  
  return (
    <List  sx={{backgroundColor: "#40B6FD", height: "100%"}}>
     {items?.map((item, index) => (
      <Link key={index} to={item?.link}  style={{ display: "block", textDecoration: "none" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent:  "center",
            px: 2.5,
            display: "flex",
            flexDirection: "column",
            ":hover": { backgroundColor: "#3BA8E9" },
            backgroundColor: location.pathname === item.link ? "#3BA8E9" : "",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
            }}
          >
           <item.icon
            sx={{
              color: location.pathname === item.link ? "#ffffff" : "#ffffff",
            }}
           />
          </ListItemIcon>
          <ListItemText primary={item?.text}
            style={{
              fontSize: "10px",
              fontWeight: "500",
              color: location.pathname === item.link ? "#ffffff" : "#ffffff",
            }} />
        </ListItemButton>
      </Link>
    ))}
  </List>
  );
};

export default SideBarComponent;
