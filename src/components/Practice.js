import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Button, Card, CardActions, CardContent, Divider, Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import UserDetails from './UserDetails';
import CapriWall from './CapriWall'
import Birthday from './Birthday'
import NewJoinee from './NewJoinee'
import CapriService from './CapriService'

const style = {
    position: 'absolute',
    top: '20%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function DenseAppBar() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const CustomizedTypography2 = styled(Typography)`
    :hover {
        color: orange;
        cursor:pointer;
    
      }`

    const CustomizedTypography = styled(Typography)`
:hover {
    color: purple;
    cursor:pointer;

  }
`
const details=['Home','CGCL Group','Knowlwdge Base','Directory','My Page','Online Requisitions','Data Warehouse']

    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
                    <Toolbar variant="dense" sx={{ backgroundColor: "#fff", borderColor: 'red', borderWidth: 5, mb: 5 }}>
                        <Typography variant="h6" color="black" component="div" sx={{ mr: 1, fontWeight: '400', fontSize: 15 }}>
                            Welcome
                        </Typography>
                        <CustomizedTypography variant="h6" color="orange" component="div" sx={{ mr: 1, textDecoration: 'underline', fontWeight: '400', fontSize: 15 }}
                            onMouseOver={handleOpen}
                            onMouseLeave={handleClose}
                        >
                            Anmol Kumar
                        </CustomizedTypography>
                        <Divider orientation="vertical" flexItem sx={{ mr: 1 }} />
                        <Typography variant="h6" color="purple" component="div" sx={{ fontWeight: '400', fontSize: 15, mr: 1 }}>
                            Friday, April 28, 2023
                        </Typography>
                        <Divider orientation="vertical" flexItem sx={{ mr: 1 }} />

                    </Toolbar>
                    <Toolbar variant="dense" sx={{ backgroundColor: "#fff", borderColor: 'red', borderWidth: 5 }}>
                        {
                            details.map((detail)=>
                            <CustomizedTypography2 variant="h6" color="purple" component="div" sx={{ mr: 2, fontWeight: '400', fontSize: 15, cursor: 'pointer' }}>
                            {detail}
                        </CustomizedTypography2>
                            )
                        }
                    </Toolbar>
                </AppBar>
            </Box>
            {
                open && <UserDetails />
            }
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CapriWall />
                <Birthday />
                <NewJoinee />
                <CapriService />
            </Box>
        </>
    );
}
