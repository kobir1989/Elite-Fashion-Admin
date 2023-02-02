export const productFormData = [
   {
      category: {
         variant: "option",
         type: "option",
         label: "Category",
         name: "category"
      },
      subCategory: {
         variant: "option",
         type: "option",
         label: "Sub Category",
         name: "subCategory"
      },
      title: {
         variant: "input",
         type: "text",
         label: "Product Title",
         name: "title"
      },
      description: {
         variant: "textArea",
         type: "textarea",
         label: "Product Description (character 700 max)",
         name: "description",
         row: 6,
         cols: 120
      },
      stock: {
         variant: "input",
         type: "number",
         label: "Stock",
         name: "stock"
      },
      productCost: {
         variant: "input",
         type: "number",
         label: "Product Cost",
         name: "productCost"
      },
      regularPrice: {
         variant: "input",
         type: "number",
         label: "Regular Price",
         name: "regularPrice"
      },
      sellPrice: {
         variant: "input",
         type: "number",
         label: "Sell Price",
         name: "sellPrice"
      },
   }
];

