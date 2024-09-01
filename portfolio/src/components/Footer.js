import React from 'react';
import { Box, Container, Link, Typography  } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';



const Footer = () => {
    return (
        <Box className='footerClass' sx={{ m: 0 }}>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <EmailIcon 
                    sx={{ "&:hover": {color:"#fefabb"}, ml: 4, mr: 4, color:"#fafee0"  }} 
                    onClick={event => window.location.href='mailto:drewlars83@gmail.com'}/>
                <GitHubIcon 
                    sx={{ "&:hover": {color:"#fefabb"}, ml: 4, mr: 4, color:"#fafee0"  }} 
                    onClick={event => window.location.href='https://github.com/'}
                />
                <LinkedInIcon 
                    sx={{ "&:hover": {color:"#fefabb"}, ml: 4, mr: 4, color:"#fafee0"  }} 
                    onClick={event => window.location.href='https://www.linkedin.com/in/andrew-larson-0bb59b218/'}
                />
            </Container>
            <Typography className='glowingText' variant="body2" color="#f0fff8" align="center"> {'Copyright © '}
                <Link color='#f0fff8' href='mailto:drewlars83@gmail.com' underline='hover'>
                    Andrew Larson
                </Link>
                {' '}
                {new Date().getFullYear()}
            </Typography>
        </Box>
    );
}

export default Footer;