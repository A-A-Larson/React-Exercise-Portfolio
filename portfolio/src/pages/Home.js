import React from 'react';
import DrawerAppBar from '../components/DrawerAppBar';
import { Box } from '@mui/material';
import hero from '../img/Hero.png';
import { Translate } from '@mui/icons-material';



const Home = () => {

    return (
        <div id='home'>
            <DrawerAppBar title="Welcome to my Portfolio" />
            <Box 
                component='img' 
                src={hero}
                id='heroImg'
                sx={{
                    
                }}
            >    
            </Box>
        </div>
    );
}

export default Home;