import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import classes from "./Components/Content/MyPosts/Post/Post.module.css";
import avatar from "./Components/Content/MyPosts/Post/avatar-post.png";
import like from "./Components/Content/MyPosts/Post/like.png";
import {NavLink} from "react-router-dom";

export type PropsType = {
    users?: Array<usersType>
    message?: Array<messageType>
    posts?: Array<PostType>
}
export type usersType =
    {
        id?: number,
        name?: string
    }
export type messageType = {
    id?: number
    message?: string
}
export type PostType = {
    id?: number,
    message?: string,
    amountLike?: number
}
let users: Array<usersType> = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Nikolay'},
    {id: 4, name: 'Petr'},
    {id: 5, name: 'Saveliy'},
    {id: 6, name: 'Pavel'}
]
let message: Array<messageType> = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What new?'},
    {id: 4, message: 'What happening?'},
    {id: 5, message: 'Yo!'},
    {id: 6, message: 'Yo!'}
]
let posts: Array<PostType> = [
    {id: 1, message: "Hello, how are you?", amountLike: 10},
    {id: 2, message: "What is the best moto?", amountLike: 7},
    {id: 3, message: "Harley-Davidson is a top motorcycle!", amountLike: 33},
    {id: 4, message: "Maybe Yamaha ?", amountLike: 0},
    {id: 5, message: "No-no-no ))", amountLike: 100}
]
export const mapperPost = posts.map((el) => {
    return (
        <div className={classes.post}>
            <img className={classes.postImg} src={avatar} alt="avatar_users"/>
            <div className={classes.description_post}>{el.message}</div>
            <div className={classes.like}>
                <img className={classes.like} src={like} alt="like-logo"/>
                <div className={classes.amountLike}>{el.amountLike}</div>
            </div>
        </div>
    )
})
export const mapperUsers = users.map((el) => {
    return <div className={classes.item}><NavLink to={"/Dialogs/" + el.id}>{el.name}</NavLink></div>
})
export const mapperMessage = message.map((el) => {
    return <div className={classes.dialog}>{el.message}</div>
})

ReactDOM.render(
    <React.StrictMode>
        <App users={users} message={message} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
