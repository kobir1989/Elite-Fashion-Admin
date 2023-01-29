import React from 'react';
import styles from "./styles/Home.module.scss";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Widgets from '../../components/Widgets/Widgets';
import AreaCharts from '../../components/Charts/AreaCharts';
import DataTable from '../../components/DataTable/DataTable';

const HomePage = () => {
   return (
      <main>
         <div className={styles.home_page_content_wrapper}>
            <div className={styles.sidebar_wrapper}>
               <Sidebar />
            </div>
            <div className={styles.navigated_content_wrapper}>
               <Navbar />
               <div className={styles.main_layout_wrapper}>
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
               </div>
               <Footer />
            </div>
         </div>
      </main>
   )
}

export default HomePage;