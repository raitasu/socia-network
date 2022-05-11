import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {ActionType, FriendsType, RootStateType} from "../Redux/Store";
import {setUsersAC, toggleFollowAC} from "../Redux/Users-reducer";

let mapStateToProps = (state: RootStateType) => {

    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        toggleFollow: (userID: string) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users: Array<FriendsType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


