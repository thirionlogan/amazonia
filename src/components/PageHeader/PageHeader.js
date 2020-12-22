import React from 'react';
import { TextField, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './PageHeader.css';
import Logo from './logo.svg';

const useStyles = makeStyles({
  appBar: {},
  toolbar: {
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  logo: {},
  searchField: {},
});

export default function PageHeader() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src={Logo} alt='Amazonia logo' className={classes.logo} />
        <TextField
          type='text'
          placeholder='Search'
          className={classes.searchField}
        />
      </Toolbar>
    </AppBar>
  );
}
