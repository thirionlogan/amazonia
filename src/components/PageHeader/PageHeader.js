import React, { Component } from 'react';
import './PageHeader.css';
import Logo from './logo.svg';

class PageHeader extends Component {
  render() {
    return (
      <header>
        <img src={Logo} alt='logo'></img>
        <input type='text' placeholder='Search'></input>
      </header>
    );
  }
}

export default PageHeader;
