import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import UserDetails from './UserDetails';
import CapriWall from './CapriWall'
import Birthday from './Birthday'
import NewJoinee from './NewJoinee'
import CapriService from './CapriService'
import Banner from './Banner';

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
    const details = ['Home', 'CGCL Group', 'Knowlwdge Base', 'Directory', 'My Page', 'Online Requisitions', 'Data Warehouse']

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
                            details.map((detail) =>
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
            <Banner />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 4 }}>
                <CapriWall />
                <Birthday />
                <NewJoinee />
                <CapriService />
            </Box>
        </>
    );
}
