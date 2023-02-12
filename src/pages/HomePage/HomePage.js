import React, { useContext } from 'react';
import styles from "./styles/Home.module.scss";
import Widgets from '../../components/Widgets/Widgets';
import AreaCharts from '../../components/Charts/AreaCharts';
import PageLayout from '../../layouts/PageLayout';
import MuiDataGrid from "../../components/dataGrid/MuiDataGrid";
import { stockOutColumns } from "../../components/dataGrid/dataGridColumns/StockOutProducts";
import BacsicCard from "../../components/common/Card/BasicCard";
import { Context } from "../../store/Context";

const HomePage = () => {
   const { state } = useContext(Context);
   const { products, isLoading, error } = state;
   const stockoutProducts = products.filter((item) => item?.stock <= 0)
   // console.log(stockoutProducts, "STOCK-OUT")
   return (
      <PageLayout>
         <Widgets />
         <AreaCharts />
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
                  rowHeight={70} />
            </BacsicCard>
         </div>
      </PageLayout>
   )
}

export default HomePage;