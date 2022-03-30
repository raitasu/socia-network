import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";

let reducers = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer
});

let store = createStore(reducers);

export default store