import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from './logo_1.png'

const Header = () => {
    return (
            <header className={classes.header}>
                <div className={classes.logo}>
                    <NavLink to={'/'}> <img src={logo}
                         alt='logo'/></NavLink>
                </div>
            </header>
    );
};

export default Header;