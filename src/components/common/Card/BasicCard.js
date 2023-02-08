import React from 'react'
import styles from "./styles/BasicCard.module.scss";
import Typography from '../Typography/Typography';

const BasicCard = ({ children, title = "" }) => {
   return (
      <div className={styles.basic_card_wrapper}>
         <div className={styles.section_title_wrapper}>
            <Typography variant={"subtitle"} color={"paragraph"}>{title}</Typography>
         </div>
         {children}
      </div>
   )
}

export default BasicCard;