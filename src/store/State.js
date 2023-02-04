//All the Initial States will be here 

export const initialState = {
   showProduct: false,
   showCategory: false,
   showSubCategory: false,
   authToken: JSON.parse(localStorage.getItem("admin")) || null,
   products: [],
   isLoading: false,
   error: null
}