import Typography from "../../common/Typography/Typography";

export const reviewsColumns = [
   {
      field: "user", headerName: "Customer", minWidth: 300, renderCell: (params) => {
         return (
            <div className="product_details">
               <img src={params?.row?.image} alt="product.png" />
               <div className="price_and_id">
                  <Typography variant={"dataGridTitle"} color={"blue"}>
                     {params?.row?.title}
                  </Typography>
                  <Typography variant={"dataGridSmall"} color={"blue"}>
                     ID: {params?.row?._id}
                  </Typography>
               </div>
            </div>
         )
      }
   },
   {
      field: "product", headerName: "Product", minWidth: 430, align: "center", headerAlign: "center",
      renderCell: (params) => {
         return <Typography variant={"dataGridSubTitle"} color={"blue"}>
            {""}
         </Typography>
      }
   },
   {
      field: "review", headerName: "Review", align: "center", minWidth: 320, headerAlign: "center", renderCell: (params) => {
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


]

