import {ActionType} from "./Store";
import {v1} from "uuid";
import {FriendsType} from "../Users/UsersContainer";


let initialState:InitialStateType = {
    users: []
}
// {
//     id: v1(),
//     name: 'Pavel.B',
//     status: 'Sex, drugs and alcohol',
//     location: {
//         country: 'Belarus',
//         city: 'Minsk'
//     },
//     followed: true,
//     photos: {}
// },
// {
//     id: v1(),
//     name: 'Vladislav.D',
//     status: 'Dota 2 is the best game in the world',
//     location: {
//         country: 'Georgia',
//         city: 'Tbilisi'
//     },
//     followed: true,
//     photos: {}
// },
// {
//     id: v1(), name: 'Nikolay.H',
//     status: 'I am sad',
//     location: {
//         country: 'Russia',
//         city: 'Moscow'
//     },
//     followed: false,
//     photos: {}
// },
// {
//     id: v1(),
//     name: 'Yana.R',
//     status: "Let's go my friends!",
//     location: {
//         country: 'Ukraine',
//         city: 'Kiev'
//     },
//     followed: false,
//     photos: {}
// },

type InitialStateType = {
    users: Array<FriendsType>
}
export const usersReducer = (state = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case 'TOGGLE-FOLLOW':

            return {
                ...state,
                // @ts-ignore
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
    } as const
}
export const setUsersAC = (users: Array<FriendsType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}