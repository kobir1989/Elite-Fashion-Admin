import React from 'react';
import styles from "../styles/OrderDetailsView.module.scss";
import Typography from '../../../components/common/Typography/Typography';
import dayjs from 'dayjs';
import OrderStatusOptions from "./OrderStatusOptions";
import LinearProgress from '@mui/material/LinearProgress';

//TODO: ERROR STATE
const OrderDetailsView = ({ error, loading, singleOrder, totalAmount, setStateUpdated }) => {
   return (
      <section className={styles.order_details_page_wrapper}>
         <div className={styles.page_title}>
            <Typography
               variant={"subtitle"}
               color={"primary"}>
               Order Details
            </Typography>
         </div>
         <div className={styles.product_details_wrapper}>
            {loading &&
               <div className={styles.loading_state}>
                  <LinearProgress sx={{ borderRadius: "8px 8px 0 0" }} />
               </div>
            }
            <div className={styles.id_date}>
               <Typography
                  variant={"small"}
                  color={"paragraph"}>
                  Order Id: {singleOrder?._id}
               </Typography>
               <Typography
                  variant={"small"}
                  color={"paragraph"}>
                  Placed on: {dayjs(singleOrder?.updatedAt).format("MMM D, YYYY h:mm A")}
               </Typography>
               <div className={`with__bg ${singleOrder?.orderStatus === "PENDING" ? "yellow_bg" :
                  singleOrder?.orderStatus === "SHIPPED" ? "blue_bg" :
                     singleOrder?.orderStatus === "DELIVERED" ? "green_bg" :
                        singleOrder?.orderStatus === "CANCELED" ? "red_bg" : ""}`}>
                  <Typography variant={"body"}>
                     {singleOrder?.orderStatus}
                  </Typography>
               </div>
            </div>
            <OrderStatusOptions setStateUpdated={setStateUpdated} />
            <div className={styles.product_row_wrapper}>
               {singleOrder?.product && singleOrder?.product.length ? singleOrder?.product.map((item) => (
                  <div className={styles.product_row} key={item?._id?._id}>
                     <img src={item?._id?.image} alt="" />
                     <div className={styles.product_description}>
                        <Typography
                           variant={"widgetTitle"}>
                           {item?._id?.title}
                        </Typography>
                        <Typography
                           variant={"dataGridTitle"}>
                           Quantity: {item?.quantity}
                        </Typography>
                        <Typography
                           variant={"dataGridTitle"}>
                           Price: TK.{item?._id?.price}.00
                        </Typography>
                     </div>
                  </div>
               )) : null}
            </div>
         </div>
         <div className={styles.shipping_and_amount_wrapper}>
            <div className={styles.shipping_wrapper}>
               <div className={styles.border_bottom}>
                  <Typography variant={"widgetTitle"}>
                     Shipping Address
                  </Typography>
               </div>
               <div className={styles.address_details}>
                  <Typography color={"paragraph"} variant={"dataGridTitle"}>
                     <span>City: </span>
                     <span>{singleOrder?.city}</span>
                  </Typography>
                  <Typography color={"paragraph"} variant={"dataGridTitle"}>
                     <span>Address:</span>
                     <span>{singleOrder?.shippingAddress}</span>
                  </Typography>
                  <Typography color={"paragraph"} variant={"dataGridTitle"}>
                     <span>Phone Number: </span>
                     <span>{singleOrder?.phoneNumber}</span>
                  </Typography>
               </div>
            </div>
            <div className={styles.amount_wrapper}>
               <div className={styles.border_bottom}>
                  <Typography variant={"widgetTitle"}>
                     Total Summery
                  </Typography>
               </div>
               <div className={styles.amount_summery_top}>
                  <Typography color={"paragraph"} variant={"dataGridTitle"}>
                     <span>Sub Total:</span>
                     <span>TK {totalAmount}.00</span>
                  </Typography>
                  <Typography color={"paragraph"} variant={"dataGridTitle"}>
                     <span>Shipping Fee:</span>
                     <span>TK 00.00</span>
                  </Typography>
                  <Typography color={"paragraph"} variant={"dataGridTitle"}>
                     <span>Discount:</span>
                     <span> TK 00.00</span>
                  </Typography>
               </div>
               <div className={styles.amount_summery_bottom}>
                  <Typography color={"paragraph"} variant={"widgetTitle"} >
                     <span> Total Amount:</span>
                     <span>TK {totalAmount}.00</span>
                  </Typography>
                  <Typography variant={"small"} color={"paragraph"}>
                     <span>  Payment Id:</span>
                     <span>{singleOrder?.paymentId}</span>
                  </Typography>
                  <Typography variant={"small"} color={"paragraph"}>
                     Paid by Credit/Debit Card
                  </Typography>
               </div>
            </div>
         </div>
      </section >
   )
}

export default OrderDetailsView