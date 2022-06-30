import React, { ChangeEvent } from "react";
import classes from "./CreatePosts.module.css";
import Post from "../../MyPosts/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../Redux/Redux-store";
import {
    addPostAC,
    ProfileStateType,
    updateTextForTextAreaAC,
} from "../../../Redux/Profile-reducer";

const CreatePosts = () => {
    let profilePage = useSelector<AppStateType, ProfileStateType>((state) => state.profilePage);
    let dispatch = useDispatch();
    let newPostElement = React.createRef<any>();

    const onClickHandler = () => {
        dispatch(addPostAC());
    };
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        dispatch(updateTextForTextAreaAC(newText));
    };

    return (
        <div className={classes.create_posts}>
            <textarea
                className={classes.textarea}
                ref={newPostElement}
                value={profilePage.textForTextArea}
                onChange={onChangeHandler}
            />
            <button className={classes.itemButton} onClick={onClickHandler}>
                Add post
            </button>
            <button className={classes.itemButton}>Remove</button>
            <div>
                <Post posts={profilePage.posts} />
            </div>
        </div>
    );
};

export default CreatePosts;
