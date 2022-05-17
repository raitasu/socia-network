import {FriendsType} from "../Users/UsersContainer";
import {ActionType} from "./Redux-store";


let initialState: InitialStateType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}
type InitialStateType = {
    users: Array<FriendsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}

export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
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
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.payload.isFetching
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
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalCount: totalCount
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage: currentPage
        }
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching: isFetching
        }
    } as const
}