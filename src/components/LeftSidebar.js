import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Bookmark, Home, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ flexShrink: 0, width: 120, marginLeft: '25px', marginTop: '25px' }}>
        <List sx={{marginTop:'5rem'}}>
          <ListItem button component={ Link } to='/'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={ Link } to='/search'>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button component={ Link } to='/library'>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="Library"/>
          </ListItem>
        </List>
      </Drawer>
   
  );
};

export default LeftSidebar;
