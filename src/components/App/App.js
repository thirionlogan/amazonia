import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { handleSendWishlist, handleGetWishlists } from '../../client/client';
import PageHeader from '../PageHeader/PageHeader';
import WishlistEditor from '../WishlistEditor/WishlistEditor';
import HomePage from '../HomePage/HomePage';

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
        <WishlistEditor handleSendWishlist={handleSendWishlist} />
        <HomePage handleGetWishlists={handleGetWishlists} />
      </div>
    </ThemeProvider>
  );
}
