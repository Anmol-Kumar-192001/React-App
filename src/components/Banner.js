import React from 'react';
import { Carousel } from 'antd';
import logo1 from '../../src/assets/new_banner_1.jpg'
import logo2 from '../../src/assets/GPTW_banner.jpg'
import logo3 from '../../src/assets/HelpDesk.jpg'
import Box from '@mui/material/Box';

const Banner = () => (
    <Box sx={{ml:22}}>
    <Carousel autoplay >
        <div>
            <img src={logo1} />
        </div>
        <div>
            <img src={logo2} />
        </div>
        <div>
            <img src={logo3} />
        </div>
    </Carousel>
    </Box>
);

export default Banner;