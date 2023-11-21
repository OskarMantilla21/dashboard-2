import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Box, Paper, IconButton, InputBase} from '@mui/material';
import { AccountCircleOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';

const ICON_STYLES = { color: '#4B4E52' };

function Header() {
  return (
    <Paper elevation={0}>
      <Grid container sx={{display:'flex', justifyContent:"space-between", alignItems: "center"}} >
        <Box className= 'search-box'>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchOutlined />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
          />
        </Box>
        <Grid item >
          <IconButton>
            <AccountCircleOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined sx={ICON_STYLES} />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;