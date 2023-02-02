
// Reducer
export const reducer = (state, action) => {
   switch (action.type) {
      case "TOGGLE_SHOW_PRODUCT":
         return {
            ...state,
            showProduct: action.payload
         };
      case "TOGGLE_SHOW_CATEGORY":
         return {
            ...state,
            showCategory: action.payload
         };
      case "TOGGLE_SHOW_SUB_CATEGORY":
         return {
            ...state,
            showSubCategory: action.payload
         }
      case "AUTH_TOKEN":
         return {
            ...state,
            authToken: action.payload
         }
      case "LOGOUT":
         return {
            ...state,
            authToken: action.payload || null
         }
      case "PRODUCT_DATA":
         return {
            ...state,
            products: action.payload
         }
      case "LOADING_STATE":
         return {
            ...state,
            isLoading: action.payload
         }
      case "ERROR_STATE":
         return {
            ...state,
            error: action.payload
         }
      default:
         return state;
   }
};