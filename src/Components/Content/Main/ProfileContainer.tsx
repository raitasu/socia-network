import React, { useEffect } from "react";
import Main from "./Main";
import { useParams } from "react-router-dom";
import { setUserProfileAC } from "../../Redux/Profile-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/Redux-store";
import { ProfilePageType } from "./CreatePosts/CreatePostsContainer";
import { usersAPI } from "../../../Api/Api";

const ProfileContainer = () => {
    const profilePageState = useSelector<AppStateType, ProfilePageType>(
        (state) => state.profilePage,
    );
    const dispatch = useDispatch();
    let params = useParams();

    let userId = params.userId;
    useEffect(() => {
        if (!userId) {
            userId = "1";
            dispatch(setUserProfileAC(profilePageState.myProfile));
        }

        usersAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfileAC(response));
        });
    }, [userId]);

    return <Main profilePageState={profilePageState} />;
};

export default ProfileContainer;
