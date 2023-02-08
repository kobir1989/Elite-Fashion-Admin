import React from 'react';
import styles from "./styles/PageLayout.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {
   return (
      <div className={styles.page_layout_wrapper}>
         <main className={styles.main}>
            <div className={styles.page_content_wrapper}>
               <div className={styles.sidebar_wrapper}>
                  <Sidebar />
               </div>
               <div className={styles.navigated_content_wrapper}>
                  <Navbar />
                  <div className={styles.main_layout_wrapper}>
                     {children}
                  </div>
                  <Footer />
               </div>
            </div>
         </main>
      </div>
   )
}

export default PageLayout;