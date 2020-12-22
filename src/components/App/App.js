import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import WishlistEditor from '../WishlistEditor/WishlistEditor';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <PageHeader />
        <WishlistEditor />
      </div>
    </ThemeProvider>
  );
}
