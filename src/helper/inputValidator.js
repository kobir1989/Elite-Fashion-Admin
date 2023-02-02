export const validator = (inputValue) => {
   let newErrors = {};
   // console.log(inputValue, "VVVVVVV")
   if (Object.values(inputValue).some(value => value === '')) {
      newErrors.all = "Value Can not be Empty!";
   }
   if (inputValue?.title.length < 20) {
      newErrors.title = "Product title should be more than 20 characters";
   }
   if (inputValue?.description.length < 200) {
      newErrors.description = "Description should be more than 200 characters";
   }
   if (inputValue?.stock < 1) {
      newErrors.stock = "Stock value should be more than 0";
   }
   if (inputValue?.regularPrice < 1) {
      newErrors.regularPrice = "Regular Price value should be more than 0";
   }
   if (inputValue?.sellPrice < 1) {
      newErrors.sellPrice = "Sell Price value should be more than 0";
   }
   if (inputValue?.productCost < 1) {
      newErrors.productCost = "Product Cost value should be more than 0";
   }
   return newErrors;
};
