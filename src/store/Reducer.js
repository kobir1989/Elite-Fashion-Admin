
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

      default:
         return state;
   }
};