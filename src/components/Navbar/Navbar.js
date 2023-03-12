import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "../common/Typography/Typography";
import Icons from "../common/Icons/Icons";
import Avatar from "@mui/material/Avatar";
import Button from "../common/Button/Button";
import styles from "./styles/Navbar.module.scss";
import { Context } from "../../store/Context";
import { logout, setDarkMood, setShowSearchModal } from "../../store/Action";

const Navbar = ({ setToggleSidebar }) => {
   const [showDropdown, setShowDropdown] = useState(false);
   const [showNotification, setShowNotification] = useState(false);
   const { state, dispatch } = useContext(Context);
   const { darkMood, authToken } = state;

   //Menu Toggle handler for small screens
   const menuToggleHandler = () => {
      setToggleSidebar(true);
   };

   //Toggle notification dropdown
   const toggleNotifications = () => {
      setShowNotification(!showNotification);
      setShowDropdown(false)
   }

   //Toggle Admin profile info dropdown
   const toggleAdminInfo = () => {
      setShowDropdown(!showDropdown)
      setShowNotification(false)
   }
   return (
      <nav className={darkMood ? `${styles.navbar} ${"dark_mood_secondary"}` : `${styles.navbar} ${"light_mood_secondary"}`}>
         <div className={styles.menue_btn} onClick={menuToggleHandler}>
            <Button variant={"icon-btn-bg"}>
               <Icons name={"menue"} size={"2.1rem"} color={"#7d879c"} />
            </Button>
         </div>
         <Link to={"https://elite-fashion.vercel.app/"}>
            <div className={styles.website_link}>
               <Icons name={"earth"} color={darkMood ? "#9fa7b6" : "#3b3841"} />
               <Typography variant={"h5"} color={darkMood ? "paragraph" : "primary"}>
                  Browse Elite Fashion
               </Typography>
            </div>
         </Link>
         <div className={styles.nav_buttons_wrapper}>
            <Button variant={darkMood ? "icon-btn-bg-dark" : "icon-btn-bg"}
               onClick={() => { dispatch(setShowSearchModal(true)) }}>
               <Icons name={"search"} color={"#7d879c"} />
            </Button>
            <div className={styles.notification_wrapper}>
               <Button
                  variant={darkMood ? "icon-btn-bg-dark" : "icon-btn-bg"}
                  onClick={toggleNotifications}
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
                        className={darkMood ? `${styles.notification_dropdown_wrapper} ${"dark_mood_popup"}` : `${styles.notification_dropdown_wrapper} ${"light_mood_secondary"}`}
                     >
                        <Typography
                           variant={"h6"}
                           color={darkMood ? "white" : "primary"}>
                           New (2)
                        </Typography>
                        <div className={styles.notifications}>
                           <Icons name={"addOrder"} color={"#2c74b3"} />
                           <div className={styles.notifications_title}>
                              <Typography
                                 variant={"body"}
                                 color={darkMood ? "white" : "primary"}>
                                 New Order Received
                              </Typography>
                              <Typography
                                 variant={"small"}
                                 color={"light-gray"}>
                                 Just Now
                              </Typography>
                           </div>
                        </div>
                        <div className={styles.notifications}>
                           <Icons name={"addOrder"} color={"#2c74b3"} />
                           <div className={styles.notifications_title}>
                              <Typography
                                 variant={"body"}
                                 color={darkMood ? "white" : "primary"}>
                                 New Order Received
                              </Typography>
                              <Typography
                                 variant={"small"}
                                 color={"light-gray"}>
                                 Just Now
                              </Typography>
                           </div>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
               {/*NOTIFICATIONS END*/}
            </div>
            <Button variant={darkMood ? "icon-btn-bg-dark" : "icon-btn-bg"}
               onClick={() => { dispatch(setDarkMood(!darkMood)) }}>
               <Icons name={darkMood ? "lightMood" : "darkMood"} color={"#7d879c"} />
            </Button>
            {/* <Icons name={ } /> */}
            <div className={styles.avater_wrapper}>
               <Button
                  variant={darkMood ? "icon-btn-bg-dark" : "icon-btn-bg"}
                  onClick={toggleAdminInfo}
               >
                  <Avatar
                     alt="avatar.jpg"
                     src={authToken?.userPayload?.imageUrl || "/assets/avatar.jpg"} />
               </Button>

               {/* DROPDOWN START*/}
               <AnimatePresence>
                  {showDropdown && (
                     <motion.div
                        initial={{ opacity: 0, transition: { duration: 0.2 } }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        className={darkMood ? `${styles.dropdown_wrapper} ${"dark_mood_popup"}` : `${styles.dropdown_wrapper} ${"light_mood_secondary"}`}

                     >
                        <div className={styles.admin_details}>
                           <Typography
                              variant={"body"}
                              color={darkMood ? "white" : "primary"}>
                              Kabir Hossain
                           </Typography>
                           <Typography
                              variant={"small"}
                              color={darkMood ? "paragraph" : "primary"}>
                              Admin
                           </Typography>
                        </div>
                        <ul>
                           <li>
                              <Link to={"/admin/profile"}>
                                 <Typography
                                    variant={"small"}
                                    color={darkMood ? "white" : "primary"}>
                                    Profile
                                 </Typography>
                              </Link>
                           </li>
                           <li>
                              <Link to={"/admin/profile/update"}>
                                 <Typography
                                    variant={"small"}
                                    color={darkMood ? "white" : "primary"}>
                                    Settings
                                 </Typography>
                              </Link>
                           </li>
                           <li>
                              <Button
                                 variant={"icon-btn-normal"}
                                 onClick={() => {
                                    dispatch(logout());
                                 }}
                              >
                                 <Typography
                                    variant={"small"}
                                    color={darkMood ? "white" : "primary"}>
                                    Logout
                                 </Typography>
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
