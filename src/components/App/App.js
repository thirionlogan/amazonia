import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <div className='App'>
          <PageHeader />
          <Switch>
            <Route path='/wishlistEditor'>
              <WishlistEditor handleSendWishlist={handleSendWishlist} />
            </Route>
            <Route path='/'>
              <HomePage handleGetWishlists={handleGetWishlists} />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
