import { Box, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { CustomBox } from "../ReusableComponent/CustomBox";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  ApexOptions  from "react-apexcharts"


const ContractGraph = () => {
  const options: ApexOptions = {
    chart: {
      type: "pie",
      height: "100%"
     
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "8px",
        textAlign: "center",
      },
    },
    noData: {
      text: "No Data Found",
      align: "center",
      verticalAlign: "center",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "black",
        fontSize: "15px",
      },
    },
    series: [44, 55, 13, 43],
    labels: ["Approved", "Review", "Pending", "Rejected"],
    colors: ["#589E58", "#775DA6", "#70B6C1", "#FFB1B7"],
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: "100%",
            width: "100%",
          },
          legend: {
            position: "right",
          },
        },
      },
    ],
    legend: {
       show: true,
      fontSize: "15px",
      // width: "100%",
      height: "100%",
      horizontalAlign: "center",
      verticalAlign: "center",
      // onItemClick: {
      //   toggleDataSeries: true,
      // },
      // onItemHover: {
      //   highlightDataSeries: true,
      // },
    },
    yaxis: {
      show: true,
      maxWidth: 160,
      minWidth: 100,
      labels: {
        show: true,
        align: "right",
      },
    },
  } ;

  return (
    <CustomBox style={{height: "100%"}}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography
          sx={{
            color: "#202020",
            fontSize: "20px",
            fontWeight: "700",
           
          }}
        >
          Contracts
        </Typography>
         <MoreVertIcon/>
      </Box>
      <Typography sx={{color: "#898989", fontSize: "13px", fontWeight: "400"}}>January</Typography>
      <Box sx={{marginTop: "3rem"}}>
        <ReactApexChart
          options={options}
          series={options.series}
          width={"100%"}
          height={"100%"}
          type="pie"
        />
      </Box>
    </CustomBox>
  );
};

export default ContractGraph;
