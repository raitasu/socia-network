import {combineReducers, createStore} from "redux";
import ProfileReducer, {addPostAC, updateTextForTextAreaAC} from "./Profile-reducer";
import DialogsReducer, {addMessageAC, updateTextForMessageAC} from "./Dialogs-reducer";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC, usersReducer} from "./Users-reducer";

export let reducers = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    usersPage:usersReducer
});

export type ActionType =
    ReturnType<typeof updateTextForTextAreaAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateTextForMessageAC>
    | ReturnType<typeof toggleFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers);
