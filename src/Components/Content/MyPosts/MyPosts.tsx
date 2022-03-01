import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import {PropsType} from "../../../index";

const MyPosts = (props:PropsType) => {

    return (
        <div className={classes.posts}>
            <Post posts={props.posts}/>
        </div>
    );
};

export default MyPosts;