import React, { useEffect, useState } from 'react';
import styles from "./styles/Form.module.scss";
import Typography from '../common/Typography/Typography';
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import SelectOptions from '../common/SelectOptionInput/SelectOptionInput';
import BasicCard from "../common/Card/BasicCard";
import Icons from "../common/Icons/Icons";
import { getCategory } from "../../API/endpoints/category"
import { getSubCategory } from "../../API/endpoints/subCategory"

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
      fileHandler
   }
) => {
   const [categories, setCategories] = useState([])
   const [subCategories, setSubCategories] = useState([])
   // console.log(hasError, "EEEE")
   useEffect(() => {
      const fetchCtgData = async () => {
         try {
            const categoryData = await getCategory();
            setCategories(categoryData?.allCategories);
         } catch (err) {
            console.log(err)
         }
      }
      fetchCtgData()
   }, [])

   const fetchSubCtgData = async (id) => {
      try {
         const subCategoryData = await getSubCategory(id)
         setSubCategories(subCategoryData?.subCategories)
      } catch (err) {
         console.log(err)
      }
   }
   // console.log(categories, "C")
   return (
      <div className={styles.form_container}>
         <div className={styles.form_title_wrapper}>
            <Typography
               variant={"subtitle"}
               color={"paragraph"}>
               {formTitle}
            </Typography>
         </div>
         <BasicCard>
            <form onSubmit={submitHandler}>
               {/* Upload section Start*/}
               <div className={styles.upload_wrapper}>
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
                  <Button variant={"blue_btn"}
                     onClick={() => { document.getElementById("upload").click() }}>
                     <Icons name={"upload"} />
                     Select File
                  </Button>
                  <Typography
                     variant={"small"}
                     color={"light-gray"}>
                     Image Size (480 * 620) *Recommended
                  </Typography>
                  <input name="file" onChange={fileHandler} id="upload" type="file" style={{ display: "none" }} />
               </div>
               {/* Upload section end*/}

               {/**********Input section Start********/}
               <div>
                  <Input
                     error={hasError?.title ? true : false}
                     helperText={hasError?.title}
                     required={true}
                     label={titleLabel}
                     full={true}
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
                        options={subCategories}
                     />
                  </div>
               </div>
               {/* Options End*/}

               {isProduct &&
                  <>
                     {/* Description section start*/}
                     <div className={styles.description_wrapper}>
                        <textarea
                           className={hasError?.description || hasError.all ? `${styles.errorClass}` : ""}
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
                              error={hasError?.regularPrice ? true : false}
                              helperText={hasError?.regularPrice}
                              required={true}
                              label={"Regular Price"}
                              full={true}
                              name={"regularPrice"}
                              type={"number"}
                              value={inputValue?.regularPrice}
                              onChange={changeHandler}
                           />
                        </div>
                        <div className={styles.sell_price}>
                           <Input
                              error={hasError?.regularPrice ? true : false}
                              helperText={hasError?.regularPrice}
                              required={true}
                              label={"Sell Price (Optional)"}
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