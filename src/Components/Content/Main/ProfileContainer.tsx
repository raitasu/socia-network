import React, {useEffect} from "react";
import Main from "./Main";
import {useParams} from "react-router-dom";
import {getProfile, getStatus, ProfileStateType} from "../../Redux/Profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {AuthStateType} from "../../Redux/Auth-reducer";

const ProfileContainer = () => {
    const profilePageState = useSelector<AppStateType, ProfileStateType>(
        (state) => state.profilePage,
    );
    const authPageState = useSelector<AppStateType, AuthStateType>((state) => state.auth);

    const dispatch = useDispatch();
    let params = useParams();

    let userId = params.userId;
    useEffect(() => {
        dispatch(getProfile(userId, profilePageState.myProfile));
       
    }, [userId]);
    useEffect(() => {
        dispatch(getStatus(userId))
    }, [userId])

    return <Main profilePageState={profilePageState} isAuth={authPageState.isAuth}/>;
};

export default ProfileContainer;
