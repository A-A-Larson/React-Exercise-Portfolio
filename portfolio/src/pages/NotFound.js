import React from 'react';
import notfound from '../img/notfound.png'
import DrawerAppBar from '../components/DrawerAppBar';
import { Box } from '@mui/material';

const NotFound = () => {

    return (
        <div id='notfoundImg'>
            <DrawerAppBar title="404 Page Not Found" />
            <Box 
                component='img' 
                src={notfound}
                sx={{
                    height: 'auto',
                    width: '100%'
                }}
            >    
            </Box>
        </div>
    )
}

export default NotFound;