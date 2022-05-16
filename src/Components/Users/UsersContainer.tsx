import React from 'react';
import {connect} from "react-redux";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC} from "../Redux/Users-reducer";
import {ActionType, AppStateType} from "../Redux/Redux-store";
import {Users} from "./Users";

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
    pageSize:number
    totalUsersCount:number
    currentPage: number

}
type MapDispatchToPropsType = {
    toggleFollow: (userID: string) => void,
    setUsers: (users: Array<FriendsType>) => void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void

}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void):MapDispatchToPropsType => {
    return {
        toggleFollow: (userID) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users: Array<FriendsType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


