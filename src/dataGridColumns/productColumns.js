import Typography from "../components/common/Typography/Typography";

export const productColumns = [
   {
      field: "_id", headerName: "Product Overview", width: 290, renderCell: (params) => {
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
      field: "subCategory", headerName: "Category", width: 250,
      renderCell: (params) => {
         return <Typography variant={"dataGridSubTitle"}>
            {params?.row?.category?.name} / {params?.row?.subCategory?.name}
         </Typography>
      }
   },
   {
      field: "Stock", headerName: "Availability", align: "center", headerAlign: "center", width: 140, renderCell: (params) => {
         return <div
            className={params?.row?.stock <= 0 ? "with__bg red_bg" : "with__bg gray_bg"}>
            <Typography
               variant={"small"}
               color={params?.row?.stock <= 0 ? "red" : "green"}>
               {params?.row?.stock}
            </Typography>
         </div>
      }
   },
   {
      field: "sold", headerName: "Sales", align: "center", headerAlign: "center", width: 140, renderCell: (params) => {
         return (
            <div className="with__bg blue_bg">
               <Typography variant={"small"} color={"blue"}>
                  {params?.row?.sold}
               </Typography>
            </div>
         )
      }
   },
   {
      field: "price", headerName: "Product Cost", headerAlign: "center", align: "center", width: 150, renderCell: (params) => {
         return (
            <Typography variant={"body"}>
               &#2547; {params?.row?.price.toFixed(2)}
            </Typography>
         )
      }
   },

]
