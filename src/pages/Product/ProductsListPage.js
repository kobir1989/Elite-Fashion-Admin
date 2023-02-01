import React, { useEffect, useState } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDataGrid from '../../components/dataGrid/MuiDataGrid';
import styles from "./styles/ProductListPage.module.scss";
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { useHttpHook } from "../../hooks/useHttpHook";
import { productColumns } from "../../dataGridColumns/productColumns";

const ProductsListPage = () => {
   const [userData, setUserData] = useState([])
   const getResponseData = (data) => {
      console.log(data)
      setUserData(data?.products)
   }
   const { isLoading, error, sendRequest, } = useHttpHook()
   useEffect(() => {
      sendRequest({ url: "/products/all" }, getResponseData)
   }, [])
   console.log(userData)
   return (
      <PageLayout>
         <div className={styles.product_list_page_wrapper}>
            <div className={styles.section_title_wrapper}>
               <Typography variant={"subtitle"} color={"primary"}>
                  Products List
               </Typography>
               <Button variant={"blue_btn"}>Create New Product</Button>
            </div>
            <div className={styles.data_grid_wrapper}>
               <MuiDataGrid
                  loading={isLoading}
                  error={error}
                  rows={userData}
                  columns={productColumns}
                  rowHeight={70}
                  page={7}
               />
            </div>
         </div>
      </PageLayout>
   )
}

export default ProductsListPage;