import React, { useContext, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/PageLayout.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { Context } from "../store/Context";
import { setToggleSidebar } from "../store/Action";

const PageLayout = ({ children }) => {
   const { state, dispatch } = useContext(Context);
   const { toggleSidebar } = state;
   console.log(toggleSidebar, "TT")
   const handleBackdropClick = () => {
      if (toggleSidebar) {
         dispatch(setToggleSidebar(false));
      }
   };

   useEffect(() => {
      const handleResize = () => dispatch(setToggleSidebar(window.innerWidth > 1280 ? true : false));
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [dispatch]);

   return (
      <div className={styles.page_layout_wrapper} >
         <AnimatePresence>
            {toggleSidebar &&
               <motion.div
                  initial={{ opacity: 0, transition: { duration: 0.2 } }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ default: { ease: "linear" } }}
                  onClick={handleBackdropClick}
                  className={styles.backdrop}>
                  <motion.div
                     initial={{ x: "-100%", transition: { duration: 0.2 } }}
                     animate={{ x: 0 }}
                     exit={{ x: "-100%", transition: { duration: 0.2 } }}
                     onClick={e => e.stopPropagation()}
                     transition={{ default: { ease: "linear" } }}
                     className={styles.sidebar_wrapper}>
                     <Sidebar />
                  </motion.div>
               </motion.div>
            }

         </AnimatePresence>
         <div
            className={styles.page_content_wrapper}
            onClick={e => e.stopPropagation()}
         >
            <Navbar />
            <div className={styles.main_layout_wrapper}>{children}</div>
            <Footer />
         </div>
      </div>
   );
};

export default PageLayout;
