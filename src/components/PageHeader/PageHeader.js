import React from 'react';
import './PageHeader.css';
import Logo from './logo.svg';

export default function PageHeader(){
    return (
        <header>
            <img src={Logo} alt='logo'></img>
            <input type='text' placeholder='Search'></input>
        </header>
    );
}