import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import {PostType} from "../../Redux/State";

type MyPostsPropsType = {
    posts:Array<PostType>
}


const MyPosts = (props:MyPostsPropsType) => {

    return (
        <div className={classes.posts}>
            <Post posts={props.posts}/>
        </div>
    );
};

export default MyPosts;