import React from 'react';
import classes from './CreatePosts.module.css'
import {PostType} from "../../../Redux/State";
import Post from "../../MyPosts/Post/Post";

type CreatePostsPropsType = {
    posts: Array<PostType>
    addPost: (title: string) => void

}

const CreatePosts = (props: CreatePostsPropsType) => {

    let newPostElement = React.createRef<any>();

    const onClickHandler = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value=''
    }

    return (
        <div className={classes.create_posts}>
            <textarea className={classes.textarea}  ref={newPostElement}/>
            <button className={classes.itemButton} onClick={onClickHandler}>Add post</button>
            <button className={classes.itemButton}>Remove</button>
            <div><Post posts={props.posts}/></div>
        </div>

    );
};

export default CreatePosts;