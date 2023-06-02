import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Inbox, Mail } from '@mui/icons-material';

const LeftSidebar = () => {
  return (
    
    <Drawer variant="permanent" sx={{ flexShrink: 0, width: 120, marginLeft: '25px', marginTop: '25px' }}>
        <List sx={{marginTop:'5rem'}}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>
        </List>
      </Drawer>
   
  );
};

export default LeftSidebar;
