import React from 'react';

import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import { HomeOutlined, ImageOutlined, VideocamOutlined, PieChartOutlineOutlined, AssignmentOutlined } from '@mui/icons-material';

const BG_ICON = { color: '#EEF3FD' };

function Menu() {
  return (
    <Box className="menu-container">
      <List className='list-icons'>
        <ListItem>
          <ListItemIcon>
            <HomeOutlined sx={BG_ICON} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ImageOutlined sx={BG_ICON} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VideocamOutlined sx={BG_ICON} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PieChartOutlineOutlined sx={BG_ICON} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentOutlined sx={BG_ICON} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}

export default Menu;