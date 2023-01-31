import React, { useEffect, useState } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDataGrid from '../../components/dataGrid/DataGrid';
import styles from "./styles/ProductListPage.module.scss";
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { useHttpHook } from "../../hooks/useHttpHook";
import { userColumns } from "../../dataGridColumns/userColumns";

const ProductsListPage = () => {
   const [userData, setUserData] = useState([])
   const getResponseData = (data) => {
      setUserData(data)
   }
   const { isLoading, error, sendRequest, } = useHttpHook()
   useEffect(() => {
      sendRequest({ url: "https://jsonplaceholder.typicode.com/users" }, getResponseData)
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
               <MuiDataGrid loading={isLoading} error={error} rows={userData} columns={userColumns} />
            </div>
         </div>
      </PageLayout>
   )
}

export default ProductsListPage;