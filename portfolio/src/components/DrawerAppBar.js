import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ListItemIcon } from '@mui/material';
import { withRouter } from 'react-router-dom';;

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window, history } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {title} = props; 
 
const navItems = [
{
  text: 'Home',
  onClick: () => history.push('/')
}, 
{
  text: 'Projects',
  onClick: () => history.push('/projects')
},
{
  text: 'About',
  onClick: () => history.push('/about')
},
{
  text: 'Admin',  
  onClick: () => history.push('/admin')
}
];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Divider />
          <List>
              {navItems.map((item, index) => {
                  const { text, icon, onClick } = item;
                  return (
                    <ListItem key={text} onClick={onClick}>
                        <ListItemButton  sx={{ textAlign: 'center' }}>
                            { icon && <ListItemIcon>{icon}</ListItemIcon> }
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                  );
              })}
          </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' }}>      
      <AppBar position='absolute' id='appbar'>
        <Toolbar  className='HeaderClass'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ "&:hover": {color:"#fafee0", boxShadow: "0px 0px 20px #fefabb"}, color: "#fafee0" }}            
          >
            <MenuIcon sx={{"&:hover": {color:"#fafee0", boxShadow: "0px 0px 20px #fefabb"} }} />
          </IconButton>
          <Typography
            className='glowingText'
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, mr: 6, textAlign: 'center', display: { sm: 'block' } }}
          >
            {title}
          </Typography>          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          
          className='glowingText' 
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{            
            '& .MuiDrawer-paper': { boxSizing: 'border-box',
                                    width: drawerWidth, 
                                    background: 'transparent',
                                    color: '#fafee0' }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" >
        
        
      </Box>
    </Box>
  );
}

export default withRouter(DrawerAppBar);
