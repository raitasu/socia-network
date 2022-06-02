import React, { useEffect } from "react";
import Main from "./Main";
import { useParams } from "react-router-dom";
import { getProfile } from "../../Redux/Profile-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/Redux-store";
import { ProfilePageType } from "./CreatePosts/CreatePostsContainer";

const ProfileContainer = () => {
    const profilePageState = useSelector<AppStateType, ProfilePageType>(
        (state) => state.profilePage,
    );
    const dispatch = useDispatch();
    let params = useParams();

    let userId = params.userId;
    useEffect(() => {
        dispatch(getProfile(userId, profilePageState.myProfile));
    }, [userId]);

    return <Main profilePageState={profilePageState} />;
};

export default ProfileContainer;
