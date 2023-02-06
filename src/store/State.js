//All the Initial States will be here 

export const initialState = {
   showProduct: false,
   showCategory: false,
   showSubCategory: false,
   authToken: JSON.parse(localStorage.getItem("admin")) || null,
   products: [],
   category: [],
   subCategory: null,
   isLoading: false,
   error: null
}
