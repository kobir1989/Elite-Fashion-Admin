import React, { useContext, useEffect, useState } from 'react';
import styles from "./styles/Home.module.scss";
import Widgets from '../../components/Widgets/Widgets';
import AreaCharts from '../../components/Charts/AreaCharts';
import PageLayout from '../../layouts/PageLayout';
import MuiDataGrid from "../../components/dataGrid/MuiDataGrid";
import { stockOutColumns } from "../../components/dataGrid/dataGridColumns/StockOutProducts";
import BacsicCard from "../../components/common/Card/BasicCard";
import { Context } from "../../store/Context";
import { useHttpHook } from '../../hooks/useHttpHook';
import { getAnalyticsData } from "../../store/Action"

const HomePage = () => {
   const { state, dispatch } = useContext(Context);
   const { products, isLoading, error } = state;

   //Get stock out products
   const stockoutProducts = products.filter((item) => item?.stock <= 0)

   //Get response data from server
   const getResponseData = (data) => {
      dispatch(getAnalyticsData(data))
   }

   //useHttpHook
   const { sendRequest, hasError, loading } = useHttpHook()

   //Fetch analytics data
   useEffect(() => {
      sendRequest(
         {
            url: "/admin/analytics"
         },
         getResponseData
      )
   }, []);

   return (
      <PageLayout>
         <Widgets loading={loading} />
         <AreaCharts loading={loading} />
         <div className={styles.stockout_section}>
            <BacsicCard title={"Stock Out Products"}>
               <MuiDataGrid
                  shadow={"disable"}
                  columns={stockOutColumns}
                  rows={stockoutProducts}
                  loading={isLoading}
                  error={error}
                  viewUrl={"/product/single"}
                  editUrl={"/product/edit"}
                  deleteUrl={"/product/delete"}
                  rowHeight={90}
               />
            </BacsicCard>
         </div>
      </PageLayout>
   )
}

export default HomePage;