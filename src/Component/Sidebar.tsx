import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
 import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Header from "./Header";
import SideBarComponent from "./SidebarComponent";
import logo from "../assets/Logo.svg";
import { useLocation } from "react-router-dom";
import { sideBarItem } from "../utils/SidebarItems";
import { useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 200;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(13)} + 1px)`,
  [theme.breakpoints.only("xs")]: {
    width: `calc(${theme.spacing(0)} + 0px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  [theme.breakpoints.only("xs")]: {
    zIndex: theme.zIndex.drawer + 0,
  },
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  [theme.breakpoints.only("xs")]: {
    width: 0,
  },
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const [open, setOpen] = React.useState(false);
  
  const location = useLocation()

  const handleDrawerOpen = () => {
    if (isMobile) {
      setOpen(true); 
    }
  
  };

  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          borderBottom: "1px solid #DCDCDC",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0px 6px #0000001a",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
             onClick={handleDrawerOpen}
            edge="end"
            sx={{
              marginRight: 10,
              ...(open && { display: "none" }),
            }}
          >
           {isMobile && <MenuIcon   sx={{ color: "#2E2C34", fontSize: "20px", fontWeight: "700" }}/> }
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={logo} alt="" loading="lazy" style={{width: "37.5px", height: "37.5px"}} />
              <Typography
                sx={{ color: "#2E2C34", fontSize: "20px", fontWeight: "700" }}
              >
                Crystal Utility
              </Typography>
            </Box>
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <CloseIcon/>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <SideBarComponent
         items={sideBarItem} 
         location={location}
         
          />
      </Drawer>
    </Box>
  );
}
