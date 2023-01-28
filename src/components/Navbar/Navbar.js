import React, { useState } from 'react';
import Typography from '../common/Typography/Typography';
import Icons from '../common/Icons/Icons';
import Avatar from '@mui/material/Avatar';
import styles from "./styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import Button from '../common/Button/Button';

const Navbar = () => {
   const [showDropdown, setShowDropdown] = useState(false)
   const [showNotification, setShowNotification] = useState(false)
   return (
      <nav>
         <Link to={"#"}>
            <div className={styles.website_link}>
               <Icons name={"earth"} color={"#7d879c"} />
               <Typography variant={"h5"}>Browse Elite Fashion</Typography>
            </div>
         </Link>
         <div className={styles.nav_buttons_wrapper}>
            <Button variant={"icon-btn-bg"}>
               <Icons name={"search"} color={"#7d879c"} />
            </Button>
            <div className={styles.notification_wrapper}>
               <Button variant={"icon-btn-bg"}
                  onClick={() => { setShowNotification(!showNotification) }}>
                  <Icons name={"notification"} color={"#7d879c"} />
               </Button>
               {/*NOTIFICATIONS START*/}
               {showNotification &&
                  <div className={styles.notification_dropdown_wrapper}>
                     <Typography variant={"h6"}>New (2)</Typography>
                     <div className={styles.notifications}>
                        <Icons name={"addOrder"} color={"#2c74b3"} />
                        <div className={styles.notifications_title}>
                           <Typography variant={"body"}>
                              New Order Received
                           </Typography>
                           <Typography variant={"small"} color={"light-gray"}>
                              Just Now
                           </Typography>
                        </div>
                     </div>
                     <div className={styles.notifications}>
                        <Icons name={"addOrder"} color={"#2c74b3"} />
                        <div className={styles.notifications_title}>
                           <Typography variant={"body"}>
                              New Order Received
                           </Typography>
                           <Typography variant={"small"} color={"light-gray"}>
                              Just Now
                           </Typography>
                        </div>
                     </div>
                  </div>
               }
               {/*NOTIFICATIONS END*/}
            </div>
            <Button variant={"icon-btn-bg"}>
               <Icons name={"darkMood"} color={"#7d879c"} />
            </Button>
            {/* <Icons name={ } /> */}
            <div className={styles.avater_wrapper}>
               <Button variant={"icon-btn-bg"}
                  onClick={() => { setShowDropdown(!showDropdown) }}>
                  <Avatar alt="avatar.jpg" src="/assets/avatar.jpg" />
               </Button>

               {/* DROPDOWN START*/}
               {showDropdown && <div className={styles.dropdown_Wrapper}>
                  <div className={styles.admin_details}>
                     <Typography variant={"body"} color={"primary"}>
                        Kabir Hossain
                     </Typography>
                     <Typography variant={"small"} color={"light-gray"}>
                        Admin
                     </Typography>
                     <span></span>
                  </div>
                  <ul>
                     <li>
                        <Link to={"#"}>Profile</Link>
                     </li>
                     <li>
                        <Link to={"#"}>Settings</Link>
                     </li>
                     <li>
                        <span></span>
                        <Link to={"#"}>Logout</Link>
                     </li>
                  </ul>
               </div>}
               {/*DROPDOWN END*/}

            </div>
         </div>
      </nav>
   )
}

export default Navbar;