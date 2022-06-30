import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import classes from "./Main.module.css";
import CreatePosts from "./CreatePosts/CreatePosts";

export type MainType = {
    profilePageState: any;
    isAuth: boolean;
};
const Main = (props: MainType) => {
    return (
        <main className={classes.main}>
            <HeaderLogo />
            <Form profilePageState={props.profilePageState} isAuth={props.isAuth} />
            <CreatePosts />
        </main>
    );
};

export default Main;
