import React from "react";

import { AreaChart, Area } from "recharts";
import { CustomBox } from "../ReusableComponent/CustomBox";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { Box, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = [
  {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page I",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page j",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const RevenueGraph = () => {
  return (
    <CustomBox  style={{height: "100%"}}>
      {" "}
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
          Revenue
        </Typography>
        <MoreVertIcon />
      </Box>
      <Box sx={{display: "flex", gap: "2px", alignItems: "center"}}>
        <CurrencyPoundIcon sx={{width: "27px", height: "27"}}/>
        <Typography sx={{color: "#202020", fontSize: "25px", fontWeight: "700"}}>2432422</Typography>
      </Box>
      <Typography sx={{color: "#898989", fontSize: "13px", fontWeight: "400"}}>January 2024</Typography>
      <AreaChart
        width={300}
        height={210}
        data={data}
        margin={{
          top: 5,
          bottom: 20,
        }}
      >
        <Area
          type="bump"
          dataKey="uv"
          stroke={"#589E58"}
          fill="rgba(225, 243, 255, 1)"
        />
      </AreaChart>
    </CustomBox>
  );
};
export default RevenueGraph;
