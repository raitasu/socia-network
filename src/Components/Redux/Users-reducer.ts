import { ActionType } from "./Redux-store";
import { FriendsType } from "../Users/Users";
import { usersAPI } from "../../Api/Api";
import { Dispatch } from "redux";

export let initialUsersState: InitialUsersStateType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};
export type InitialUsersStateType = {
    users: Array<FriendsType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: String[];
};

export const usersReducer = (
    state = initialUsersState,
    action: ActionType,
): InitialUsersStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state,
                users: action.users,
            };
        case "TOGGLE-FOLLOW":
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.payload.userID ? { ...u, followed: !u.followed } : u,
                ),
            };
        case "SET-CURRENT-PAGE":
            return { ...state, currentPage: action.payload.currentPage };
        case "SET-TOTAL-USERS-COUNT":
            return { ...state, totalUsersCount: action.payload.totalCount };
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.payload.isFetching,
            };
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter((id) => id !== action.payload.userId),
            };
        default:
            return state;
    }
};
export const toggleFollowAC = (userID: string) => {
    return {
        type: "TOGGLE-FOLLOW",
        payload: {
            userID: userID,
        },
    } as const;
};
export const setUsersAC = (users: Array<FriendsType>) => {
    return {
        type: "SET-USERS",
        users: users,
    } as const;
};
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {
            totalCount: totalCount,
        },
    } as const;
};
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage: currentPage,
        },
    } as const;
};
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {
            isFetching: isFetching,
        },
    } as const;
};
export const toggleIsFollowingAC = (isFetching: boolean, userId: string) => {
    return {
        type: "TOGGLE-IS-FOLLOWING",
        payload: {
            isFetching: isFetching,
            userId: userId,
        },
    } as const;
};

export const getUsers = (currentPage: number, pageSize: number): any => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(response.items));
            dispatch(setTotalUsersCountAC(response.totalCount / 100));
        });
    };
};
export const follow = (userId: string): any => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFollowingAC(true, userId));
        usersAPI.followUser(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(toggleFollowAC(userId));
            }
            dispatch(toggleIsFollowingAC(false, userId));
        });
    };
};
export const unfollow = (userId: string): any => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFollowingAC(true, userId));
        usersAPI.unfollowUser(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(toggleFollowAC(userId));
            }
            dispatch(toggleIsFollowingAC(false, userId));
        });
    };
};
