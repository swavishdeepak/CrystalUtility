import React from "react";
import { Outlet } from "react-router-dom";
import { Box} from "@mui/material";
import Sidebar from "../Component/Sidebar"

export const MainLayout = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: "2.5rem",
        padding: "3rem 1.5rem",
        display: "flex",
        "@media(max-width: 600px)": {
          p: "2.5rem  0.8rem",
        },
      }}
    >
      <Sidebar/>
      <Outlet />
    </Box>
  );
};
