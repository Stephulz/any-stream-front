import React, { Component } from 'react';
import './Header.css';
import userImage from '../../resources/user.png'
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="logo">Any Stream</a>
            <a href="#following">Seguindo</a>
            <a href="#search">Procurar</a>
            <div className="header-middle">
                <form method="post">
                    <input
                        type="text"
                        name="search"
                        placeholder="Buscar"
                        className="search-input" />
                    <button type="submit" className="search-button">
                        <BiSearchAlt2
                            color="#b5b5b5"
                            size="25"
                        ></BiSearchAlt2>
                    </button>
                </form>
            </div>
            <div className="header-right">
                <img className="avatar" src={userImage} alt="User Profile"></img>
            </div>
        </div>
    );
}

export default Header;