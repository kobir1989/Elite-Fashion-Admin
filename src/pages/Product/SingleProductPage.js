import React, { useState, useEffect } from 'react'
import styles from "./styles/SingleProductPage.module.scss";
import BasicCard from "../../components/common/Card/BasicCard";
import { useHttpHook } from "../../hooks/useHttpHook";
import { useParams } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import Typography from '../../components/common/Typography/Typography';
import dayjs from 'dayjs';
import { Skeleton } from '@mui/material';
import Icons from '../../components/common/Icons/Icons';
const SingleProductPage = () => {
   const [product, setProduct] = useState([]);
   const { id } = useParams()
   const getSingleProductData = (data) => {
      console.log(data)
      setProduct(data?.products)
   }
   const { loading, hasError, sendRequest } = useHttpHook()

   useEffect(() => {
      sendRequest({ url: `/product/single/${id}` }, getSingleProductData)
   }, [id, sendRequest])
   return (
      <PageLayout>
         <BasicCard>
            <div className={styles.single_page_wrapper}>
               <div className={styles.product_img}>
                  <img src={product?.image} alt="" />
                  {loading &&
                     <Skeleton
                        sx={{ bgcolor: 'grey.900' }}
                        variant="rectangular"
                        width={210}
                        height={118}
                     />}
               </div>
               <div className={styles.product_details}>
                  <div className={styles.date_with_id}>
                     <Typography variant={"small"} color={"paragraph"}>
                        Launch  Date:  {dayjs(product?.createdAt).format("MMM D, YYYY h:mm A")}
                     </Typography>
                     <Typography variant={"small"} color={"paragraph"}>
                        Id:  {product?._id}
                     </Typography>
                  </div>
                  <div className={styles.category_sub_category}>
                     <Typography variant={"widgetTitle"} color={"paragraph"}>
                        Category: <span>{product?.category?.name}</span>
                     </Typography>
                     <Typography variant={"widgetTitle"} color={"paragraph"}>
                        Sub-Category: <span>{product?.subCategory?.name}</span>
                     </Typography>
                  </div>
                  <Typography variant={"h4"} color={"primary"}>
                     {product?.title}
                  </Typography>
                  <Typography variant={"body"}>
                     {product?.description}
                  </Typography>
                  <div className={styles.product_pricing_details}>
                     <Typography variant={"body"} color={"primary"}>
                        Regular Price: <span>&#2547; {product?.price}.00</span>
                     </Typography>
                     <Typography variant={"body"} color={"primary"}>
                        Sell Price:
                        <span>
                           &#2547; {product?.sellPrice}.00
                        </span>
                     </Typography>
                     <Typography variant={"body"} color={"primary"}>
                        Product Cost:
                        <span>
                           &#2547; {product?.productCost}.00
                        </span>
                     </Typography>
                     <Typography variant={"body"} color={"primary"}>
                        Stock : <span>{product?.stock}</span>
                     </Typography>
                     <Typography variant={"body"} color={"primary"}>
                        Sold: <span>{product?.sold}</span>
                     </Typography>
                  </div>
               </div>
            </div>
         </BasicCard>
      </PageLayout>

   )
}

export default SingleProductPage;