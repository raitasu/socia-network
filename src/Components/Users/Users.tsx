import React from 'react';
import {UsersPageType} from "../Redux/Store";
import avatar from './../Content/MyPosts/Post/avatar-post.png'
import classes from './../Content/MyPosts/Post/Post.module.css'


export type UsersType = {
    usersPage: UsersPageType
    toggleFollow: (userID: string) => void
}


const Users = (props: UsersType) => {


    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>{<img className={classes.postImg} src={avatar} alt="photoUser"/>}</div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.toggleFollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.toggleFollow(u.id)
                            }}>Follow</button>
                        }
                    </div>

                </span>
                    <span>
                    <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    <span>
                        <div></div>
                        <div></div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
};

export default Users;