import {v1} from "uuid";

export type UsersType = {
    id: number
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    amountLike: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    textForTextArea: string
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
            {id: v1(), message: "Hello, how are you?", amountLike: 10},
            {id: v1(), message: "What is the best moto?", amountLike: 7},
            {id: v1(), message: "Harley-Davidson is a top motorcycle!", amountLike: 33},
            {id: v1(), message: "Maybe Yamaha ?", amountLike: 0},
            {id: v1(), message: "No-no-no ))", amountLike: 100}
        ],
        textForTextArea: ''
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
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'What new?'},
            {id: v1(), message: 'What happening?'},
            {id: v1(), message: 'Yo!'},
            {id: v1(), message: 'Yo!'}
        ]
    }
}

let rerenderEntireTree = () => {

}

export const addPostState = () => {
    let newPost = {id: v1(), message: state.profilePage.textForTextArea, amountLike: 0}
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree()
}
export const updateTextForTextArea = (newNext: string) => {
    state.profilePage.textForTextArea = newNext
    rerenderEntireTree()
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}
