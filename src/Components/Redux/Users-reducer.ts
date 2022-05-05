import {ActionType} from "./Store";
import {v1} from "uuid";


let initialState = {
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


export const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return state.users.map(u=>action.userID===u.id ? {...u, status: !u.status}: '')
        case 'UNFOLLOW':
            return state
        default:
            return state

    }
}


export const followAC = (ID:string) => {
    return {
        type: 'FOLLOW',
        userID: ID
    } as const
}
export const unfollowAC = (ID:string) => {
    return {
        type: 'UNFOLLOW',
        userID: ID
    } as const
}