import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "./logo_1.png";
import loginLogo from "./Untitled-removebg-preview.png";

export type HeaderPropsType = {
    login: string;
    isAuth: boolean;
};

const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <NavLink to={"/"}>
                    {" "}
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth ? (
                    props.login
                ) : (
                    <NavLink to={"/login"}>
                        <img className={classes.loginLogo} src={loginLogo} alt="loginLogo" />
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
