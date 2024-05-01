import { Box, Grid } from "@mui/material";
import React from "react";
import Heading from "../../Component/ReusableComponent/Heading";
import Card from "../../Component/Dashboard/Card";
import shapeImg from "../.././assets/shape.png";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import ContractGraph from "../../Component/Dashboard/ContractGraph";
import SalesGraph from "../../Component/Dashboard/Salesgraph";
import TopPerformance from "../../Component/Dashboard/TopPerformance";
import { MessageList } from "../../Component/Dashboard/MessageList";
import RevenueGraph from "../../Component/Dashboard/RevenueGraph";

export const Dashboard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Heading />
      <Grid container rowSpacing={{ xs: 2, md: 4 }} columnSpacing={2} mt={2}>
        <Grid item xs={6} sm={4} md={2.4}>
          <Card
            value={228.12}
            iconLeft={<CurrencyPoundIcon fontSize="small" />}
            iconRight={<img src={shapeImg} alt="" />}
            description="Total Residual Received"
            percent={67}
            linearProgressColor={"#775DA6"}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Card
            value={1096.3}
            iconLeft={<CurrencyPoundIcon fontSize="small" />}
            iconRight={<img src={shapeImg} alt="" />}
            description="Total Residual Paid"
            linearProgressColor="#F9837C"
            percent={18}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Card
            value={1096.3}
            iconLeft={<CurrencyPoundIcon fontSize="small" />}
            iconRight={<img src={shapeImg} alt="" />}
            description="Commission Paid"
            percent={78}
            linearProgressColor={"#70B6C1"}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Card
            value={1247}
            iconRight={<img src={shapeImg} alt="" />}
            description="Total Contracts"
            linearProgressColor={"#F3CC5C"}
            percent={80}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Card
            value={300}
            iconRight={<img src={shapeImg} alt="" />}
            description="Total Employees"
            linearProgressColor={"#F3CC5C"}
            percent={80}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ContractGraph />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SalesGraph />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RevenueGraph />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "2rem" }}>
        <Grid container rowSpacing={{ xs: 2, md: 4 }} columnSpacing={2} mt={3}>
          <Grid item xs={12} md={7}>
            <TopPerformance />
          </Grid>
          <Grid item xs={12} md={5}>
            <MessageList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
