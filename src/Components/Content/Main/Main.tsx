import React from "react";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import classes from "./Main.module.css";
import CreatePostsContainer from "./CreatePosts/CreatePostsContainer";

export type MainType = {
    profile: any;
};
const Main = (props: MainType) => {
    return (
        <main className={classes.main}>
            <HeaderLogo />
            <Form profile={props.profile} />
            <CreatePostsContainer />
        </main>
    );
};

export default Main;
