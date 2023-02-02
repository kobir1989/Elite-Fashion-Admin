import React, { useState } from 'react';
import PageLayout from "../../layouts/PageLayout";
import Form from '../../components/Form/Form';
import { validator } from "../../helper/inputValidator";
import { setError } from '../../store/Action';

const defaultProductValue = {
   file: "",
   title: "",
   category: "",
   subCategory: "",
   description: "",
   stock: "",
   productCost: "",
   regularPrice: "",
   sellPrice: ""
}

const CrateProductPage = () => {
   const [productValue, setProductValue] = useState(defaultProductValue);
   const [hasError, setHasError] = useState({})

   const changeHandler = (e) => {
      const { name, value } = e.target;
      setProductValue({ ...productValue, [name]: value })
      if (e.target.value !== "") {
         setHasError({})
      }
   }
   const fileHandler = (e) => {
      const selectdFile = e.target.files[0];
      setProductValue({ ...productValue, file: selectdFile })
   }
   const submitHandler = (e) => {
      e.preventDefault()
      setHasError(validator(productValue))
   }
   // console.log(productValue)
   return (
      <PageLayout>
         <Form
            formTitle={"Create New Prooduct"}
            isProduct={true}
            btnTitle={"Save Product"}
            titleLabel={"Product Title"}
            changeHandler={changeHandler}
            inputValue={productValue}
            setInputValue={setProductValue}
            submitHandler={submitHandler}
            hasError={hasError}
            setHasError={setHasError}
            fileHandler={fileHandler}
         />
      </PageLayout>
   )
}

export default CrateProductPage; 