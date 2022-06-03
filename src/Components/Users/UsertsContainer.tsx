import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getUsers,
    InitialUsersStateType,
    setCurrentPageAC,
    toggleFollowAC,
    toggleIsFollowingAC,
} from "../Redux/Users-reducer";
import { AppStateType } from "../Redux/Redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { AuthStateType } from "../Redux/Auth-reducer";

export const UsersContainer = () => {
    const userPageState = useSelector<AppStateType, InitialUsersStateType>(
        (state) => state.usersPage,
    );
    const authPageState = useSelector<AppStateType, AuthStateType>((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(userPageState.currentPage, userPageState.pageSize));
    }, []);
    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber));

        dispatch(getUsers(pageNumber, userPageState.pageSize));
    };

    return userPageState.isFetching ? (
        <Preloader />
    ) : (
        <Users
            usersPage={userPageState}
            onPageChanged={onPageChanged}
            totalUsersCount={userPageState.totalUsersCount}
            currentPage={userPageState.currentPage}
            pageSize={userPageState.pageSize}
            toggleFollow={(userID) => {
                dispatch(toggleFollowAC(userID));
            }}
            disableFollow={(status: boolean, userId: string) => {
                dispatch(toggleIsFollowingAC(status, userId));
            }}
            followingInProgress={userPageState.followingInProgress}
            dispatch={dispatch}
            isAuth={authPageState.isAuth}
        />
    );
};
