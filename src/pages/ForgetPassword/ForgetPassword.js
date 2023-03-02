import React from 'react';
import Typography from '../../components/common/Typography/Typography';
import AuthPageLayout from "../../layouts/AuthPageLayout";
import ForgetPasswordForm from './Components/ForgetPasswordForm';
import styles from "./styles/ForgetPassword.module.scss";

const ForgetPassword = () => {
   return (
      <AuthPageLayout>
         <div className={styles.forget_password_page_wrapper}>
            <ForgetPasswordForm />
         </div>

      </AuthPageLayout>
   )
}

export default ForgetPassword;