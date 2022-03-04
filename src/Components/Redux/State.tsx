import classes from "../Content/MyPosts/Post/Post.module.css";
import avatar from "../Content/MyPosts/Post/avatar-post.png";
import like from "../Content/MyPosts/Post/like.png";
import React from "react";

export type UsersType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    amountLike: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    users: Array<UsersType>
    message: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello, how are you?", amountLike: 10},
            {id: 2, message: "What is the best moto?", amountLike: 7},
            {id: 3, message: "Harley-Davidson is a top motorcycle!", amountLike: 33},
            {id: 4, message: "Maybe Yamaha ?", amountLike: 0},
            {id: 5, message: "No-no-no ))", amountLike: 100}
        ]
    },
    dialogsPage: {
        users: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Nikolay'},
            {id: 4, name: 'Petr'},
            {id: 5, name: 'Saveliy'},
            {id: 6, name: 'Pavel'}
        ],
        message: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What new?'},
            {id: 4, message: 'What happening?'},
            {id: 5, message: 'Yo!'},
            {id: 6, message: 'Yo!'}
        ]
    }
}




