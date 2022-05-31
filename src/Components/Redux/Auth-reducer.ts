import { ActionType } from "./Redux-store";

const initialState = {
    userId: null,
    login: "",
    email: "",
    isAuth: false,
};

export type AuthStateType = {
    userId: any;
    login: string;
    email: string;
    isAuth: boolean;
};

const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload.data,
                isAuth: true,
            };
        default: {
            return state;
        }
    }
};

export const setUserDataAC = (userId: number, login: string, email: string) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            data: { userId, login, email },
        },
    } as const;
};

export default authReducer;
