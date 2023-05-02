import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme,idx }) => ({
    backgroundColor: (idx%2==0)?'lightgray' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontSize:12
}));


function createData(name, designation) {
    return { name, designation };
}

const rows = [
    createData('Name', 'Anmol'),
    createData('Designation', 'Software Engineer'),
    createData('Department', 'Technology'),
    createData('Location', 'Gurgaon'),

];

const UserDetails = () => {

    return (
        <Card sx={{ width: 375, ml: 2, mt: 2, }}>
            <CardContent>
                <Typography variant="h7" component="div" sx={{ color: 'purple', fontWeight: 'bold' }}>
                    Capri's Wall Of Fame
                </Typography>
            </CardContent>
            <Card sx={{ width: 325, ml: 2, mb: 2, borderWidth: 0.5, borderStyle: 'solid', borderColor: 'orange' }}>
                <CardContent>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ position: 'absolute', top: 512, left: 275 }} />

                    <Typography variant="h6" component="div" sx={{ display: 'flex', flexDirection: 'row', color: 'orange', justifyContent: 'center' }}>
                        Quaterly Award
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {
                                rows.map((row,i) =>
                                    <>
                                        <Grid item xs={4}>
                                            <Item idx={i}>{row.name}</Item>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Item idx={i}>:-</Item>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Item idx={i}>{row.designation}</Item>
                                        </Grid>
                                    </>
                                )
                            }
                        </Grid>
                    </Box>


                </CardContent>

            </Card>
        </Card>
    )
}

export default UserDetails