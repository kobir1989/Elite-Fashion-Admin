import React, { useState, useContext } from "react";
import Typography from "../common/Typography/Typography";
import Icons from "../common/Icons/Icons";
import Avatar from "@mui/material/Avatar";
import styles from "./styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import { Context } from "../../store/Context";
import { logout } from "../../store/Action";
import { motion, AnimatePresence } from "framer-motion";
import { setShowSearchModal } from "../../store/Action";

const Navbar = ({ setToggleSidebar }) => {
   const [showDropdown, setShowDropdown] = useState(false);
   const [showNotification, setShowNotification] = useState(false);
   const { dispatch } = useContext(Context);
   const menuToggleHandler = () => {
      setToggleSidebar(true);
   };
   return (
      <nav className={styles.navbar}>
         <div className={styles.menue_btn} onClick={menuToggleHandler}>
            <Button variant={"icon-btn-bg"}>
               <Icons name={"menue"} size={"2.1rem"} color={"#7d879c"} />
            </Button>
         </div>
         <Link to={"#"}>
            <div className={styles.website_link}>
               <Icons name={"earth"} color={"#7d879c"} />
               <Typography variant={"h5"}>Browse Elite Fashion</Typography>
            </div>
         </Link>
         <div className={styles.nav_buttons_wrapper}>
            <Button variant={"icon-btn-bg"}
               onClick={() => { dispatch(setShowSearchModal(true)) }}>
               <Icons name={"search"} color={"#7d879c"} />
            </Button>
            <div className={styles.notification_wrapper}>
               <Button
                  variant={"icon-btn-bg"}
                  onClick={() => {
                     setShowNotification(!showNotification);
                  }}
               >
                  <Icons name={"notification"} color={"#7d879c"} />
               </Button>
               {/*NOTIFICATIONS START*/}
               <AnimatePresence>
                  {showNotification && (
                     <motion.div
                        initial={{ opacity: 0, transition: { duration: 0.2 } }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className={styles.notification_dropdown_wrapper}>
                        <Typography variant={"h6"}>New (2)</Typography>
                        <div className={styles.notifications}>
                           <Icons name={"addOrder"} color={"#2c74b3"} />
                           <div className={styles.notifications_title}>
                              <Typography variant={"body"}>New Order Received</Typography>
                              <Typography variant={"small"} color={"light-gray"}>
                                 Just Now
                              </Typography>
                           </div>
                        </div>
                        <div className={styles.notifications}>
                           <Icons name={"addOrder"} color={"#2c74b3"} />
                           <div className={styles.notifications_title}>
                              <Typography variant={"body"}>New Order Received</Typography>
                              <Typography variant={"small"} color={"light-gray"}>
                                 Just Now
                              </Typography>
                           </div>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
               {/*NOTIFICATIONS END*/}
            </div>
            <Button variant={"icon-btn-bg"}>
               <Icons name={"darkMood"} color={"#7d879c"} />
            </Button>
            {/* <Icons name={ } /> */}
            <div className={styles.avater_wrapper}>
               <Button
                  variant={"icon-btn-bg"}
                  onClick={() => {
                     setShowDropdown(!showDropdown);
                  }}
               >
                  <Avatar alt="avatar.jpg" src="/assets/avatar.jpg" />
               </Button>

               {/* DROPDOWN START*/}
               <AnimatePresence>
                  {showDropdown && (
                     <motion.div
                        initial={{ opacity: 0, transition: { duration: 0.2 } }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className={styles.dropdown_Wrapper}>
                        <div className={styles.admin_details}>
                           <Typography variant={"body"} color={"primary"}>
                              Kabir Hossain
                           </Typography>
                           <Typography variant={"small"} color={"light-gray"}>
                              Admin
                           </Typography>
                        </div>
                        <ul>
                           <li>
                              <Link to={"#"}>Profile</Link>
                           </li>
                           <li>
                              <Link to={"#"}>Settings</Link>
                           </li>
                           <li>
                              <Button
                                 variant={"icon-btn-normal"}
                                 onClick={() => {
                                    dispatch(logout());
                                 }}
                              >
                                 Logout
                              </Button>
                           </li>
                        </ul>
                     </motion.div>
                  )}
               </AnimatePresence>
               {/*DROPDOWN END*/}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
