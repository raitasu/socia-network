import React from "react";
import { addPostAC, updateTextForTextAreaAC } from "../../../Redux/Profile-reducer";
import CreatePosts from "./CreatePosts";
import { connect } from "react-redux";
import { ActionType, AppStateType } from "../../../Redux/Redux-store";
import { PostType } from "../../MyPosts/Post/Post";

export type ProfilePageType = {
    posts: Array<PostType>;
    textForTextArea: string;
    profile: any;
    myProfile: any;
};

type MapStatePropsType = {
    profilePage: ProfilePageType;
};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    };
};
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateTextForTextArea: (newText: string) => {
            dispatch(updateTextForTextAreaAC(newText));
        },
    };
};

let CreatePostsContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePosts);

export default CreatePostsContainer;
