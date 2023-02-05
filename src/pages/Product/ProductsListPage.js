import React, { useContext } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDataGrid from '../../components/dataGrid/MuiDataGrid';
import styles from "./styles/ProductListPage.module.scss";
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { productColumns } from "../../dataGridColumns/productColumns";
import { Context } from "../../store/Context";

const ProductsListPage = () => {
   const { state } = useContext(Context);
   const { products, isLoading, error } = state;
   // console.log(products)

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
                  rows={products}
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