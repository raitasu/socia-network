import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    InitialUsersStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFollowAC,
    toggleIsFetchingAC,
} from "../Redux/Users-reducer";
import { AppStateType } from "../Redux/Redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

export const UsersContainer = () => {
    const userPageState = useSelector<AppStateType, InitialUsersStateType>(
        (state) => state.usersPage,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleIsFetchingAC(true));
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${userPageState.currentPage}&count=${userPageState.pageSize}`,
            )
            .then((response) => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(response.data.items));
                dispatch(setTotalUsersCountAC(response.data.totalCount / 100));
            });
    }, []);
    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber));
        dispatch(toggleIsFetchingAC(true));

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${userPageState.pageSize}`,
            )
            .then((response) => {
                dispatch(toggleIsFetchingAC(false));
                dispatch(setUsersAC(response.data.items));
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
        />
    );
};
