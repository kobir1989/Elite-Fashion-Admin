import React, { useState } from 'react';
import styles from "./styles/Login.module.scss";
import Input from "../../components/common/Input/Input";
import Icons from '../../components/common/Icons/Icons';
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const LoginPage = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [hasError, setHasError] = useState(null)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   return (
      <>
         <header className={styles.header_section}>
            <Typography variant={"subtitle"}>Elite Fashion Admin Dashboard</Typography>
         </header>
         <main className={styles.main_section}>
            <div className={styles.login_from_wrapper}>
               <div className={styles.logo_wrapper}>
                  <img src="/assets/logo.png" alt="logo.png" />
               </div>
               <Typography color={"primary"} variant={"subtitle"}>
                  ADMIN LOGIN
               </Typography>
               <form>
                  <div>
                     <Input
                        error={hasError ? true : false}
                        helperText={hasError}
                        required={true}
                        fullWidth
                        size={"small"}
                        label={"Email"}
                        type={"email"}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
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
                        error={hasError ? true : false}
                        helperText={hasError}
                        required={true}
                        fullWidth
                        size={"small"}
                        label={"Password"}
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
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