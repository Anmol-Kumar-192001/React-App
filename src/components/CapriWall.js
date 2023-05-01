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
        Capri's Wall Of Fame
      </Typography>
    </CardContent>
    <Card sx={{ width: 325,ml:2,mb:2,borderWidth:0.5,borderStyle:'solid',borderColor:'orange' }}>
    <CardContent>
     
      <Typography variant="h6" component="div" sx={{display:'flex',flexDirection:'row',color:'orange',justifyContent:'center'}}>
        Quaterly Award
      </Typography>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 260 }} size="small" aria-label="a dense table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
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