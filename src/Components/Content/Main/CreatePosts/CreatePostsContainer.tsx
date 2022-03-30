import React from 'react';
import {addPostAC, updateTextForTextAreaAC} from "../../../Redux/Profile-reducer";
import CreatePosts from "./CreatePosts";

type CreatePostsPropsType = {
    store: any
}


const CreatePostsContainer = (props: CreatePostsPropsType) => {

    const state = props.store.getState()


    const addPost = () => {
        props.store.dispatch(addPostAC())

    }
    const updateTextForTextArea = (newText:string) => {
        props.store.dispatch(updateTextForTextAreaAC(newText))
    }

    return (<CreatePosts posts={state.profilePage.posts} textForTextArea={state.profilePage.textForTextArea} addPost={addPost} updateTextForTextArea={updateTextForTextArea} />);
};

export default CreatePostsContainer;