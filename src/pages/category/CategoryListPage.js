import React, { useContext } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDateGrid from "../../components/dataGrid/MuiDataGrid";
import { categoryColumns } from "../../components/dataGrid/dataGridColumns/categoryColumns";
import styles from "./styles/CategoryListPage.module.scss";
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import { Context } from "../../store/Context";
const CategoryListPage = () => {
   const { state } = useContext(Context);
   const { category, isLoading, error } = state;
   return (
      <PageLayout>
         <div className={styles.category_page_wrapper}>
            <div className={styles.category_title_wrapper}>
               <Typography variant={"subtitle"} color={"primary"}>
                  Category List
               </Typography>
               <Link to={"/category/create-new"}>
                  <Button variant={"blue_btn"}>
                     Create New Category
                  </Button>
               </Link>
            </div>
            <div className={styles.data_grid_wrapper}>
               <MuiDateGrid
                  columns={categoryColumns}
                  rows={category}
                  rowHeight={100}
                  loading={isLoading}
                  error={error}
                  editUrl={"/category/edit"}
                  deleteUrl={"/category/remove"}
               />
            </div>
         </div>
      </PageLayout>
   )
}

export default CategoryListPage;