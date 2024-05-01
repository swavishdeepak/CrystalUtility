import React from "react";
import { CustomBox } from "../ReusableComponent/CustomBox";
import { BarChart, CartesianGrid, Bar, XAxis } from "recharts";
import { Box, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data1 = [
  {
    name: "Target",
    uv: 9000,
    pv: 6000,
    pt: 5000,
    pw: 8000,
  },
  {
    name: "Last Week",
    uv: 9000,
    pv: 6000,
    pt: 5000,
    pw: 8000,
  },
  {
    name: "Last Month",
    uv: 9000,
    pv: 6000,
    pt: 5000,
    pw: 8000,
  },
];

const Salesgraph = () => {
  return (
    <CustomBox style={{height: "100%"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#202020",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Sales
        </Typography>
        <MoreVertIcon />
      </Box>

      <BarChart
        width={300}
        height={210}
        data={data1}
        margin={{
          top: 5,
          bottom: 20,
        }}
      >
        <XAxis
          dataKey="name"
          tick={{
            fill: "#202020",
            fontSize: "11px",
            fontWeight: "400",
          }}
        ></XAxis>
        <CartesianGrid strokeDasharray="" style={{ display: "none" }} />
        <Bar dataKey="uv" fill="rgba(119, 93, 166, 1)" />
        <Bar dataKey="pv" fill="rgba(119, 93, 166, 1)" />
        <Bar dataKey="pt" fill="rgba(119, 93, 166, 1)" />
        <Bar dataKey="pw" fill="rgba(119, 93, 166, 1)" />
      </BarChart>
    </CustomBox>
  );
};

export default Salesgraph;
