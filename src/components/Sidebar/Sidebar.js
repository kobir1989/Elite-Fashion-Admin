import React from 'react';
import styles from "./styles/Sidebar.module.scss";
import Icons from '../common/Icons/Icons';
import Typography from '../common/Typography/Typography';

const Sidebar = () => {
   return (
      <div className={styles.dashboard_sidebar}>
         <div className={styles.dashboard_sidebar_logo}>
            <img src="/assets/logo-white.png" alt="logo.png" />
         </div>
         <div className={styles.dashboard_sidebar_lists}>
            <ul>
               <li>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     MAIN
                  </Typography>
               </li>
               <li>
                  <Icons
                     name={"dashboard"} />
                  Dashboard
               </li>
               <li>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     INVENTORY
                  </Typography>
               </li>
               <li>
                  <Icons name={"store"} />
                  Products
               </li>
               <li>
                  <Icons name={"category"} />
                  Categories
               </li>
               <li>
                  <Icons name={"subCategory"} />
                  Sub-Categories
               </li>
               <li>
                  <Icons name={"order"} />
                  Orders
               </li>
               <li>
                  <Icons name={"users"} />
                  Customers
               </li>
               <li>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     ANALYTICS
                  </Typography>
               </li>
               <li>
                  <Icons name={"roundPie"} />
                  Earnings
               </li>
               <li>
                  <Icons name={"barChart"} />
                  Statistics
               </li>
               <li>
                  <Icons name={"review"} />
                  Reviews
               </li>
               <li>
                  <Typography variant={"small"} color={"light-gray"}>
                     ADMINISTRATION
                  </Typography>
               </li>
               <li>
                  <Icons name={"siteSettings"} />
                  Site Settings
               </li>
               <li>
                  <Icons name={"account"} />
                  Account Settings
               </li>
               <li>
                  <Icons name={"systemSettings"} />
                  System Health
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Sidebar;