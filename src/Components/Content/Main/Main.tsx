import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import classes from './Main.module.css'
import CreatePostsContainer from "./CreatePosts/CreatePostsContainer";

type MainPropsType = {
    store:any
}

const Main = (props: MainPropsType) => {

    return (
        <main className={classes.main}>
            <HeaderLogo/>
            <Form/>
            <CreatePostsContainer store={props.store}/>
        </main>
    );
};

export default Main;