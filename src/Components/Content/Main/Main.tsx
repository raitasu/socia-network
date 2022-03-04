import React from 'react';
import MyPosts from "../MyPosts/MyPosts";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import CreatePosts from "./CreatePosts/CreatePosts";
import classes from './Main.module.css'
import {PostType} from "../../Redux/State";

type MainPropsType = {
    posts:Array<PostType>
}

const Main = (props:MainPropsType) => {

    return (
        <main className={classes.main} >
            <HeaderLogo/>
            <Form/>
            <CreatePosts />
            <MyPosts posts={props.posts}/>
        </main>
    );
};

export default Main;