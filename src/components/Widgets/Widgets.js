import React from 'react';
import styles from "./styles/Widgets.module.scss";
import WidgetCardBig from '../common/Card/WidgetCardBig';
import WidgetCardSm from '../common/Card/WidgetCardSm';

const Widgets = () => {
   return (
      <div className={styles.Widgets_grid_wrapper}>
         <div className={styles.col_1}>
            <WidgetCardBig
               imgUrl={"/assets/svgg.svg"} />
         </div>
         <div className={styles.col_2}>
            <WidgetCardSm
               title={"Order"}
               amount={"1520"}
               percentage={-15} />
         </div>
         <div className={styles.col_4}>
            <WidgetCardSm
               title={"Gross Sale"}
               amount={"12520"}
               percentage={63} />
         </div>
         <div className={styles.col_5}>
            <WidgetCardSm
               title={"Total Shipping Cost"}
               amount={"520"}
               percentage={15} />
         </div>
         <div className={styles.col_6}>
            <WidgetCardSm
               title={"Weekly Sales"}
               amount={"101520"}
               percentage={50} />
         </div>
      </div>
   )
}

export default Widgets; 