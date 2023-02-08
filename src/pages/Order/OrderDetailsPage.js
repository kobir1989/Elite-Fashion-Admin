import React, { useEffect, useState } from 'react';
import PageLayout from "../../layouts/PageLayout";
import { useHttpHook } from "../../hooks/useHttpHook";
import { useParams } from "react-router-dom";
import OrderDetailsView from './Components/OrderDetailsView';
const OrderDetailsPage = () => {
   const [singleOrder, setSingleOrder] = useState({});
   const [stateUpdated, setStateUpdated] = useState(null)
   const { id } = useParams()
   const getSingleOrderData = (data) => {
      console.log(data?.order)
      setSingleOrder(data?.order)
   }
   const { sendRequest, hasError, loading } = useHttpHook();

   //When admin update order status, stateUpdated value will be change to 0 so that useEffect can run again. this is the reson "stateUpdated" added in the dependency array.
   useEffect(() => {
      sendRequest({ url: `/order/single/${id}` }, getSingleOrderData)
   }, [id, sendRequest, stateUpdated]);

   //Calculate total Order Amount.
   const totalAmount = singleOrder?.product && singleOrder?.product.length ? singleOrder?.product.map((item) => item?.totalAmount).reduce((acc, cur) => acc + cur) : null;

   return (
      <PageLayout>
         <OrderDetailsView
            totalAmount={totalAmount}
            error={hasError}
            loading={loading}
            setStateUpdated={setStateUpdated}
            singleOrder={singleOrder} />
      </PageLayout>
   )
}

export default OrderDetailsPage;