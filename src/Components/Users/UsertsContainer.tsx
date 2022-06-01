import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    InitialUsersStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowAC,
    toggleIsFetchingAC,
    toggleIsFollowingAC,
} from "../Redux/Users-reducer";
import { AppStateType } from "../Redux/Redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../Api/Api";

export const UsersContainer = () => {
    const userPageState = useSelector<AppStateType, InitialUsersStateType>(
        (state) => state.usersPage,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(userPageState.currentPage, userPageState.pageSize).then((response) => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(response.items));
            dispatch(setTotalUsersCountAC(response.totalCount / 100));
        });
    }, []);
    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(toggleIsFetchingAC(true));

        usersAPI.getUsers(pageNumber, userPageState.pageSize).then((response) => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(response.items));
        });
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
        />
    );
};
