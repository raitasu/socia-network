import React from 'react';
import {addPostAC, updateTextForTextAreaAC} from "../../../Redux/Profile-reducer";
import CreatePosts from "./CreatePosts";
import {ActionType, RootStateType} from "../../../Redux/Store";
import {connect} from "react-redux"


let mapStateToProps = (state: RootStateType) => {

    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateTextForTextArea: (newText: string) => {
            dispatch(updateTextForTextAreaAC(newText))
        }
    }

}

let CreatePostsContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePosts)

export default CreatePostsContainer;