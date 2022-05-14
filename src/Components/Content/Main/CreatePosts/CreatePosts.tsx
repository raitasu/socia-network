import React, {ChangeEvent} from 'react';
import classes from './CreatePosts.module.css'
import Post from "../../MyPosts/Post/Post";
import {ProfilePageType} from "./CreatePostsContainer";

type CreatePostsPropsType = {
    profilePage: ProfilePageType
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
            <textarea className={classes.textarea} ref={newPostElement} value={props.profilePage.textForTextArea}
                      onChange={onChangeHandler}/>
            <button className={classes.itemButton} onClick={onClickHandler}>Add post</button>
            <button className={classes.itemButton}>Remove</button>
            <div><Post posts={props.profilePage.posts}/></div>
        </div>

    );
};

export default CreatePosts;


