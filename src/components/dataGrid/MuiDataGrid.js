import React, { useState, useContext } from 'react';
import { Pagination, LinearProgress } from '@mui/material';
import Button from '../common/Button/Button';
import Icons from '../common/Icons/Icons';
import { useNavigate } from "react-router-dom";
import { useHttpHook } from "../../hooks/useHttpHook";
import Typography from "../common/Typography/Typography";
import toast from 'react-hot-toast';
import { Context } from "../../store/Context";
import { selectedSubCategory, updateState, getSelectedOrder } from "../../store/Action";
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
      editUrl,
      deleteUrl,
      isOrder = false,
   }
) => {
   const [selectedProduct, setSelectedProduct] = useState(null)
   const navigate = useNavigate()
   const { sendRequest, loading: isLoading } = useHttpHook();
   const { dispatch } = useContext(Context);

   //View Handler 
   const viewHandler = (rowData) => {
      dispatch(getSelectedOrder(rowData?.row))
      console.log(rowData?.row, "ROW");
      navigate(`/order-details/${rowData?.id}`)

   }

   //Edit Handler
   const editHandler = (row) => {
      navigate(`${editUrl}/${row?.id}`)
      dispatch(selectedSubCategory({
         title: row?.row?.name,
         imageId: row?.row?.imageId,
         image: row?.row?.image,
         category: row?.row?.category?._id
      }))
   }
   //Get delete response data 
   const getResponseData = (data) => {
      if (data?.success) {
         dispatch(updateState(0))
         toast.success(deleteUrl === "/product/delete" ? "Product Deleted" : "Collection Deleted");

      };
   };
   //Delete Handler
   const deleteProductHandler = () => {
      if (selectedProduct) {
         sendRequest(
            {
               url: `${deleteUrl}/${selectedProduct?.id}`,
               method: "DELETE",
               postData: {
                  imageId: selectedProduct?.imageId
               }
            },
            getResponseData
         );
      };
      setSelectedProduct(null)
   };

   const actionColumn = [
      {
         field: "action", headerName: "Actions", headerAlign: "center", sortable: false, filterable: false, align: "center", width: isOrder ? 100 : 220, renderCell: (row) => {
            return (
               <div className={"data-grid-flex-col"}>
                  {isOrder ?
                     <Button variant={"icon-btn-normal"}
                        onClick={() => { viewHandler(row) }}>
                        <Icons name={"viewOn"} color={"#7d879c"} />
                     </Button>
                     :
                     <>
                        <Button variant={"icon-btn-normal"}>
                           <Icons name={"viewOn"} color={"#7d879c"} />
                        </Button>
                        <Button
                           variant={"icon-btn-normal"}
                           onClick={() => { editHandler(row) }}>
                           <Icons name={"edit"} color={"#2c74b3"} />
                        </Button>
                        <Button
                           variant={"icon-btn-normal"}
                           onClick={() => { setSelectedProduct({ id: row?.id, imageId: row?.row?.imageId }) }}>
                           <Icons name={"delete"} color={"#cc2121"} />
                        </Button>
                     </>
                  }
               </div>
            )
         }
      },
   ]
   return (
      <div className={`${styles.data_grid_wrapper} ${styles[`shadow-${shadow}`]}`}>
         {selectedProduct &&
            <div className={styles.confirm_popup_wrapper}>
               <div className={styles.confirm_inner_wrapper}>
                  <Typography variant={"small"} color={"red"}>
                     <Icons size={"2rem"} name={"warning"} />
                     Are you sure you want to delete this Product?
                  </Typography>
                  <div className={styles.warning_btns}>
                     <Button
                        variant={"blue_btn"}
                        onClick={deleteProductHandler}>
                        Yes
                     </Button>
                     <Button
                        variant={"red-border"}
                        onClick={() => { setSelectedProduct(null) }}>
                        Cancel
                     </Button>
                  </div>
               </div>
            </div>
         }
         <div className={styles.loading_line}>
            {loading || isLoading ? <LinearProgress /> : null}
         </div>
         <DataGrid
            rowHeight={rowHeight}
            rows={rows}
            getRowId={(row) => row._id || row.id}
            columns={columns.concat(actionColumn)}
            error={error}
            loading={loading}
            sx={{
               "MuiDataGrid-row": {
                  maxWidth: 1020
               },
               '.MuiDataGrid-columnSeparator': {
                  display: 'none',

               },
               '&.MuiDataGrid-root': {
                  border: 'none',
               },
               "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#F3F5F9",
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
            scrollbarSize={50}

         />
      </div>

   )
}

export default MuiDataGrid;