import React from 'react';
import avatar from './../Content/MyPosts/Post/avatar-post.png'
import classes from './Users.module.css'
import {v1} from "uuid";
import axios from "axios";
import {FriendsType, UsersPageType} from "./UsersContainer";

export type UsersType = {
    usersPage: UsersPageType
    toggleFollow: (userID: string) => void
    setUsers: (users: Array<FriendsType>) => void
}


const Users = (props: UsersType) => {

    const getUsers = () => {
        if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>props.setUsers(response.data.items))
    }
    }




    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {

                props.usersPage.users.map(user => <div key={user.id}>
                    <div className={classes.post}>
                        <div>
                            <img className={classes.postImg} src={user.photos.small != null ? user.photos.small : avatar} alt="avatar_users"/>
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