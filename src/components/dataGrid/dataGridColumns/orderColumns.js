import Typography from "../../common/Typography/Typography";
import dayjs from "dayjs";

export const orderColumns = [
   {
      field: "id", headerName: "Order Id", flex: 1, width: 250, renderCell: (params) => {
         return (
            <Typography variant={"small"} color={"paragraph"}>
               ID: {params?.row?._id}
            </Typography>
         )
      }
   },
   {
      field: "phone", headerName: "Customer Phone", flex: 1, headerAlign: "left", align: "left", width: 200, renderCell: (params) => {
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
      field: "address", headerName: "Shipping Address", flex: 1, headerAlign: "left", align: "left", width: 350, renderCell: (params) => {
         console.log(params?.row?.row)
         return (
            <div className="row_address__wrapper">
               <Typography variant={"small"} color={"paragraph"}>
                  User: {params?.row?.user?.name}
               </Typography>
               <Typography variant={"small"} color={"paragraph"}>
                  City: {params?.row?.city}
               </Typography>
               <Typography variant={"small"} color={"paragraph"}>
                  Shipping Address: {params?.row?.shippingAddress}
               </Typography>
            </div>
         )
      }
   },
   {
      field: "date", headerName: "Order Date", flex: 1, headerAlign: "left", align: "left", width: 200, renderCell: (params) => {
         return (
            <Typography variant={"small"} color={"paragraph"}>
               {dayjs(params?.row?.updatedAt).format("MMM D, YYYY h:mm A")}
            </Typography>
         )
      }
   },
   {
      field: "status", headerName: "Order Status", flex: 1, headerAlign: "left", align: "left", width: 150, renderCell: (params) => {
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
