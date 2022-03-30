import React, {ChangeEvent} from 'react';
import classes from './CreatePosts.module.css'
import {PostType,} from "../../../Redux/Store";
import Post from "../../MyPosts/Post/Post";

type CreatePostsPropsType = {
    posts: Array<PostType>
    textForTextArea: string
    updateTextForTextArea: (newText: string) => void
    addPost: () => void

}


const CreatePosts = (props: CreatePostsPropsType) => {

    let newPostElement = React.createRef<any>();

    const onClickHandler = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateTextForTextArea(newText)
    }

    return (
        <div className={classes.create_posts}>
            <textarea className={classes.textarea} ref={newPostElement} value={props.textForTextArea}
                      onChange={onChangeHandler}/>
            <button className={classes.itemButton} onClick={onClickHandler}>Add post</button>
            <button className={classes.itemButton}>Remove</button>
            <div><Post posts={props.posts}/></div>
        </div>

    );
};

export default CreatePosts;