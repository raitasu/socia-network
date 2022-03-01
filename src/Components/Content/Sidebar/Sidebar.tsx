import React from 'react';
import classes from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav className={classes.navigation}>
                <NavLink className = { classActive => classActive.isActive ? classes.active : classes.item } to="/Profile">Profile</NavLink>
                <NavLink className = { classActive => classActive.isActive ? classes.active : classes.item } to="/Dialogs">Messages</NavLink>
                <NavLink className = { classActive => classActive.isActive ? classes.active : classes.item } to="/News">News</NavLink>
                <NavLink className = { classActive => classActive.isActive ? classes.active : classes.item } to="/Music">Music</NavLink>
                <NavLink className = { classActive => classActive.isActive ? classes.active : classes.item } to="/Settings">Settings</NavLink>

            </nav>
        </aside>
    );
};

export default Sidebar;