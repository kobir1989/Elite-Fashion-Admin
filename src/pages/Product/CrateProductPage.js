import React, { useState, useCallback, useContext } from 'react';
import PageLayout from "../../layouts/PageLayout";
import Form from '../../components/Form/Form';
import { validator } from "../../helper/inputValidator";
import { useHttpHook } from "../../hooks/useHttpHook";
import { Context } from "../../store/Context"
import { toast } from 'react-hot-toast';

const defaultProductValue = {
   title: "",
   category: "",
   subCategory: "",
   description: "",
   stock: "",
   productCost: "",
   price: "",
   sellPrice: ""
}

const CrateProductPage = () => {
   const [productValue, setProductValue] = useState(defaultProductValue);
   const [image, setImage] = useState("");
   const [imageUrl, setImageUrl] = useState("")
   const [hasError, setHasError] = useState({})
   const { state } = useContext(Context);
   const { authToken } = state;

   const getResponseData = (data) => {
      // if post Successfull, Set form to default state 
      if (data?.success) {
         setProductValue({
            title: "",
            category: "",
            subCategory: "",
            description: "",
            stock: "",
            productCost: "",
            price: "",
            sellPrice: ""
         });
         setImage("")
         setImageUrl("")
         toast.success("New Product Added")
      };
   }
   const { sendRequest, loading, error } = useHttpHook()

   //Input onChange Handler 
   const changeHandler = (e) => {
      const { name, value } = e.target;
      setProductValue({ ...productValue, [name]: value })
      if (e.target.value !== "") {
         setHasError({})
      }
   }

   //File Upload Handler
   const onDrop = useCallback(acceptedFiles => {
      setImage(acceptedFiles[0])
      setImageUrl(URL.createObjectURL(acceptedFiles[0]))
   }, []);

   //Remove File handler 
   const removeFileHandler = () => {
      setImageUrl("")
      setImage("")
   }
   //Form Submit Handler
   const submitHandler = (e) => {
      e.preventDefault()
      //Validator keeps reference in the memory so that its value can be use to check Error.
      const validated = validator(productValue, setHasError, image)
      setHasError(validated)
      // console.log(validated, "VALIDATED")
      if (Object.keys(validated).length > 0) {
         return;
      }
      // console.log(hasError, "HAS_ERROR")
      sendRequest(
         {
            url: `/create/product/${authToken?.userPayload?._id}`,
            method: "POST",
            postData: { ...productValue, image }
         }, getResponseData)

      //If Error response from server 
      if (error) {
         return toast.error(error?.message)
      }
   }
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
            onDrop={onDrop}
            loading={loading}
            imageUrl={imageUrl}
            removeFileHandler={removeFileHandler}
         />
      </PageLayout>
   )
}

export default CrateProductPage; 