import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import classes from "./Main.module.css";
import CreatePostsContainer from "./CreatePosts/CreatePostsContainer";

export type MainType = {
    profilePageState: any;
};
const Main = (props: MainType) => {
    return (
        <main className={classes.main}>
            <HeaderLogo />
            <Form profilePageState={props.profilePageState} />
            <CreatePostsContainer />
        </main>
    );
};

export default Main;
