import React, { useState, useEffect } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDataGrid from "../../components/dataGrid/MuiDataGrid";
import { orderColumns } from "../../components/dataGrid/dataGridColumns/orderColumns";
import styles from "./styles/OrderListPage.module.scss";
import Typography from '../../components/common/Typography/Typography';
import { useHttpHook } from "../../hooks/useHttpHook";

const OrderListPage = () => {
   const [orderData, setOrderData] = useState([]);
   const getOrderData = (data) => {
      console.log(data)
      setOrderData(data?.order)
   }
   const { sendRequest, hasError, loading } = useHttpHook()

   useEffect(() => {
      sendRequest({ url: "/orders/all" }, getOrderData)
   }, [])
   return (
      <PageLayout>
         <div className={styles.order_page_wrapper}>
            <div className={styles.order_title_wrapper}>
               <Typography variant={"subtitle"} color={"primary"}>
                  Order List
               </Typography>
            </div>
            <div className={styles.data_grid_wrapper}>
               <MuiDataGrid
                  columns={orderColumns}
                  rows={orderData}
                  rowHeight={100}
                  isOrder={true}
                  page={5}
                  error={hasError}
                  loading={loading}
               />
            </div>
         </div>
      </PageLayout>
   )
}

export default OrderListPage;