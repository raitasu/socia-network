import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import classes from "./Main.module.css";
import CreatePostsContainer from "./CreatePosts/CreatePostsContainer";

export type MainType = {
    profilePageState: any;
    isAuth: boolean;
};
const Main = (props: MainType) => {
    return (
        <main className={classes.main}>
            <HeaderLogo />
            <Form profilePageState={props.profilePageState} isAuth={props.isAuth} />
            <CreatePostsContainer />
        </main>
    );
};

export default Main;
