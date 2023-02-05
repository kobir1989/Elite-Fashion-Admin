import React, { useEffect, useState } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDateGrid from "../../components/dataGrid/MuiDataGrid";
import { categoryColumns } from '../../dataGridColumns/categoryColumns';
import styles from "./styles/CategoryListPage.module.scss";
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { getCategory } from "../../API/endpoints/category";
const CategoryListPage = () => {
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)
   const [categories, setCategories] = useState([])
   //TODO: Arrange all Api
   const fetchCategory = async () => {
      try {
         setLoading(true)
         const categories = await getCategory();
         if (categories.success) {
            setLoading(false)
            setCategories(categories?.allCategories)
         }
      } catch (err) {
         setError(err)
      }
   }
   useEffect(() => {
      fetchCategory()
   }, [])
   // console.log(categories, "CTT")
   return (
      <PageLayout>
         <div className={styles.category_page_wrapper}>
            <div className={styles.category_title_wrapper}>
               <Typography variant={"subtitle"} color={"primary"}>
                  Category List
               </Typography>
               <Button variant={"blue_btn"}>
                  Create New Category
               </Button>
            </div>
            <div className={styles.data_grid_wrapper}>
               <MuiDateGrid
                  columns={categoryColumns}
                  rows={categories}
                  rowHeight={100}
                  loading={loading}
                  error={error}
               />
            </div>
         </div>
      </PageLayout>
   )
}

export default CategoryListPage;