import * as React from 'react';
import './Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  trackingId: number,
  date: number,
  status: number,
) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 2305010005, "1 May 2023", "Approved"),
  createData('Ice cream sandwich', 2305010004, "1 May 2023", "Approved"),
  createData('Eclair', 2305010003, "1 May 2023", "Pending"),
  createData('Cupcake', 2305010002, "1 May 2023", "Approved"),
  createData('Gingerbread', 2305010001, "1 May 2023", "Delivered"),
];

const makeStyles=(Status)=> {
    if(Status === 'Approved'){
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if(Status=== 'Pending'){
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
        <TableContainer component={Paper}
        style= { {boxShadow: '0px 13px 20px #80808029'} }
        >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">RecipeId</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
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
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                    <span className='status'style={makeStyles(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left" className='Details'>Detail</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
