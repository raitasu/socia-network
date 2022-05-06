import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import {usersReducer} from "./Users-reducer";

let reducers = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    usersPage:usersReducer
});

let store = createStore(reducers);

export default store