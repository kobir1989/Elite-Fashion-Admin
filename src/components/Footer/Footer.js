import React, { useContext } from 'react';
import styles from "./styles/Footer.module.scss";
import Typography from '../common/Typography/Typography';
import Icons from '../common/Icons/Icons';
import { Link } from "react-router-dom";
import { Context } from "../../store/Context";

const Footer = () => {
   const { state } = useContext(Context);
   const { darkMood } = state;
   return (
      <footer className={darkMood ? "dark_mood_secondary" : "light_mood_secondary"}>
         <div className={styles.footer_content_wrapper}>
            <Typography variant={"small"}>&copy; 2023 Kabir Hossain | All Rights Reserved. </Typography>
            <div className={styles.footer_icons_wrapper}>
               <Link to={"https://www.facebook.com/kabir.ritu"}>
                  <Icons name={"facebook"} color={"#3b5998"} />
               </Link>
               <Link
                  to={"https://www.linkedin.com/in/kabir-hossain-07a69b238/"}>
                  <Icons name={"linkedIn"} color={"#0072b1"} />
               </Link>
               <Link to={"https://github.com/kobir1989"}>
                  <Icons name={"github"} color={"#171515"} />
               </Link>
            </div>
         </div>
      </footer>
   )
}

export default Footer