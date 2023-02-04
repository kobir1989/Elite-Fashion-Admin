import React, { useState } from 'react';
import Typography from "../Typography/Typography";
import Icons from "../Icons/Icons";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import styles from "./styles/WidgetCardSm.module.scss";

const WidgetCardSm = ({ title, count, percentage }) => {

   return (
      <div className={styles.widget_card_sm_wrapper}>
         <div className={styles.data_wrapper}>
            <Typography variant={"widgetTitle"} color={"paragraph"}>
               {title}
            </Typography>
            <div className={styles.percentage_number}>
               <Typography variant={"widgetAmount"}>
                  {count}
               </Typography>
               <Typography variant={"widgetCount"} color={percentage > 0 ? "blue" : "red"}>
                  <span>
                     <Icons name={percentage > 0 ? "upArrow" : "downArrow"} />
                  </span>
                  {percentage}%
               </Typography>
            </div>
         </div>
         <div className={styles.process_bar_wrapper}>
            <CircularProgressbar
               styles={buildStyles({
                  textColor: percentage > 0 ? "#2c74b3" : "#cc2121",
                  pathColor: percentage > 0 ? "#2c74b3" : "#cc2121",
                  trailColor: percentage > 0 ? "#e5e5e5" : "#cc2121",
               })}
               value={percentage}
               text={`${percentage}%`} />

            {/* <CircularProgressbar
               value={50}
               strokeWidth={50}
               styles={buildStyles({
                  strokeLinecap: "butt"
               })}
            /> */}
         </div>
      </div>
   )
}

export default WidgetCardSm;