import React, { useState } from 'react';
import styles from "./styles/Sidebar.module.scss";
import Icons from '../common/Icons/Icons';
import Typography from '../common/Typography/Typography';
import { Link } from "react-router-dom";
// import { motion } from "framer-motion"

const Sidebar = () => {
   const [showProduct, setShowProduct] = useState(false)
   const [showCategory, setShowCategory] = useState(false)
   const [showSubCategory, setShowSubCategory] = useState(false)
   const [active, setActive] = useState("dashboard")

   const productHandler = () => {
      setShowProduct(!showProduct)
      setShowCategory(false)
      setShowSubCategory(false)
      setActive("product")
   }
   const categoryHandler = () => {
      setShowCategory(!showCategory)
      setShowProduct(false)
      setShowSubCategory(false)
      setActive("category")
   }
   const subCategoryHandler = () => {
      setShowSubCategory(!showSubCategory)
      setShowCategory(false)
      setShowProduct(false)
      setActive("subCategory")

   }
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
               <Link to={"/home"}>
                  <li className={active === "dashboard" ? `${styles.active_li}` : ""}
                     onClick={() => { setActive("dashboard") }}>
                     <Icons
                        name={"dashboard"} />
                     Dashboard
                  </li>
               </Link>
               <li>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     INVENTORY
                  </Typography>
               </li>
               <li className={`${styles.li_nasted} ${active === "product" ? `${styles.active_li}` : ""}`}
                  onClick={productHandler}>
                  <div className={styles.li_dropdown}>
                     <span>
                        <Icons name={"store"} />
                        Products
                     </span>
                     <span className={styles.rotate}>
                        <Icons
                           name={showProduct ? "downArrowOutlined" : "arrowForward"} />
                     </span>

                  </div>
                  {showProduct &&
                     <ul onClick={(e) => { e.stopPropagation() }} className={showProduct && "add_transition"}>
                        <Link to="/product/list">
                           <li
                              className={active === "productList" ? `${styles.active_li}` : ""}
                              onClick={() => { setActive("productList") }}>
                              <Icons size={"1rem"} name={"list"} />
                              Products List
                           </li>
                        </Link>
                        <li
                           className={active === "addProduct" ? `${styles.active_li}` : ""}
                           onClick={() => { setActive("addProduct") }}>
                           <Icons size={"1rem"} name={"addList"} />
                           Create Product
                        </li>
                     </ul>
                  }
               </li>
               <li className={`${styles.li_nasted} ${active === "category" ? `${styles.active_li}` : ""}`}
                  onClick={categoryHandler}>
                  <div className={styles.li_dropdown}>
                     <span>
                        <Icons name={"category"} />
                        Categories
                     </span>
                     <span className={styles.rotate}>
                        <Icons name={showCategory ? "downArrowOutlined" : "arrowForward"} />
                     </span>

                  </div>
                  {showCategory &&
                     <ul onClick={(e) => { e.stopPropagation() }}>
                        <li
                           className={active === "categoryList" ? `${styles.active_li}` : ""}
                           onClick={() => { setActive("categoryList") }}>
                           <Icons size={"1rem"} name={"categoryList"} />
                           Category List</li>
                        <li
                           className={active === "addCategory" ? `${styles.active_li}` : ""}
                           onClick={() => { setActive("addCategory") }}>
                           <Icons size={"1rem"} name={"addList"} />
                           Add Category</li>
                     </ul>}
               </li>
               <li
                  className={`${styles.li_nasted} ${active === "subCategory" ? `${styles.active_li}` : ""}`}
                  onClick={subCategoryHandler}>
                  <div className={styles.li_dropdown}>
                     <span>
                        <Icons name={"subCategory"} />
                        Sub-Categories
                     </span>
                     <span className={styles.rotate}>
                        <Icons name={showSubCategory ? "downArrowOutlined" : "arrowForward"} />
                     </span>
                  </div>
                  {showSubCategory &&
                     <ul onClick={(e) => { e.stopPropagation() }}>
                        <li
                           className={active === "subCategoryList" ? `${styles.active_li}` : ""}
                           onClick={() => { setActive("subCategoryList") }}>
                           <Icons size={"1rem"} name={"categoryList"} />
                           Sub-Category List
                        </li>
                        <li className={active === "addSubCategory" ? `${styles.active_li}` : ""}
                           onClick={() => { setActive("addSubCategory") }}>
                           <Icons size={"1rem"} name={"addList"} />
                           Add Sub-Category
                        </li>
                     </ul>}
               </li>
               <li className={active === "orders" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("orders") }}>
                  <Icons name={"order"} />
                  Orders
               </li>
               <li className={active === "customers" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("customers") }}>
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
               <li className={active === "earnings" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("earnings") }}>
                  <Icons name={"roundPie"} />
                  Earnings
               </li>
               <li className={active === "statistics" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("statistics") }}>
                  <Icons name={"barChart"} />
                  Statistics
               </li>
               <li className={active === "statistics" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("statistics") }}>
                  <Icons name={"review"} />
                  Reviews
               </li>
               <li>
                  <Typography variant={"small"} color={"light-gray"}>
                     ADMINISTRATION
                  </Typography>
               </li>
               <li
                  className={active === "siteSettings" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("siteSettings") }}>
                  <Icons name={"siteSettings"} />
                  Site Settings
               </li>
               <li
                  className={active === "account" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("account") }}>
                  <Icons name={"account"} />
                  Account Settings
               </li>
               <li
                  className={active === "systemSettings" ? `${styles.active_li}` : ""}
                  onClick={() => { setActive("systemSettings") }}>
                  <Icons name={"systemSettings"} />
                  System Health
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Sidebar;