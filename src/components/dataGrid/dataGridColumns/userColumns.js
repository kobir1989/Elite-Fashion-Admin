import Typography from "../../common/Typography/Typography";
import Avatar from "@mui/material/Avatar";

export const userColumns = [
   {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "left",
      align: "left",
      width: 200,
      renderCell: (params) => {
         return (
            <div className="data-grid-flex-col">
               <Avatar alt="Remy Sharp" src="/assets/user.png" sx={{ width: 56, height: 56 }} />
               <Typography variant={"dataGridTitle"}>{params?.row?.name}</Typography>
            </div>
         );
      },
   },
   {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "left",
      align: "left",
      width: 200,
      renderCell: (params) => {
         return <Typography variant={"dataGridTitle"}>{params?.row?.email}</Typography>;
      },
   },
   {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      headerAlign: "left",
      align: "left",
      width: 200,
      renderCell: (params) => {
         return (
            <div className="with__bg gray_bg">
               <Typography variant={"dataGridTitle"}>{params?.row?.phoneNumber || "None"}</Typography>
            </div>
         );
      },
   },
   {
      field: "address",
      headerName: "Address",
      flex: 1,
      headerAlign: "left",
      align: "left",
      width: 350,
      renderCell: (params) => {
         return (
            <div className="row_address__wrapper">
               <Typography variant={"small"} color={"paragraph"}>
                  City: {params?.row?.city || "None"}
               </Typography>
               <Typography variant={"small"} color={"paragraph"}>
                  Shipping Address: {params?.row?.shippingAddress || "None"}
               </Typography>
            </div>
         );
      },
   },
   {
      field: "order",
      headerName: "Number of Order",
      flex: 1,
      headerAlign: "left",
      align: "left",
      width: 200,
      renderCell: (params) => {
         return (
            <div className="with__bg gray_bg">
               <Typography variant={"dataGridTitle"}>{params?.row?.purchases.length}</Typography>
            </div>
         );
      },
   },
];
