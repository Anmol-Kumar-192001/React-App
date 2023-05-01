import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, designation) {
    return { name, designation};
  }

const rows = [
    createData('Name', 'Anmol'),
    createData('Designation', 'Software Engineer'),
    createData('Department', 'Technology'),
    createData('Location', 'Gurgaon'),
    
  ];

const UserDetails = () => {

  return (
    <Card sx={{ width: 375,ml:2,mt:2, }}>
    <CardContent>
      <Typography variant="h7" component="div" sx={{color:'purple',fontWeight:'bold'}}>
        Long Service at Capri
      </Typography>
    </CardContent>
    <Card sx={{ width: 325,ml:2,mb:2,borderWidth:0.5,borderStyle:'solid',borderColor:'orange' }}>
    <CardContent>
     
      <Typography variant="h6" component="div" sx={{display:'flex',flexDirection:'row',color:'orange',justifyContent:'center'}}>
        5 Year & Above of Service
      </Typography>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 260 }} size="small" aria-label="a dense table">
      
        <TableBody>
          {rows.map((row,i) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row" sx={{bgcolor:(i%2===0)?'lightgray':'#fff',}}>
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" sx={{bgcolor:(i%2===0)?'lightgray':'#fff'}}>{row.designation}</TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </CardContent>
   
  </Card>
  </Card>
  )
}

export default UserDetails