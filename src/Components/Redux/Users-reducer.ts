import {FriendsType} from "../Users/UsersContainer";
import {ActionType} from "./Redux-store";


let initialState:InitialStateType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage }

        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
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
export const setTotalUsersCountAC = (totalCount:number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalCount: totalCount
        }
    } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage: currentPage
        }
    } as const
}