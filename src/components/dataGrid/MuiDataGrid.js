import React from 'react';
import Pagination from '@mui/material/Pagination';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '../common/Button/Button';
import Icons from '../common/Icons/Icons';
import { useNavigate } from "react-router-dom"
import {
   DataGrid,
   gridPageCountSelector,
   gridPageSelector,
   useGridApiContext,
   useGridSelector,
} from '@mui/x-data-grid';
import styles from "./styles/DataGrid.module.scss";

function CustomPagination() {
   const apiRef = useGridApiContext();
   const page = useGridSelector(apiRef, gridPageSelector);
   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

   return (
      <Pagination
         color="primary"
         count={pageCount}
         page={page + 1}
         sx={{ marginTop: "1.5rem" }}
         onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
   );
}
const MuiDataGrid = (
   {
      rowHeight = 49,
      page = 10,
      error,
      loading,
      rows = [],
      columns,
      shadow = "enable",
   }
) => {
   const navigate = useNavigate()
   const editHandler = (id) => {
      navigate(`/product/edit/${id}`)
   }
   // console.log(rows, "ROWS")
   const actionColumn = [
      {
         field: "action", headerName: "Actions", headerAlign: "center", sortable: false, filterable: false, align: "center", width: 280, renderCell: (row) => {
            return (
               <div className={"data-grid-flex-col"}>
                  <Button variant={"icon-btn-normal"}>
                     <Icons name={"viewOn"} color={"#7d879c"} />
                  </Button>
                  <Button variant={"icon-btn-normal"} onClick={() => { editHandler(row?.id) }}>
                     <Icons name={"edit"} color={"#2c74b3"} />
                  </Button>
                  <Button variant={"icon-btn-normal"}>
                     <Icons name={"delete"} color={"#cc2121"} />
                  </Button>
               </div>
            )
         }
      },
   ]
   return (
      <div className={`${styles.data_grid_wrapper} ${styles[`shadow-${shadow}`]}`}>
         <div className={styles.loading_line}>
            {loading && <LinearProgress />}
         </div>
         <DataGrid
            rowHeight={rowHeight}
            rows={rows}
            getRowId={(row) => row._id || row.id}
            columns={columns.concat(actionColumn)}
            error={error}
            loading={loading}
            sx={{
               '.MuiDataGrid-columnSeparator': {
                  display: 'none',

               },
               '&.MuiDataGrid-root': {
                  border: 'none',
               },
               "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "rgb(253, 253, 254);",
                  color: "#2b3445",
                  fontSize: 16
               },
               '&.MuiDataGrid-footerContainer': {
                  width: "2rem"
               },
               '.MuiDataGrid-iconButtonContainer': {
                  visibility: 'visible',
               },
               '.MuiDataGrid-sortIcon': {
                  opacity: 'inherit !important',
               },
            }}
            pageSize={page}
            rowsPerPageOptions={[page]}
            components={{
               Pagination: CustomPagination,
            }}
            // hideFooter={true}
            hideFooterSelectedRowCount
            autoHeight
         />
      </div>

   )
}

export default MuiDataGrid;