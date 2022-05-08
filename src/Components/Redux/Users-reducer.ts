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
        case 'TOGGLE-FOLLOW':
            return {

                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: !u.followed} : u)
            }
        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state

    }
}


export const toggleFollowAC = (userID: string) => {
    return {
        type: 'TOGGLE-FOLLOW',
        payload: {
            userID: userID
        }
    }  as const
}
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}