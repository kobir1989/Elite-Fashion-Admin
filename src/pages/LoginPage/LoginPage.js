import React, { useState } from 'react';
import styles from "./styles/Login.module.scss";
import Input from "../../components/common/Input/Input";
import Icons from '../../components/common/Icons/Icons';
import Typography from '../../components/common/Typography/Typography';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   return (
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
                  fullWidth
                  size={"small"}
                  label={"Email"}
                  type={"email"}
                  value={email}
               />
            </div>
            <div className={styles.password_input_feild}>
               <div className={styles.password_view_icon_wrapper}>
                  {showPassword ?
                     <Icons
                        name={"viewOn"}
                        color={"#727272"}
                        size={"1.2rem"} />
                     :
                     <Icons
                        name={"viewOff"}
                        color={"#727272"}
                        size={"1.2rem"} />
                  }
               </div>
               <Input
                  fullWidth
                  size={"small"}
                  label={"Password"}
                  type={showPassword ? "text" : "password"}
                  value={password}
               />
            </div>
            <Button>
               <Icons name={"unlock"} />
               Login
            </Button>
         </form>
         <Typography variant={"body"}>
            <Link to="#"> Forget Password?</Link>
         </Typography>
      </div>
   )
}

export default LoginPage;