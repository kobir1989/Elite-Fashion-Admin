import React from 'react';
import styles from "./styles/PageLayout.module.scss";
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const PageLayout = ({ children }) => {
   return (
      <>
         <header>
            <Navbar />
         </header>
         <main className={styles.main_section}>
            {children}
         </main>
         <Footer />
      </>

   )
}

export default PageLayout;