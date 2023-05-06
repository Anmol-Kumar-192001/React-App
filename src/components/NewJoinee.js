import {  Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import {ToggleOn  } from '@mui/icons-material';

const UserDetails = () => {
  return (
    <Card sx={{ width: 255,ml:2,mt:2, }}>
    <CardContent>
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <ToggleOn sx={{color:'orange',mr:1}}/>
      <Typography variant="h7" component="div" sx={{color:'purple',fontWeight:'bold',mb:2}}>
        New Joinees
      </Typography>
      </Box>
      
    </CardContent>
   
  </Card>
  )
}

export default UserDetails