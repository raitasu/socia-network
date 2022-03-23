import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import CreatePosts from "./CreatePosts/CreatePosts";
import classes from './Main.module.css'
import {PostType} from "../../Redux/State";

type MainPropsType = {
    posts: Array<PostType>
    addPost:(title:string)=>void
}

const Main = (props: MainPropsType) => {

    return (
        <main className={classes.main}>
            <HeaderLogo/>
            <Form/>
            <CreatePosts posts={props.posts} addPost={props.addPost}/>
        </main>
    );
};

export default Main;