import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mainItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="primary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: '/create',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}
      <AppBar
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          bgcolor: 'background.paper',
          color: 'text.primary',
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

      {/* side drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h5" sx={{ p: 3 }}>
          Awesome Notes
        </Typography>

        {/* --- List and links */}
        {mainItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            onClick={() => navigate(item.path)}
            sx={{
              bgcolor:
                location.pathname === item.path
                  ? 'action.selected'
                  : 'transparent',
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>

      {/* content */}
      <Box component="main" sx={{ width: '100%', p: 3 }}>
        <Offset />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
