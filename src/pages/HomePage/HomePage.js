import React, { useState, useEffect } from 'react';
import styles from "./styles/Home.module.scss";
import Widgets from '../../components/Widgets/Widgets';
import AreaCharts from '../../components/Charts/AreaCharts';
import PageLayout from '../../layouts/PageLayout';
import MuiDataGrid from "../../components/dataGrid/MuiDataGrid";
import { stockOutColumns } from "../../dataGridColumns/StockOutProducts"
import BacsicCard from "../../components/common/Card/BasicCard";
import { useHttpHook } from "../../hooks/useHttpHook";

const HomePage = () => {
   const [stockoutProduct, setStockOutProduct] = useState([]);
   const getResponseData = (data) => {
      setStockOutProduct(data?.stockout)
   }
   const { isLoading, error, sendRequest } = useHttpHook()
   useEffect(() => {
      sendRequest({ url: "/product/stock-out" }, getResponseData)
   }, [])
   // console.log(stockout, "STOCK-OUT")
   return (
      <PageLayout>
         <Widgets />
         <AreaCharts />
         <div className={styles.recent_update_section}>
            <BacsicCard title={"Stock Out Products"}>
               <MuiDataGrid
                  shadow={"disable"}
                  columns={stockOutColumns}
                  rows={stockoutProduct}
                  loading={isLoading}
                  error={error}
                  rowHeight={70} />
            </BacsicCard>
         </div>
      </PageLayout>
   )
}

export default HomePage;