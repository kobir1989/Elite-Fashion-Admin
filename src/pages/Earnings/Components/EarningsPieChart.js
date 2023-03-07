import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

const COLORS = [
   '#0088FE',
   '#00C49F',
   '#FFBB28',
   '#FF8042',
   '#8884d8',
   '#3F497F',
   '#0081C9',
   '#ff7300',
   '#31C6D4',
   '#781C68',
   '#cd5c5c',
   '#205E61',
];

const PieChartComponent = ({ earningsData }) => {
   return (
      <div style={{ width: '100%', height: 400 }}>
         <ResponsiveContainer>
            <PieChart>
               <Pie
                  dataKey="revenue"
                  nameKey="month"
                  data={earningsData}
                  label
                  fill="#8884d8"
                  colors={COLORS}
               >
                  {earningsData && earningsData.length ? earningsData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  )) : null}
               </Pie>
               <Legend />
            </PieChart>
         </ResponsiveContainer>
      </div>
   )
}

export default PieChartComponent;
