import {  Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const UserDetails = () => {
  return (
    <Card sx={{ width: 255,ml:2,mt:2, }}>
    <CardContent>
      <Typography variant="h7" component="div" sx={{color:'purple',fontWeight:'bold',mb:2}}>
        New Joinees
      </Typography>
      
    </CardContent>
   
  </Card>
  )
}

export default UserDetails