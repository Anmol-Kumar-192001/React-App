import {  Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { Cake } from '@mui/icons-material';

const person=['Anmol','Anand','Raj','Manish','Aditya','Roy','Chetan','Amit','Anshul','Harpeet']



const UserDetails = () => {

  return (
    <Card sx={{ width: 255,ml:2,mt:2, }}>
    <CardContent>
    <Box sx={{display:'flex',flexDirection:'row'}}>
    <Cake sx={{color:'orange',mr:1}} />
      <Typography variant="h7" component="div" sx={{color:'purple',fontWeight:'bold',mb:2}}>
        Today's Birthdays
      </Typography>
    </Box>
   
      {person.map((name)=>
      <>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',animationName:'example',animationDuration:'4s'}}>
         <Typography  component="div" sx={{color:'purple',fontSize:13,cursor:'pointer'}}>
         {name}
       </Typography>
       <Typography  component="div" sx={{color:'orange',fontSize:13,cursor:'pointer'}}>
         Send Wishes
       </Typography>
      </Box>
       </>
      )
      }
     
    </CardContent>
   
  </Card>
  )
}

export default UserDetails