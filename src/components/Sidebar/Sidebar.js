import React, { useContext } from 'react';
import styles from "./styles/Sidebar.module.scss";
import Icons from '../common/Icons/Icons';
import Typography from '../common/Typography/Typography';
import { NavLink, Link, useLocation } from "react-router-dom";
import { Context } from "../../store/Context";
import { toggleShowProduct, toggleShowCategory, toggleShowSubCategory } from "../../store/Action"
// import { motion } from "framer-motion"

//TODO: add all path conditons
const Sidebar = () => {
   const { state, dispatch } = useContext(Context)
   const location = useLocation()
   console.log(location)
   return (
      <div className={styles.dashboard_sidebar}>
         <div className={styles.dashboard_sidebar_logo}>
            <Link to={"/home"}>
               <img src="/assets/logo-white.png" alt="logo.png" />
            </Link>
         </div>
         <div className={styles.dashboard_sidebar_lists}>
            <ul >
               <li>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     MAIN
                  </Typography>
               </li>
               <NavLink
                  to={"/home"}
                  className={({ isActive }) => isActive ? `${styles.active_li}` : ""}>
                  <li>
                     <Icons
                        name={"dashboard"} />
                     Dashboard
                  </li>
               </NavLink>
               <li>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     INVENTORY
                  </Typography>
               </li>
               <li className={location.pathname === "/product/list" || location.pathname === "product/create-new" ? `${styles.active_li} ${styles.li_nasted}` : ` ${styles.li_nasted}`}
                  onClick={() => { dispatch(toggleShowProduct(!state.showProduct)) }}>
                  <div className={styles.li_dropdown}>
                     <span>
                        <Icons name={"store"} />
                        Products
                     </span>
                     <span className={styles.rotate}>
                        <Icons
                           name={state.showProduct ? "downArrowOutlined" : "arrowForward"} />
                     </span>

                  </div>
                  {state.showProduct &&
                     <ul onClick={(e) => { e.stopPropagation() }}>
                        <NavLink to="/product/list"
                           className={({ isActive }) => isActive ? `${styles.active_li}` : ""} >
                           <li>
                              <Icons size={"1rem"} name={"list"} />
                              Products List
                           </li>
                        </NavLink>
                        <li>
                           <Icons size={"1rem"} name={"addList"} />
                           Create Product
                        </li>
                     </ul>
                  }
               </li>
               <li className={state.showCategory ? `${styles.active_li_parent} ${styles.li_nasted}` : ` ${styles.li_nasted}`}
                  onClick={() => { dispatch(toggleShowCategory(!state.showCategory)) }}>
                  <div className={styles.li_dropdown}>
                     <span>
                        <Icons name={"category"} />
                        Categories
                     </span>
                     <span className={styles.rotate}>
                        <Icons name={state.showCategory ? "downArrowOutlined" : "arrowForward"} />
                     </span>

                  </div>
                  {state.showCategory &&
                     <ul onClick={(e) => { e.stopPropagation() }}>
                        <li>
                           <Icons size={"1rem"} name={"categoryList"} />
                           Category List</li>
                        <li>
                           <Icons size={"1rem"} name={"addList"} />
                           Add Category</li>
                     </ul>}
               </li>
               <li
                  className={state.showSubCategory ? `${styles.active_li_parent} ${styles.li_nasted}` : ` ${styles.li_nasted}`}
                  onClick={() => { dispatch(toggleShowSubCategory(!state.showSubCategory)) }}>
                  <div className={styles.li_dropdown}>
                     <span>
                        <Icons name={"subCategory"} />
                        Sub-Categories
                     </span>
                     <span className={styles.rotate}>
                        <Icons name={state.showSubCategory ? "downArrowOutlined" : "arrowForward"} />
                     </span>
                  </div>
                  {state.showSubCategory &&
                     <ul onClick={(e) => { e.stopPropagation() }}>
                        <li>
                           <Icons size={"1rem"} name={"categoryList"} />
                           Sub-Category List
                        </li>
                        <li>
                           <Icons size={"1rem"} name={"addList"} />
                           Add Sub-Category
                        </li>
                     </ul>}
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
         </div >
      </div >
   )
}

export default Sidebar;