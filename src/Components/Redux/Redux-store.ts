import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import {usersReducer} from "./Users-reducer";

export let reducers = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    usersPage:usersReducer
});


export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers);
