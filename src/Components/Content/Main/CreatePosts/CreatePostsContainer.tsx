import React from 'react';
import {addPostAC, updateTextForTextAreaAC} from "../../../Redux/Profile-reducer";
import CreatePosts from "./CreatePosts";
import StoreContext from "../../../../StoreContext";




const CreatePostsContainer = () => {

    return <StoreContext.Consumer>{
        (store) => {

            const state = store.getState()

            const addPost = () => {
                store.dispatch(addPostAC())

            }
            const updateTextForTextArea = (newText: string) => {
                store.dispatch(updateTextForTextAreaAC(newText))
            }

            return <CreatePosts posts={state.profilePage.posts}
                                textForTextArea={state.profilePage.textForTextArea}
                                addPost={addPost} updateTextForTextArea={updateTextForTextArea}/>
        }
    }
    </StoreContext.Consumer>;

}

export default CreatePostsContainer;