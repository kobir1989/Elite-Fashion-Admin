import Typography from "../../common/Typography/Typography";
import dayjs from "dayjs";

export const orderColumns = [
   {
      field: "id", headerName: "Order Id", width: 250, renderCell: (params) => {
         return (
            <Typography variant={"small"} color={"paragraph"}>
               ID: {params?.row?._id}
            </Typography>
         )
      }
   },
   {
      field: "phone", headerName: "Customer Phone", headerAlign: "left", align: "left", width: 200, renderCell: (params) => {
         return (
            <div className="with__bg gray_bg">
               <Typography variant={"dataGridTitle"}>
                  {params?.row?.phoneNumber}
               </Typography>
            </div>
         )
      }
   },
   {
      field: "address", headerName: "Shipping Address", headerAlign: "left", align: "left", width: 350, renderCell: (params) => {
         return (
            <div className="row_address__wrapper">
               <Typography variant={"body"} color={"primary"}>
                  City: {params?.row?.city}
               </Typography>
               <Typography variant={"small"} color={"primary"}>
                  Shipping Address: {params?.row?.shippingAddress}
               </Typography>
            </div>
         )
      }
   },
   {
      field: "date", headerName: "Order Date", headerAlign: "left", align: "left", width: 200, renderCell: (params) => {
         return (
            <Typography variant={"small"} color={"paragraph"}>
               {dayjs(params?.row?.updatedAt).format("MMM D, YYYY h:mm A")}
            </Typography>
         )
      }
   },
   {
      field: "status", headerName: "Order Status", headerAlign: "left", align: "left", width: 150, renderCell: (params) => {
         return (
            <div className={`with__bg ${params?.row?.orderStatus === "PENDING" ? "yellow_bg" :
               params?.row?.orderStatus === "SHIPPED" ? "blue_bg" :
                  params?.row?.orderStatus === "DELIVERED" ? "green_bg" :
                     params?.row?.orderStatus === "CANCELED" ? "red_bg" : ""}`}>
               <Typography variant={"small"} color={"paragraph"}>
                  {params?.row?.orderStatus}
               </Typography>
            </div>
         )
      }
   },


]

