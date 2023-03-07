import React, { useContext } from 'react';
import PageLayout from '../../layouts/PageLayout';
import styles from "./styles/Earnings.module.scss";
import EarningsPieChart from "./Components/EarningsPieChart";
import { Context } from '../../store/Context';
import RevenueTable from './Components/RevenueTable';
import PageTitle from "../../components/common/PageTitle/PageTitle";
const Earnings = () => {
   const { state } = useContext(Context);
   const { analyticsData } = state;
   console.log(analyticsData)
   return (
      <PageLayout>
         <section className={styles.earnings_page_content_wrapper}>
            <PageTitle title={"Revenue Summary"} showBtn={false} />
            <EarningsPieChart
               earningsData={analyticsData?.monthlyRevenueArray}
            />
            <div className={styles.revenue_table_wrapper}>
               <RevenueTable revenue={analyticsData?.monthlyRevenueArray} />
            </div>
         </section>
      </PageLayout>
   )
}

export default Earnings;