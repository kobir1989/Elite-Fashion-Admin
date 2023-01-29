import React from 'react';
import styles from "./styles/Home.module.scss";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Widgets from '../../components/Widgets/Widgets';

const HomePage = () => {
   return (
      <>
         <main className={styles.home_page_content_wrapper}>
            <section className={styles.sidebar_wrapper}>
               <Sidebar />
            </section>
            <section className={styles.routes_content_wrapper}>
               <Navbar />
               <div className={styles.widgets_wrapper}>
                  <Widgets />
               </div>
            </section>
         </main>
         <Footer />
      </>
   )
}

export default HomePage;