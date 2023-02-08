import React, { useState } from 'react';
import { useHttpHook } from "../../../hooks/useHttpHook";
import SelectOptions from '../../../components/common/SelectOptionInput/SelectOptionInput';
import { v4 } from 'uuid';
import { useParams } from "react-router-dom";
import Button from '../../../components/common/Button/Button';
import toast from 'react-hot-toast';

const status = [
   { name: "PENDING", _id: v4() },
   { name: "SHIPPED", _id: v4() },
   { name: "DELIVERED", _id: v4() },
   { name: "CANCELED", _id: v4() }
]
const OrderStatus = ({ setStateUpdated }) => {
   const [selectedStatus, setSelectedStatus] = useState("");
   const [error, setError] = useState(null);
   const { id } = useParams();
   const optionChangeHandler = (e) => {
      setSelectedStatus(e.target.value)
   }
   const getResponseData = (data) => {
      if (data?.success) {
         //If Status update successfull then setStateUpdated() will run and state value will be changed from null to random number so that useEffect hook run angin with every click and send request to server and get latest data.  
         setStateUpdated(Math.random() * 10)
         setError(null)
         toast.success("Order Status Updated");
         setSelectedStatus("")
      }
   }
   const [getStatusFromId] = status.filter(sts => sts._id === selectedStatus);
   console.log(getStatusFromId)
   const { sendRequest } = useHttpHook()

   const postStatusData = () => {
      if (selectedStatus === "") {
         setError("Please Select One Option")
      }
      if (selectedStatus !== "") {
         sendRequest(
            {
               url: `/order/update/status/${id}`,
               method: "PUT",
               postData: { orderId: id, orderStatus: getStatusFromId?.name }
            }
            , getResponseData)
      }

   }
   return (
      <div style={{ width: "25%" }}>
         <SelectOptions
            value={selectedStatus}
            error={error}
            options={status}
            errorMessage={error}
            onChange={optionChangeHandler}
            name={"status"}
            label={"Change Order Status"} />
         <div style={{ marginTop: "1.5rem" }}>
            <Button variant={"blue_btn"} onClick={postStatusData}>
               Save Change
            </Button>
         </div>
      </div>
   )
}

export default OrderStatus;