import { Box, Menu, MenuItem, Typography} from "@mui/material";
import React, { useState } from "react";
import Heading from "../../Component/ReusableComponent/Heading";
import Table from "../../Component/Table";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Column {
  field: string;
  headerName: string;
  minWidth: number;
  flex: number;
  sortable?: boolean;
  renderCell?: (params: any) => React.ReactNode;
}

interface Row {
  id: number
  user_name: string | null;
  ID_No: string | null;
  email: string;
  bank: string;
  added_By: string;
  status: string;
  action: string;
}

const AllUser = () => {

  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 50,
      flex: 1,
    },
   
    {
      field: "user_name",
      headerName: "User Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "ID_No",
      headerName: "ID No.",
      minWidth: 150,
      flex: 1,

    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "bank",
      headerName: "Bank",
      minWidth: 150,
      flex: 1,

    },
    {
      field: "added_By",
      headerName: "Added By",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params: any) => <More {...params} />,
      minWidth: 50,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      user_name: "Employees 01",
      ID_No: "645",
      email: "sam@xyz.com",
      bank: "HSBC",
      added_By: "Admin_01",
      status: "PENDING",
      action: "View",
    },
    {
      id: 2,
      user_name: "Employees 01",
      ID_No: "645",
      email: "sam@xyz.com",
      bank: "HSBC",
      added_By: "Admin_01",
      status: "PENDING",
      action: "View",
    },
    {
      id: 3,
      user_name: "Employees 01",
      ID_No: "645",
      email: "sam@xyz.com",
      bank: "HSBC",
      added_By: "Admin_01",
      status: "PENDING",
      action: "View",
    },
    {
      id: 4,
      user_name: "Employees 01",
      ID_No: "645",
      email: "sam@xyz.com",
      bank: "HSBC",
      added_By: "Admin_01",
      status: "PENDING",
      action: "View",
    },
    {
      id: 5,
      user_name: "Employees 01",
      ID_No: "645",
      email: "sam@xyz.com",
      bank: "HSBC",
      added_By: "Admin_01",
      status: "PENDING",
      action: "View",
    },
   
   
  
  ];

  
  return (
    <Box sx={{ width: "100%",  }}>
       <Heading/>
       <Table
        columns={columns}
        rows={rows}
        title="All Employees"
        getRowId={(row: any) => row.id}
       
      />
    
    </Box>
  );
};


  const More = (params: any) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDelete, setOpenDelete] = useState(false);
  
  
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleDeleteOpen = () => {
      setOpenDelete(true);
    };
  
   
  
    return (
      <>
        <MoreVert sx={{ cursor: "pointer" }} onClick={handleClick} />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link
            to={
              params && params.row && params.row.id
                ? `/viewAgents/viewDetails/${params.row.id}`
                : ""
            }
            style={{
              textDecoration: "none",
              color: "#000000",
              fontWeight: "400",
              fontSize: "12px",
            }}
          >
            <MenuItem>View Details</MenuItem>
          </Link>
          <Link
            to={`/addAgent?type=agent&id=${params.row && params.row.id}`}
            style={{
              textDecoration: "none",
              color: "#000000",
              fontWeight: "400",
              fontSize: "12px",
            }}
          >
            <MenuItem>Edit</MenuItem>
          </Link>
          <MenuItem onClick={handleDeleteOpen}>Delete</MenuItem>
           
        </Menu>
        
       
      </>
    );
  };

export default AllUser;
