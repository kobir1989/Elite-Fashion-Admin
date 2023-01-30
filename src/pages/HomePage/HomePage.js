import React from 'react';
import styles from "./styles/Home.module.scss";
import Widgets from '../../components/Widgets/Widgets';
import AreaCharts from '../../components/Charts/AreaCharts';
import DataTable from '../../components/DataTable/DataTable';
import PageLayout from '../../layouts/PageLayout';

const HomePage = () => {
   return (
      <PageLayout>
         <Widgets />
         <AreaCharts />
         <div className={styles.recent_update_section}>
            <DataTable
               btnTitle={"All Orders"}
               title={"Recent Purchases"}
               tableHeadData={
                  {
                     col1: "Product",
                     col2: "Order Id",
                     col3: "Payment Id",
                     col4: "Amount"
                  }
               } />
            <DataTable
               btnTitle={"All Products"}
               title={"Stock Out Products"}
               tableHeadData={
                  {
                     col1: "Product",
                     col2: "Stock",
                     col3: "Sub-Category",
                     col4: "Price"
                  }
               }
            />
         </div>
      </PageLayout>
   )
}

export default HomePage;