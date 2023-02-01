
// Reducer
export default (state, action) => {
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
      default:
         return state;
   }
};