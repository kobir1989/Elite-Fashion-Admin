import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/PageLayout.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {
   const [toggleSidebar, setToggleSidebar] = useState(window.innerWidth >= 1280 ? true : false);

   const handleBackdropClick = () => {
      if (toggleSidebar) {
         setToggleSidebar(false);
      }
   };
   // useEffect(() => {
   //    setToggleSidebar(window.innerWidth >= 1280);
   //    const handleResize = () => setToggleSidebar(window.innerWidth >= 1280);
   //    window.addEventListener("resize", handleResize);
   //    return () => {
   //       window.removeEventListener("resize", handleResize);
   //    };
   // }, []);
   // console.log(toggleSidebar, "TOGLE SIDE")
   return (
      <div className={styles.page_layout_wrapper}>
         <AnimatePresence>
            {toggleSidebar &&
               <>
                  <motion.div
                     initial={{ opacity: 0, transition: { duration: 0.2 } }} animate={{ opacity: 1, }}
                     exit={{ opacity: 0, transition: { duration: 0.2 } }}
                     transition={{ default: { ease: "linear" } }}
                     className={styles.backdrop}
                     onClick={handleBackdropClick}>
                  </motion.div>
                  <motion.div
                     initial={{ x: window.innerWidth > 1280 ? "0%" : "-100%", transition: { duration: 0.2 } }}
                     animate={{ x: 0 }}
                     exit={{ x: window.innerWidth > 1280 ? "0%" : "-100%", transition: { duration: 0.2 } }}
                     transition={{ default: { ease: "linear" } }}
                     className={styles.sidebar_wrapper}>
                     <Sidebar />
                  </motion.div>
               </>
            }
         </AnimatePresence>
         <div
            className={styles.page_content_wrapper}>
            <Navbar setToggleSidebar={setToggleSidebar} />
            <div
               className={styles.main_layout_wrapper}>
               {children}
            </div>
            <Footer />
         </div>
      </div>
   );
};

export default PageLayout;
