import React, { useState, useContext } from 'react';
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
   const [isTouched, setIsTouched] = useState(false)
   const [hasError, setHasError] = useState(null)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate()
   const { dispatch } = useContext(Context)

   const getResponseData = (payload) => {
      const { userPayload, token } = payload
      if (window !== "undefined") {
         // localStorage.setItem("admin", JSON.stringify({ userPayload, token }));
         dispatch(getAuthToken({ userPayload, token }))
      }
      if (payload.token) {
         navigate("/home");
         toast.success(`Welcome Back! Mr.${payload?.userPayload?.name}`)
      }
   }
   const { isLoading, error, sendRequest, setError } = useHttpHook()

   const emailChangeHandler = (e) => {
      setEmail(e.target.value)
      if (e.target.value !== "") {
         setHasError(null);
         setError(null);
      }
   }
   const passwordChangeHandler = (e) => {
      if (e.target.value.length < 8) {
         setHasError({ name: "password", message: "Password Should be more then 8 characters" })
      }
      setPassword(e.target.value);

      if (e.target.value !== "") {
         setHasError(null);
         setError(null);
         setIsTouched(true)
      }
   }

   const submitHandler = (e) => {
      e.preventDefault();
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
                  {isLoading && <LinearProgress />}

               </div>
               <div className={styles.logo_wrapper}>
                  <img src="/assets/logo.png" alt="logo.png" />
               </div>
               <div className={styles.eye_image}>
                  <img src={isTouched ? "/assets/eyeclose.png" : "/assets/eyeopen.png"} alt="" />
               </div>
               {/* <Typography color={"primary"} variant={"subtitle"}>
                  ADMIN LOGIN
               </Typography> */}
               <form onSubmit={submitHandler}>
                  <div>
                     <Input
                        error={error || hasError ? true : false}
                        helperText={error ? error?.message : ""}
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
                        error={error || hasError ? true : false}
                        helperText={error || hasError ? error?.message || hasError?.message : ""}
                        required={true}
                        fullWidth
                        size={"small"}
                        label={"Password"}
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={passwordChangeHandler}
                        onBlur={() => { setIsTouched(!isTouched) }}
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
         <Footer />
      </>
   )
}

export default LoginPage;