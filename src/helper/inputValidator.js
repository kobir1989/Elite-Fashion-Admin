export const validator = (inputValue, setHasError, image) => {
   let newErrors = {};
   // console.log(inputValue, "VVVVVVV")
   if (image === "") {
      newErrors.file = "File type should be *.jpge or *.png or *.jpg";
   }
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
   if (inputValue?.price < 1) {
      newErrors.price = "Regular Price value should be more than 0";
   }
   if (inputValue?.sellPrice < 1) {
      newErrors.sellPrice = "Sell Price value should be more than 0";
   }
   if (inputValue?.productCost < 1) {
      newErrors.productCost = "Product Cost value should be more than 0";
   }
   return newErrors;
};