import React, { useEffect, useState } from 'react';
import styles from "./styles/Form.module.scss";
import Typography from '../common/Typography/Typography';
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import SelectOptions from '../common/SelectOptionInput/SelectOptionInput';
import BasicCard from "../common/Card/BasicCard";
import Icons from "../common/Icons/Icons";
import { getCategory } from "../../API/endpoints/category"
import { getSubCategory } from "../../API/endpoints/subCategory";
import { useDropzone } from 'react-dropzone';
import LinearProgress from '@mui/material/LinearProgress';

//TODO: Rrduce code from here. spllit upload section 
const Form = (
   {
      formTitle,
      isProduct = false,
      btnTitle,
      titleLabel,
      inputValue,
      changeHandler,
      submitHandler,
      hasError,
      onDrop,
      imageUrl,
      removeFileHandler,
      editProductId,
      loading
   }
) => {
   const [categories, setCategories] = useState([])
   const [subCategories, setSubCategories] = useState([])
   //Drag nad Drop 
   const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
      {
         onDrop,
         accept: {
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"]
         }
      })

   //Fetching sub-category data based on Category id, exmp: if user select Men category all the sub-category related to Men category will be fetched. 
   const fetchSubCtgData = async (id) => {
      try {
         const subCategoryData = await getSubCategory(id)
         setSubCategories(subCategoryData?.subCategories)
      } catch (err) {
         console.log(err)
      }
   }

   //Fetching category data from server
   useEffect(() => {
      const fetchCtgData = async () => {
         try {
            const categoryData = await getCategory();
            setCategories(categoryData?.allCategories);
            //fetchSubCtgData will Only Trigger if user wants to edit product.
            if (editProductId) {
               fetchSubCtgData(inputValue?.category)
            }

         } catch (err) {
            console.log(err)
         }
      }
      fetchCtgData()
   }, [editProductId])


   // console.log(categories, "CATEGORY")
   return (
      <div className={styles.form_container}>
         <div className={styles.form_title_wrapper}>
            <Typography
               variant={"subtitle"}
               color={"paragraph"}>
               {formTitle}
            </Typography>
            {loading &&
               <div className={styles.loading_progress}>
                  <LinearProgress sx={{ borderRadius: "8px 8px 0 0 " }} />
               </div>}
         </div>
         <BasicCard>
            <form onSubmit={submitHandler}>

               {/* Upload section Start*/}
               <div className={hasError?.file ? `${styles.upload_wrapper} ${styles.imageError}` : `${styles.upload_wrapper}`}  {...getRootProps()}>
                  {hasError?.file
                     &&
                     <Typography variant={"small"} color={"red"}>
                        {hasError?.file}
                     </Typography>
                  }
                  {isDragActive &&
                     <div className={isDragReject ? `${styles.drag_error}` : `${styles.drag_active}`}>
                        <Typography
                           variant={"body"}
                           color={isDragReject ? "red" : "primary"}>
                           {isDragReject ? "Upload only .jpeg .png .jpg Image" : " Drop the files here"}

                        </Typography>
                     </div>
                  }
                  <div className={styles.upload_body}>
                     <Icons
                        name={"camera"}
                        size={"2.5rem"}
                        color={"#aeb4be"} />
                     <Typography
                        variant={"widgetTitle"}
                        color={"paragraph"}>
                        Drag & drop product image here
                     </Typography>
                     <div className={styles.with_border}>
                        <Typography
                           variant={"small"}
                           color={"light-gray"}>
                           OR
                        </Typography>
                     </div>
                  </div>
                  <Button variant={"blue_btn"}>
                     <Icons name={"upload"} />
                     Select File
                  </Button>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     Image Size (480 * 620) image Type *JPEG, *PNG and *JPG
                  </Typography>
                  <input type={"file"} {...getInputProps()} style={{ display: "none" }} />

                  {/* Upload section end*/}
               </div>

               {/*Display selected Image */}
               {imageUrl &&
                  <div className={styles.display_selected_image}>
                     <img src={imageUrl} alt="img.png" />
                     <Button
                        variant={"icon-btn-nomal"}
                        onClick={removeFileHandler}>
                        <Icons
                           name={"cancel"}
                           color={"#cc2121"}
                           size={"1.2rem"} />
                     </Button>
                  </div>
               }

               {/**********Input section Start********/}
               <div className={styles.product_title}>
                  <Input
                     error={hasError?.title ? true : false}
                     helperText={hasError?.title}
                     required={true}
                     label={titleLabel}
                     fullWidth={true}
                     type={"text"}
                     value={inputValue?.title}
                     onChange={changeHandler}
                     name={"title"}
                  />
               </div>
               {/* OPtions Start*/}
               < div className={styles.options_wrapper} >
                  <div className={styles.category_options}>
                     <SelectOptions
                        value={inputValue?.category}
                        onChange={(e) => {
                           changeHandler(e);
                           fetchSubCtgData(e.target.value)
                        }}
                        name={"category"}
                        label={"Category"}
                        options={categories}
                     />
                  </div>
                  <div className={styles.sub_category_options}>
                     <SelectOptions
                        value={inputValue?.subCategory}
                        onChange={changeHandler}
                        name={"subCategory"}
                        label={"Sub Category"}
                        options={subCategories || inputValue?.subCategory}
                     />
                  </div>
               </div>
               {/* Options End*/}

               {isProduct &&
                  <>
                     {/* Description section start*/}
                     <div className={styles.description_wrapper}>
                        <textarea
                           className={hasError?.description || hasError?.all ? `${styles.errorTextarea}` : ""}
                           rows={6}
                           value={inputValue?.description}
                           onChange={changeHandler}
                           name={"description"}
                           placeholder={"Product Description (character 700 max)*"}
                           cols={120}>
                        </textarea>
                        {hasError &&
                           <Typography variant={"small"} color={"red"}>
                              {hasError?.description || hasError.all ? hasError?.description || hasError.all : ""}
                           </Typography>}
                     </div>
                     {/* Description section end*/}

                     {/* Pricing section Start*/}
                     <div className={styles.stock_and_cost_wrapper}>
                        <div className={styles.stock}>
                           <Input
                              error={hasError?.stock ? true : false}
                              helperText={hasError?.stock}
                              required={true}
                              label={"Stock"}
                              full={true}
                              type={"number"}
                              name={"stock"}
                              value={inputValue?.stock}
                              onChange={changeHandler}
                           />
                        </div>
                        <div className={styles.cost}>
                           <Input
                              error={hasError?.productCost ? true : false}
                              helperText={hasError?.productCost}
                              required={true}
                              label={"Product Cost"}
                              full={true}
                              type={"number"}
                              name={"productCost"}
                              value={inputValue?.productCost}
                              onChange={changeHandler}
                           />
                        </div>
                     </div>
                     <div className={styles.price_wrapper}>
                        <div className={styles.regular_price}>
                           <Input
                              error={hasError?.price ? true : false}
                              helperText={hasError?.price}
                              required={true}
                              label={"Regular Price"}
                              full={true}
                              name={"price"}
                              type={"number"}
                              value={inputValue?.price}
                              onChange={changeHandler}
                           />
                        </div>
                        <div className={styles.sell_price}>
                           <Input
                              error={hasError?.sellPrice ? true : false}
                              helperText={hasError?.sellPrice}
                              required={true}
                              label={"Sell Price"}
                              full={true}
                              name={"sellPrice"}
                              type={"number"}
                              value={inputValue?.sellPrice}
                              onChange={changeHandler}
                           />
                        </div>
                     </div>
                     {/* Pricing section End*/}
                  </>
               }
               {/* Input section End*/}

               <div className={styles.submit_btn}>
                  <Button type="submit" variant={"blue_btn"}>
                     {btnTitle}
                  </Button>
               </div>
            </form>
         </BasicCard>
      </div >
   )
}

export default Form