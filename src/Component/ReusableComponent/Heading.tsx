import {  Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Heading = () => {
  const location = useLocation();
  const path = location.pathname;
  const formattedPath = path.charAt(1).toUpperCase() + path.slice(2);
  return (
    <Typography sx={{ color: "#069FFF", fontSize: "19px", fontWeight: "600" }}>
      {formattedPath}
    </Typography>
  );
};

export default Heading;
