import React, { useState, useContext, useEffect } from 'react';
import styles from "./styles/Login.module.scss";
import Input from "../../components/common/Input/Input";
import Icons from '../../components/common/Icons/Icons';
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useHttpHook } from "../../hooks/useHttpHook";
import LinearProgress from '@mui/material/LinearProgress';
import { toast } from 'react-hot-toast';
import { getAuthToken } from "../../store/Action";
import { Context } from "../../store/Context";

const LoginPage = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [vaidationError, setValidationError] = useState(null)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate()
   const { dispatch, state } = useContext(Context)

   // useEffect(() => {
   //    if (state.authToken.token) {
   //       return navigate("/")
   //    }
   // }, [])
   const getResponseData = (payload) => {
      const { userPayload, token } = payload;
      dispatch(getAuthToken({ userPayload, token }));
      if (payload.token) {
         navigate("/");
         toast.success(`Welcome Back! Mr.${payload?.userPayload?.name}`)
      }
   };

   const { sendRequest, loading, hasError } = useHttpHook()

   const emailChangeHandler = (e) => {
      setEmail(e.target.value)
      if (e.target.value !== "") {
         setValidationError(null);
      }
   };

   const passwordChangeHandler = (e) => {
      setPassword(e.target.value);
      if (e.target.value !== "") {
         setValidationError(null);
      }
   };

   const submitHandler = (e) => {
      e.preventDefault();
      if (password.length < 8) {
         return setValidationError({ name: "password", message: "Password Should be more then 8 characters" })
      }
      sendRequest(
         {
            method: "POST",
            url: "/admin/login",
            postData: {
               email,
               password
            }
         },
         getResponseData)
   }
   return (
      <>
         <header className={styles.header_section}>
            <Typography variant={"subtitle"}>Elite Fashion Admin Dashboard</Typography>
         </header>
         <main className={styles.main_section}>
            <div className={styles.login_from_wrapper}>
               <div className={styles.loading}>
                  {loading && <LinearProgress />}

               </div>
               <div className={styles.logo_wrapper}>
                  <img src="/assets/logo.png" alt="logo.png" />
                  <Typography color={"primary"} variant={"subtitle"}>
                     ADMIN LOGIN
                  </Typography>
               </div>
               <form onSubmit={submitHandler}>
                  <div className={styles.email_input_feild}>
                     <Input
                        error={hasError || vaidationError ? true : false}
                        helperText={hasError ? hasError?.message : ""}
                        required={true}
                        fullWidth
                        size={"small"}
                        label={"Email"}
                        type={"email"}
                        value={email}
                        onChange={emailChangeHandler}
                     />
                  </div>
                  <div className={styles.password_input_feild}>
                     <div className={styles.password_view_icon_wrapper}
                        onClick={() => { setShowPassword(!showPassword) }}>
                        {showPassword ?
                           <Icons
                              name={"viewOff"}
                              color={"#727272"}
                              size={"1.2rem"} />
                           :
                           <Icons
                              name={"viewOn"}
                              color={"#727272"}
                              size={"1.2rem"} />
                        }
                     </div>
                     <Input
                        error={vaidationError || hasError ? true : false}
                        helperText={vaidationError ? vaidationError?.message : hasError?.message}
                        required={true}
                        fullWidth
                        size={"small"}
                        label={"Password"}
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={passwordChangeHandler}
                     />
                  </div>
                  <Button variant={"primary"} type={"submit"}>
                     <Icons name={"unlock"} />
                     Login
                  </Button>
               </form>
               <Typography variant={"body"}>
                  <Link to="#"> Forget Password?</Link>
               </Typography>
            </div>
         </main>
         <section className={styles.footer}>
            <Footer />
         </section>
      </>
   )
}

export default LoginPage;