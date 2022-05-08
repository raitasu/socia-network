import React from 'react';
import {UsersPageType} from "../Redux/Store";
import avatar from './../Content/MyPosts/Post/avatar-post.png'
import classes from './../Content/MyPosts/Post/Post.module.css'
import like from "../Content/MyPosts/Post/like-removebg-preview.png";


export type UsersType = {
    usersPage: UsersPageType
    toggleFollow: (userID: string) => void
}


const Users = (props: UsersType) => {


    return (
        <div>
            {
                props.usersPage.users.map(user => <div key={user.id}>
                    <div className={classes.post}>
                        <img className={classes.postImg} src={avatar} alt="avatar_users"/>
                        <div>
                            {user.followed ? <button onClick={() => {
                                    props.toggleFollow(user.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.toggleFollow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                        <div className={classes.description_post}>{user.fullName}</div>
                        <div className={classes.like}>
                            <img className={classes.like} src={like} alt="like_logo"/>
                            <div className={classes.amountLike}>{user.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;