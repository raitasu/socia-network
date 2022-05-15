import React from 'react';
import avatar from './../Content/MyPosts/Post/avatar-post.png'
import classes from './Users.module.css'
import axios from "axios";
import {FriendsType, UsersPageType} from "./UsersContainer";

export type UsersType = {
    usersPage: UsersPageType
    toggleFollow: (userID: string) => void
    setUsers: (users: Array<FriendsType>) => void
}

export class Users extends React.Component<UsersType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items))
    }

    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items))
        }
    }

    render = () => {
        return <div>
            <div className={classes.selected}>
                <span className={classes.selectedPage}>1</span>
                <span className={classes.selectedPage}>2</span>
                <span className={classes.selectedPage}>3</span>
                <span className={classes.selectedPage}>4</span>
                <span className={classes.selectedPage}>5</span>
            </div>


            {
                this.props.usersPage.users.map(user => <div key={user.id}>
                    <div className={classes.post}>
                        <div>
                            <img className={classes.postImg}
                                 src={user.photos.small != null ? user.photos.small : avatar} alt="avatar_users"/>
                            <div>
                                {user.followed ? <button onClick={() => {
                                        this.props.toggleFollow(user.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        this.props.toggleFollow(user.id)
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
    }
}