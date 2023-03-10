import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import PageTitle from '../../components/common/PageTitle/PageTitle';
import MuiDataGrid from "../../components/dataGrid/MuiDataGrid";
import styles from "./styles/ReviewsListPage.module.scss";
import { reviewsColumns } from "../../components/dataGrid/dataGridColumns/reviewsColumn";

const ReviewsListPage = () => {
   return (
      <PageLayout>
         <section className={styles.review_list_page}>
            <PageTitle title={"Customer Reviews List"} showBtn={false} />
            <MuiDataGrid columns={reviewsColumns} />
         </section>
      </PageLayout>
   )
}

export default ReviewsListPage;