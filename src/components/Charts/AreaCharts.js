import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Typography from '../common/Typography/Typography';
import styles from "./styles/AreaChart.module.scss";

//TODO: REMOVE THIS 
const data = [
   {
      name: "January", sales: 12000
   },
   {
      name: "February", sales: 14000
   },
   {
      name: "March", sales: 22000
   },
   {
      name: "April", sales: 31000
   },
   {
      name: "May", sales: 25000
   },
   {
      name: "June", sales: 26000
   },
   {
      name: "July", sales: 15800
   },
   {
      name: "August", sales: 11000
   },
   {
      name: "September", sales: 10000
   },
   {
      name: "October", sales: 10000
   },
   {
      name: "November", sales: 25000
   },
   {
      name: "December", sales: 25000
   }
];

const AreaCharts = () => {
   return (
      <div className={styles.area_chart_wrapper}>
         <Typography variant={"subtitle"} color={"paragraph "}>
            Last Year Revenue
         </Typography>
         <div className={styles.area_chart}>
            <ResponsiveContainer>
               <AreaChart
                  data={data}
                  margin={{
                     top: 10,
                     right: 30,
                     left: 0,
                     bottom: 0,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#205295" fill="#2c74b3" />
               </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>
   )
}

export default AreaCharts;