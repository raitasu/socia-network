import React from 'react';
import classes from "./Users.module.css";
import avatar from "../Content/MyPosts/Post/avatar-post.png";
import {UsersPageType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

export type UsersType = {
    usersPage: UsersPageType
    toggleFollow: (userID: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={classes.selected}>
                {
                    pages.map((p, i) => <span key={i}
                                              className={props.currentPage === p ? classes.selectedCurrentPage : classes.selectedPage}
                                              onClick={() => {
                                                  props.onPageChanged(p)
                                              }}>{p}</span>)

                }
            </div>
            {
                props.usersPage.users.map(user => <div key={user.id}>
                    <div className={classes.post}>
                        <div>
                            <NavLink to={'./../Profile/' + user.id}>
                                <img className={classes.postImg}
                                     src={user.photos.small != null ? user.photos.small : avatar}
                                     alt="avatar_users"/>
                            </NavLink>
                            <div>
                                {user.followed ? <button onClick={() => {
                                        props.toggleFollow(user.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.toggleFollow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={classes.description_post}>{user.name}</div>
                        <div>
                            <div>...</div>
                            <div>...</div>
                        </div>
                    </div>
                </div>)

            }
        </div>
    );
};

export default Users;