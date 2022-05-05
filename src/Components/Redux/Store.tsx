import {v1} from "uuid";
import profileReducer, {addPostAC, updateTextForTextAreaAC} from "./Profile-reducer";
import dialogsReducer, {addMessageAC, updateTextForMessageAC} from "./Dialogs-reducer";
import {followAC, unfollowAC} from "./Users-reducer";

export type LocationType = {
    country: string
    city: string
}
export type FriendsType = {
    id: string
    fullName: string
    status: string
    location: LocationType
    followed: boolean
}
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
export type UsersPageType = {
    users: Array<FriendsType>
}
export type DialogsPageType = {
    users: Array<UsersType>
    message: Array<MessageType>
    textForMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
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

        },
        usersPage: {
            users: [
                {
                    id: v1(),
                    fullName: 'Pavel.B',
                    status: 'Sex, drugs and alcohol',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk'
                    },
                    followed: true
                },
                {
                    id: v1(),
                    fullName: 'Vladislav.D',
                    status: 'Dota 2 is the best game in the world',
                    location: {
                        country: 'Georgia',
                        city: 'Tbilisi'
                    },
                    followed: true
                },
                {
                    id: v1(), fullName: 'Nikolay.H',
                    status: 'I am sad',
                    location: {
                        country: 'Russia',
                        city: 'Moscow'
                    },
                    followed: false
                },
                {
                    id: v1(),
                    fullName: 'Elizaveta.R',
                    status: "Let's go my friends!",
                    location: {
                        country: 'Ukraine',
                        city: 'Kiev'
                    },
                    followed: false
                },
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()

    }

}

export type ActionType =
    ReturnType<typeof updateTextForTextAreaAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateTextForMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>






