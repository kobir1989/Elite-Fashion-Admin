import React from 'react'
import "./styles/AuthPageLayout.module.scss";
import Typography from '../components/common/Typography/Typography';
import styles from "./styles/AuthPageLayout.module.scss";
import Footer from '../components/Footer/Footer';

const AuthPageLayout = ({ children }) => {
   return (
      <>
         <header className={styles.header_section}>
            <Typography variant={"subtitle"}>Elite Fashion Admin Dashboard</Typography>
         </header>
         <main className={styles.main_layout_wrapper}>
            {children}
         </main>
         <Footer />
      </>
   )
}

export default AuthPageLayout;