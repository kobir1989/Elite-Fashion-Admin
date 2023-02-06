import React, { useContext } from 'react';
import CreateCategoryPage from './CreateCategoryPage';
import { useParams } from "react-router-dom";
import { Context } from "../../store/Context";
const EditCategory = () => {
   const { id } = useParams();
   const { state, dispatch } = useContext(Context);
   const { category } = state;

   const selectedCategory = category.filter(item => item?._id === id)
   const image = selectedCategory[0]?.image
   const [editCategory] = selectedCategory.map((category) => {
      return {
         title: category?.name,
         imageId: category?.imageId
      }
   });
   return (
      <CreateCategoryPage
         id={id}
         updateImage={image}
         updateCategory={editCategory} />
   )
}

export default EditCategory;