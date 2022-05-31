import React, { useEffect } from "react";
import Main from "./Main";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setUserProfileAC } from "../../Redux/Profile-reducer";
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
        if (!userId) {
            userId = "1";
            dispatch(setUserProfileAC(profilePageState.myProfile));
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                console.log(response.data);
                dispatch(setUserProfileAC(response.data));
            });
    }, [userId]);

    return <Main profilePageState={profilePageState} />;
};

export default ProfileContainer;
