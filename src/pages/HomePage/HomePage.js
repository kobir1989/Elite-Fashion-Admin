import React from 'react';
import styles from "./styles/Home.module.scss";
import Widgets from '../../components/Widgets/Widgets';
import AreaCharts from '../../components/Charts/AreaCharts';
import PageLayout from '../../layouts/PageLayout';
import DataGrid from "../../components/dataGrid/DataGrid";
import { stockOutColumns } from "../../dataGridColumns/StockOutProducts"
import BacsicCard from "../../components/common/Card/BasicCard";

const HomePage = () => {
   return (
      <PageLayout>
         <Widgets />
         <AreaCharts />
         <div className={styles.recent_update_section}>
            <BacsicCard title={"Stock Out Products"}>
               <DataGrid
                  shadow={"disable"}
                  columns={stockOutColumns}
                  rows={[]} />
            </BacsicCard>
         </div>
      </PageLayout>
   )
}

export default HomePage;