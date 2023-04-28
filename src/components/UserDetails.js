import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const UserDetails = () => {

    
  return (
    <Card sx={{ width: 275,ml:2,mt:1,borderTopWidth: 4, borderTopStyle: 'solid', borderTopColor: 'orange' }}>
    <CardContent>
    <Button variant="contained" color='secondary' sx={{mb:2}}
    >View/Edit Profile</Button>
      <Typography variant="h5" component="div">
        belent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default UserDetails