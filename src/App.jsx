import { CssBaseline, useMediaQuery } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Create from './pages/Create';
import Notes from './pages/Notes';
import NotFound from './pages/NotFound';

const typography = {
  fontFamily: 'Quicksand',
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
};

const lightMode = {
  typography,
  palette: {
    mode: 'light',
    primary: deepPurple,
    background: {
      default: '#f9f9f9',
      paper: '#fff',
    },
    action: {
      selected: '#f4f4f4',
    },
  },
};

const darkMode = {
  typography,
  palette: {
    mode: 'dark',
    background: {
      default: '#292929',
      paper: '#333333',
    },
  },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Notes />,
      },
      {
        path: 'create',
        element: <Create />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () => createTheme(prefersDarkMode ? darkMode : lightMode),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
