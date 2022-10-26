import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const drawerWidth = 240;
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}
      <AppBar
        sx={{
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: {
            xs: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
            sm: 0,
          },
        }}
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is the{' '}
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="mario.png" sx={{ ml: 2 }} />
        </Toolbar>
      </AppBar>

      {/* Navigation */}
      <Navigation drawerWidth={drawerWidth} />

      {/* Content */}
      <Box component="main" sx={{ width: '100%', p: 3 }}>
        <Offset />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
