import React from 'react';
import styles from "./styles/DataTable.module.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '../common/Typography/Typography';
import Button from '../common/Button/Button';

function createData(OrderId, calories, fat, carbs, protein) {
   return { name: OrderId, calories, fat, carbs, protein };
}

const rows = [
   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   createData('Eclair', 262, 16.0, 24, 6.0),
   createData('Cupcake', 305, 3.7, 67, 4.3),
   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DataTable = ({ title, btnTitle, tableHeadData }) => {
   return (
      <div className={styles.data_table_wrapper}>
         <div className={styles.data_table_title_wrapper}>
            <Typography variant={"widgetTitle"} color={"paragraph "}>
               {title}
            </Typography>
            <Button variant={"border_btn"}>{btnTitle}</Button>
         </div>
         <TableContainer component={Paper} elevation={0}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
               <TableHead sx={{ backgroundColor: "#f3f6fc" }}>
                  <TableRow>
                     <TableCell>{tableHeadData?.col1}</TableCell>
                     <TableCell >{tableHeadData?.col2}</TableCell>
                     <TableCell >{tableHeadData?.col3}</TableCell>
                     <TableCell >{tableHeadData?.col4}</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell >{row.calories}</TableCell>
                        <TableCell >
                           <Typography variant={"small"} color={"green"}>
                              {row.fat}
                           </Typography>
                        </TableCell>
                        <TableCell >{row.carbs}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   )
}

export default DataTable;