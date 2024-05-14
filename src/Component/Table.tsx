import { Box, Divider } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { CustomBox } from "../Component/ReusableComponent/CustomBox";


interface Column {
  field: string;
  headerName: string;
}

interface Row {
  id: string | number;
  [key: string]: any;
}

interface BasicTableProps {
  columns?: Column[];
  rows?: Row[];
  children?: React.ReactNode;
  getRowClassName?: React.CSSProperties;
  pageSize?: number;
  sx?: object;
  title?: string;
  exportHide?: boolean;
  customButtons?: React.ReactNode;
  getRowId?: (row: Row) => string | number;
  includeSlots?: boolean;
  includesPagination?: boolean;
  includeSearch?: boolean;
  showDatePicker?: boolean
}

const Table: React.FC<BasicTableProps> = ({
  columns = [],
  rows = [],
  pageSize,
  children,
  sx,
  title,
  exportHide,
  customButtons,
  showDatePicker,
  getRowId,
  includeSlots = true,
  includesPagination = true,
  includeSearch = true,
}) => {
  return (
    <CustomBox style={{ marginTop: "1rem" }}>
      {children}
      <DataGrid
        // checkboxSelection
        autoHeight
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        sx={{
          border: "none",
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#202020",
            fontWeight: "600",
            fontSize: "15px",
          },
          "& .even": {
            bgcolor: '#EFF3F6'
          },
          "& .odd": {
            bgcolor: '#fff'
          },
          ...sx,
        }}
        disableColumnMenu
        disableRowSelectionOnClick
        initialState={
          includesPagination
            ? {
                pagination: {
                  paginationModel: {
                    pageSize: pageSize || 5,
                  },
                },
              }
            : {}
        }
        pageSizeOptions={[pageSize || 5]}
        slotProps={{
          baseButton: {
            sx: {},
          },
          toolbar: {
            title,
            customButtons,
            includeSearch,
            exportHide,
            showDatePicker
          },
        }}
        slots={includeSlots ? { toolbar: CustomToolbar } : {}}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </CustomBox>
  );
};

const CustomToolbar: React.FC<{ title?: string; includeSearch?: boolean }> = ({
  title,
}) => {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "2rem",
        "@media(max-width: 600px)":{
          justifyContent: "center",
          gap: 3
        }
      }}
    >
      <Box>
        {title && (
          <>
            <Box
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "21px" },
              }}
            >
              {title}
            </Box>
            <Divider sx={{ border: "1px solid #77D177" }} />
          </>
        )}
      </Box>

     
    </GridToolbarContainer>
  );
};

export default Table;
