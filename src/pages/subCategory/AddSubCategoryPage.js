import React, { useState, useCallback } from 'react';
import PageLayout from "../../layouts/PageLayout";
import Form from "../../components/Form/Form";
import { useHttpHook } from "../../hooks/useHttpHook";
import { validator } from "../../helper/inputValidator";
import toast from 'react-hot-toast';

const defaultSubCategoryValue = {
   title: "",
   category: "",
}
const AddSubCategoryPage = ({ id }) => {
   const [subCategoryValue, setSubCategoryValue] = useState(defaultSubCategoryValue);
   const [image, setImage] = useState("");
   const [imageUrl, setImageUrl] = useState("");
   const [hasError, setHasError] = useState({});

   const getResponseData = (data) => {
      // if post Successfull, Set form to default state 
      if (data?.success) {
         setSubCategoryValue({
            title: "",
            category: "",
         });
         setImage("")
         setImageUrl("")
         toast.success("New Product Added")
      };
   }
   const { sendRequest, loading, hasError: error } = useHttpHook();

   //Input onChange Handler 
   const changeHandler = (e) => {
      const { name, value } = e.target;
      setSubCategoryValue({ ...subCategoryValue, [name]: value })
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
   const subCategorysubmitHandler = (e) => {
      e.preventDefault()
      //Validator keeps reference in the memory so that its value can be use to check Error.
      const validated = validator(subCategoryValue, setHasError, image)
      setHasError(validated)
      // console.log(validated, "VALIDATED")
      if (Object.keys(validated).length > 0) {
         return;
      }
      // console.log(hasError, "HAS_ERROR")
      sendRequest(
         {
            url: `/sub-category/create`,
            method: "POST",
            postData: { ...subCategoryValue, image }
         }, getResponseData)

      //If Error response from server 
      if (error) {
         return toast.error(error?.message)
      }
   }
   return (
      <PageLayout>
         <Form
            formTitle={"Create New Sub-Category"}
            isSubCategory={true}
            btnTitle={"Save Sub-Category"}
            titleLabel={"Sub-Category Title"}
            onDrop={onDrop}
            inputValue={subCategoryValue}
            hasError={hasError}
            loading={loading}
            changeHandler={changeHandler}
            imageUrl={imageUrl}
            submitHandler={subCategorysubmitHandler}
         />
      </PageLayout>
   )
}

export default AddSubCategoryPage;