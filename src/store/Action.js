//All The Actions will be here any component has access to it. 
export const toggleShowProduct = payload => ({
   type: "TOGGLE_SHOW_PRODUCT",
   payload
});

export const toggleShowCategory = payload => ({
   type: "TOGGLE_SHOW_CATEGORY",
   payload
});


export const toggleShowSubCategory = payload => ({
   type: "TOGGLE_SHOW_SUB_CATEGORY",
   payload
});

export const getAuthToken = payload => ({
   type: "AUTH_TOKEN",
   payload
});

export const logout = _payload => ({
   type: "LOGOUT",
   payload: null
});

export const getAllProductData = payload => ({
   type: "PRODUCT_DATA",
   payload
});

export const getAllCategoryData = payload => ({
   type: "CATEGORY_DATA",
   payload
});

export const setIsLoading = payload => ({
   type: "LOADING_STATE",
   payload
});

export const setError = payload => ({
   type: "ERROR_STATE",
   payload
});

export const selectedSubCategory = payload => ({
   type: "SELECTED_SUB_CATEGORY",
   payload
});

export const updateState = payload => ({
   type: "UPDATE_STATE",
   payload
});

export const getSelectedOrder = payload => ({
   type: "SELECTED_ORDER",
   payload
});