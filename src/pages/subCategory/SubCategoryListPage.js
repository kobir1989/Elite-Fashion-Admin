import React, { useEffect, useState } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDataGrid from "../../components/dataGrid/MuiDataGrid";
import { subCategoryColumns } from "../../components/dataGrid/dataGridColumns/subCategoryColumns";
import styles from "./styles/SubCategoryListPage.module.scss";
import Button from '../../components/common/Button/Button';
import Typography from '../../components/common/Typography/Typography';
import { Link } from "react-router-dom";
import { useHttpHook } from "../../hooks/useHttpHook";

const SubCategoryListPage = () => {
   const [subCategory, setSubCategory] = useState([])
   const getSubCategoryData = (data) => {
      console.log(data)
      setSubCategory(data?.subCategories)
   }
   const { sendRequest, hasError, loading } = useHttpHook()
   useEffect(() => {
      sendRequest({ url: "/sub-category/list/all" }, getSubCategoryData)
   }, [])
   return (
      <PageLayout>
         <div className={styles.sub_category_page_wrapper}>
            <div className={styles.section_title_wrapper}>
               <Typography variant={"subtitle"} color={"primary"}>
                  Products List
               </Typography>
               <Link to={"/product/create-new"}>
                  <Button variant={"blue_btn"}>
                     Create New Product
                  </Button>
               </Link>
            </div>
            <div className={styles.sub_category_data_grid_wrapper}>
               <MuiDataGrid
                  columns={subCategoryColumns}
                  rows={subCategory}
                  loading={loading}
                  error={hasError}
                  rowHeight={100}
                  page={5}
                  deleteUrl={"/sub-category/remove"}
               />
            </div>
         </div>
      </PageLayout>
   )
}

export default SubCategoryListPage;