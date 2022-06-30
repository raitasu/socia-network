import React from "react";
import classes from "./Users.module.css";
import avatar from "../Content/MyPosts/Post/avatar-post.png";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";
import { ActionType } from "../Redux/Redux-store";
import { follow, unfollow } from "../Redux/Users-reducer";

export type UsersPageType = {
    users: Array<FriendsType>;
};
export type LocationType = {
    country: string;
    city: string;
};
export type FriendsType = {
    id: string;
    name: string;
    status: string;
    location: LocationType;
    followed: boolean;
    photos: any;
};

export type UsersType = {
    usersPage: UsersPageType;
    toggleFollow: (userID: string) => void;
    disableFollow: (status: boolean, userId: string) => void;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    followingInProgress: String[];
    onPageChanged: (pageNumber: number) => void;
    dispatch: Dispatch<ActionType>;
    isAuth: boolean;
};

const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={classes.selected}>
                {pages.map((p, i) => (
                    <span
                        key={i}
                        className={
                            props.currentPage === p
                                ? classes.selectedCurrentPage
                                : classes.selectedPage
                        }
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                    >
                        {p}
                    </span>
                ))}
            </div>
            {props.usersPage.users.map((user) => (
                <div key={user.id}>
                    <div className={classes.post}>
                        <div>
                            <NavLink to={"./../Profile/" + user.id}>
                                <img
                                    className={classes.postImg}
                                    src={user.photos.small != null ? user.photos.small : avatar}
                                    alt="avatar_users"
                                />
                            </NavLink>
                            <div>
                                {user.followed ? (
                                    <button
                                        disabled={props.followingInProgress.some(
                                            (id) => id === user.id,
                                        )}
                                        onClick={() => {
                                            props.dispatch(unfollow(user.id));
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        disabled={props.followingInProgress.some(
                                            (id) => id === user.id,
                                        )}
                                        onClick={() => {
                                            props.dispatch(follow(user.id));
                                        }}
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className={classes.description_post}>{user.name}</div>
                        <div>
                            <div>...</div>
                            <div>...</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
