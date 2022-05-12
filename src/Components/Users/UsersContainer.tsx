import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {ActionType} from "../Redux/Store";
import {setUsersAC, toggleFollowAC} from "../Redux/Users-reducer";
import {AppStateType} from "../Redux/Redux-store";

export type UsersPageType = {
    users: Array<FriendsType>
}
export type LocationType = {
    country: string
    city: string
}
export type FriendsType = {
    id: string
    name: string
    status: string
    location: LocationType
    followed: boolean
    photos: any
}

type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    toggleFollow: (userID: string) => void,
    setUsers: (users: Array<FriendsType>) => void

}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void):MapDispatchToPropsType => {
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


