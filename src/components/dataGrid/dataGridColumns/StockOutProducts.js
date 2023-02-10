import Typography from "../../common/Typography/Typography";

export const stockOutColumns = [
   {
      field: "_id", headerName: "Product Overview", flex: 1, width: 300, renderCell: (params) => {
         return (
            <div className="product_details">
               <img src={params?.row?.image} alt="product.png" />
               <div className="price_and_id">
                  <Typography variant={"dataGridTitle"}>
                     {params?.row?.title}
                  </Typography>
                  <Typography variant={"dataGridSmall"} color={"paragraph"}>
                     ID: {params?.row?._id}
                  </Typography>
               </div>
            </div>
         )
      }
   },
   {
      field: "subCategory", headerName: "Category", flex: 1, width: 250,
      renderCell: (params) => {
         return <Typography variant={"dataGridSubTitle"}>
            {params?.row?.category?.name} / {params?.row?.subCategory?.name}
         </Typography>
      }
   },
   {
      field: "Stock", headerName: "Availability", flex: 1, align: "center", headerAlign: "center", width: 150, renderCell: (params) => {
         return <div
            className={"with__bg red_bg"}>
            <Typography
               variant={"small"}
               color={"red"}>
               {params?.row?.stock}
            </Typography>
         </div>
      }
   },
   {
      field: "price", headerName: "Product Cost", flex: 1, headerAlign: "center", align: "center", width: 200, renderCell: (params) => {
         return (
            <Typography variant={"body"}>
               &#2547; {params?.row?.price.toFixed(2)}
            </Typography>
         )
      }
   },
]

