import Typography from "../../common/Typography/Typography";

export const categoryColumns = [
   {
      field: "id", headerName: "Category Id", flex: 1, width: 300, renderCell: (params) => {
         return (
            <Typography variant={"body"} color={"paragraph"}>
               ID: {params?.row?._id}
            </Typography>
         )
      }
   },
   {
      field: "name", headerName: "Category Name", flex: 1, headerAlign: "center", align: "center", width: 300, renderCell: (params) => {
         return (
            <div className="with__bg blue_bg">
               <Typography variant={"dataGridTitle"}>
                  {params?.row?.name}
               </Typography>
            </div>
         )
      }
   },
   {
      field: "image", headerName: "Category Image", flex: 1, headerAlign: "center", align: "center", width: 300, renderCell: (params) => {
         return (
            <div className="category_img">
               <img src={params?.row?.image} alt="product.png" />
            </div>
         )
      }
   }
]

