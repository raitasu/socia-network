import React from 'react';
import avatar from './../Content/MyPosts/Post/avatar-post.png'
import classes from './Users.module.css'
import axios from "axios";
import {FriendsType, UsersPageType} from "./UsersContainer";

export type UsersType = {
    usersPage: UsersPageType
    toggleFollow: (userID: string) => void
    setUsers: (users: Array<FriendsType>) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount:(totalCount:number)=>void
}

export class Users extends React.Component<UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount/100)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => this.props.setUsers(response.data.items))
    }
    // getUsers = () => {
    //     if (this.props.usersPage.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items))
    //     }
    // }

    render = () => {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={classes.selected}>

                {

                    pages.map((p, i) => <span key={i}
                                              className={this.props.currentPage === p ? classes.selectedCurrentPage : classes.selectedPage}
                                              onClick={() => {
                                                  this.onPageChanged(p)
                                              }}>{p}</span>)

                }

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