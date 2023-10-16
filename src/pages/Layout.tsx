import '../app/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

import React, { ReactNode } from 'react';
import Header from '../app/components/header'; // Importe seu cabeçalho ou outros componentes compartilhados

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
