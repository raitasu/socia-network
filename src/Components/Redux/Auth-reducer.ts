import { ActionType } from "./Redux-store";
import { usersAPI } from "../../Api/Api";
import { Dispatch } from "redux";

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

export const authMe = (): any => {
    return (dispatch: Dispatch<ActionType>) => {
        setTimeout(() => {
            usersAPI.authMe().then((response) => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data;
                    dispatch(setUserDataAC(id, login, email));
                }
            });
        }, 3000);
    };
};
