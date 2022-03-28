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
    textForMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

export let store: StoreType = {
    _state: {
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
            textForMessage: '',
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
    },
    _callSubscriber() {
        console.log('State changed!')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        switch (action.type) {
            case "ADD-POST":
                let newPost = {id: v1(), message: this._state.profilePage.textForTextArea, amountLike: 0}
                this._state.profilePage.posts.unshift(newPost)
                this._state.profilePage.textForTextArea = ''
                this._callSubscriber()
                break;
            case "UPDATE-TEXT-FOR-TEXT-AREA":
                this._state.profilePage.textForTextArea = action.payload.newText
                this._callSubscriber()
                break;
            case 'ADD-MESSAGE':
                let newMessage = {id: v1(), message: this._state.dialogsPage.textForMessage}
                this._state.dialogsPage.message.push(newMessage)
                this._state.dialogsPage.textForMessage = ''
                this._callSubscriber()
                break;
            case 'UPDATE-TEXT-FOR-MESSAGE':
                this._state.dialogsPage.textForMessage = action.payload.newMessage
                this._callSubscriber()
                break;
        }
    }
}

export type ActionType = UpdateTextForTextAreaACType | AddPostACType | AddMessageACType | UpdateTextForMessageAcType;


export type UpdateTextForTextAreaACType = ReturnType<typeof updateTextForTextAreaAC>

export type AddPostACType = ReturnType<typeof addPostAC>

export type AddMessageACType = ReturnType<typeof addMessageAC>

export type UpdateTextForMessageAcType = ReturnType<typeof updateTextForMessageAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateTextForTextAreaAC = (newText: string) => {
    return {
        type: 'UPDATE-TEXT-FOR-TEXT-AREA',
        payload: {
            newText: newText
        }
    } as const
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateTextForMessageAC = (newMessage: string) => {
    return {
        type: 'UPDATE-TEXT-FOR-MESSAGE',
        payload: {
            newMessage: newMessage
        }
    } as const
}
