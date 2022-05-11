import {ActionType, FriendsType} from "./Store";
import {v1} from "uuid";


let initialState = {
    users: [
        {
            id: v1(),
            name: 'Pavel.B',
            status: 'Sex, drugs and alcohol',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            },
            followed: true,
            photos: {}
        },
        {
            id: v1(),
            name: 'Vladislav.D',
            status: 'Dota 2 is the best game in the world',
            location: {
                country: 'Georgia',
                city: 'Tbilisi'
            },
            followed: true,
            photos: {}
        },
        {
            id: v1(), name: 'Nikolay.H',
            status: 'I am sad',
            location: {
                country: 'Russia',
                city: 'Moscow'
            },
            followed: false,
            photos: {}
        },
        {
            id: v1(),
            name: 'Elizaveta.R',
            status: "Let's go my friends!",
            location: {
                country: 'Ukraine',
                city: 'Kiev'
            },
            followed: false,
            photos: {}
        },
    ]
}


export const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case 'TOGGLE-FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: !u.followed} : u)
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
export const setUsersAC = (users: Array<FriendsType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}