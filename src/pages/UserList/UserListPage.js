import React, { useState, useEffect } from 'react';
import PageLayout from "../../layouts/PageLayout";
import MuiDataGrid from '../../components/dataGrid/MuiDataGrid';
import { userColumns } from "../../components/dataGrid/dataGridColumns/userColumns";
import Typography from '../../components/common/Typography/Typography';
import styles from "./styles/UserListPage.module.scss";
import { useHttpHook } from "../../hooks/useHttpHook";

const UserListPage = () => {
   const [users, setUsers] = useState([]);
   const getUserData = (data) => {
      setUsers(data?.user)
   }
   const { hasError, sendRequest, loading } = useHttpHook();
   useEffect(() => {
      sendRequest({ url: "/user/all/profile" }, getUserData)
   }, [])
   return (
      <PageLayout>
         <div className={styles.user_page_wrapper}>
            <div className={styles.user_title_wrapper}>
               <Typography variant={"subtitle"} color={"primary"}>
                  User List
               </Typography>
            </div>
            <div>
               <MuiDataGrid
                  isOrder={true}
                  loading={loading}
                  error={hasError}
                  rows={users}
                  rowHeight={100}
                  columns={userColumns} />
            </div>
         </div>
      </PageLayout>
   )
}

export default UserListPage;