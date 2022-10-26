import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    text: 'My Notes',
    icon: <SubjectOutlined />,
    path: '/',
  },
  {
    text: 'Create Note',
    icon: <AddCircleOutlineOutlined />,
    path: '/create',
  },
];
const Navigation = ({ drawerWidth }) => {
  return (
    <>
      {/* side drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          display: { xs: 'none', sm: 'block' },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h5" sx={{ p: 3 }}>
          Awesome Notes
        </Typography>

        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              end
              sx={{
                '&.active': {
                  bgcolor: 'action.selected',
                },
                color: 'primary.main',
              }}
            >
              <ListItemIcon sx={{ color: 'primary.main' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>

      {/* bottom navigation */}
      <BottomNavigation
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          display: { sm: 'none' },
          justifyContent: 'space-evenly',
          boxShadow: 4,
        }}
        showLabels
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            component={NavLink}
            to={item.path}
            key={item.text}
            label={item.text}
            icon={item.icon}
            end
            centerRipple
            sx={{
              '&.active': {
                color: 'primary.main',
              },
            }}
          />
        ))}
      </BottomNavigation>
    </>
  );
};
export default Navigation;
