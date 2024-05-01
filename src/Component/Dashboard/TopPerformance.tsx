import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import profileImg from "../../assets/profileImg.png"
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { CustomBox } from "../ReusableComponent/CustomBox";
import CircularProgress from "@mui/material/CircularProgress";


interface Employee {
  serialNo: string;
  image: string;
  name: string;
  message: string;
  sale: string;
  company: string;
  successRate: string;
}

interface TopPerformanceProps {}
const TopPerformance: React.FC<TopPerformanceProps> = () => {
 

  const performanceData: Employee[] = [
    {
      serialNo: "1",
      image: profileImg,
      name: "Deepak",
      
      message: "236345",
      sale: "39",
      company: "company",
      successRate: "96",
    },
    {
      serialNo: "2",
      image: profileImg,
      name: "Deepak",
    
      message: "236345",
      sale: "39",
      company: "company",
      successRate: "50",
    },
    {
      serialNo: "3",
      image: profileImg,
      name: "Deepak",
    
      message: "236345",
      sale: "39",
      company: "company",
      successRate: "70",
    },
    {
      serialNo: "4",
      image: profileImg,
      name: "Deepak",
    
      message: "236345",
      sale: "39",
      company: "company",
      successRate: "90",
    },
    {
      serialNo: "5",
      image: profileImg,
      name: "Deepak",
      
      message: "236345",
      sale: "39",
      company: "company",
      successRate: "90",
    },
  ];

  return (
    <CustomBox style={{height: "100%"}}>
      <Box sx={{ display: "flex", justifyContent: "space-between",alignItems: "center" }}>
        <Box>
          <Typography
            sx={{ color: "#202020", fontWeight: "600",fontSize: { xs: "14px", md: "18px" }, }}
          >
            Top Performance
          </Typography>
          <Typography
            sx={{ color: "#898989", fontWeight: "400", fontSize: "10px" }}
          >
            January
          </Typography>
        </Box>
        
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#202020",
          width: "100%",
          marginTop: "1.2rem",

        }}
      >
        <Box sx={{ display: "flex", gap: {xs:2, md:4}, width: "40%" }}>
          <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500" }}>
            No
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500" }}>
            Employees Name
          </Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500", width: "20%" }}>
          Sale
        </Typography>
        <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500", width: "25%" }}>
          Company/Individual
        </Typography>
        <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500", width: "15%" }}>
          Success Rate
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "8px", color: "#DCDCDC" }} />
      {performanceData.length > 0 &&
        performanceData.map((item) => {
          return (
            <Box
              key={item.serialNo}
              sx={{
                display: "flex",
                marginTop: "10px",
                width: "100%",
                backgroundColor: "#F9F9F9",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", width: "25%", gap: {xs:2, md:4} }}>
                <Typography
                  sx={{
                    color: "#202020",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  {item.serialNo}
                </Typography>
                <Box sx={{ display: "flex", gap: 0 }}>
                  <ListItemAvatar >
                    <Avatar>
                      <img src={item.image} alt="" loading="lazy"  />
                    </Avatar>
                  </ListItemAvatar>
                  <Box>
                    <Typography
                      sx={{
                        color: "#202020",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                       <CurrencyPoundIcon  sx={{width: "12px", height: "12px"}}/>
                      <Typography
                        sx={{
                          color: "#898989",
                          fontWeight: "400",
                          fontSize: "10px",
                        }}
                      >
                        {item.message}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "30%",
                  color: "#898989",
                  fontWeight: "400",
                  fontSize: "10px",
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "center",
                }}
              >
                {item.sale}
              </Box>
              <Box
                sx={{ color: "#898989", fontWeight: "400", fontSize: "10px", marginTop: "10px", width: "20%" }}
              >
                {item.company}
              </Box>
              <Box sx={{display:"flex", gap:1, marginTop: "10px", width: "15%"}}>
                <CircularProgress
                  style={{width: "14px", height: "14px"}}
                  variant="determinate"
                  value={parseInt(item.successRate)}
                />
                <Typography
                  sx={{ color: "#898989", fontWeight: "400", fontSize: "10px" }}
                >
                  {/* {item?.successRate} */}
                  {`${Math.round(parseInt(item.successRate))}%`}
                </Typography>
              </Box>
            </Box>
          );
        })}
    </CustomBox>
  );
};

export default TopPerformance;
