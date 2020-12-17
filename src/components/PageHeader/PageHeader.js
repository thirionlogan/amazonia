//Makes Header for Amazonia
import { Component } from "react";
//import "./Pageheader.css";
import Logo from './logo_new.svg';
import styled from 'styled-components';


const Header = styled.header `
    background-color: #474747;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;


    `;


const Image = styled.img `
    padding-left: 50px;
    height: 50px;
    width: 100px
    `;

const SearchBar = styled.input `
    height: 30px;
    border-radius: 10px;
    border: 1px solid white;
    margin-right: 15px
    `;

class PageHeader extends Component {
    

    render() {
        return(
            <Header>
            <Image src={Logo} alt='logo'></Image>

            <SearchBar type='text' placeholder='Search'></SearchBar>
            </Header>
        )
    }

}

export default PageHeader;