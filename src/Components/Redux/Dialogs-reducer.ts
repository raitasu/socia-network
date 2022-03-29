import {v1} from "uuid";
import {ActionType, DialogsPageType} from "./State";

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {id: v1(), message: state.textForMessage}
            state.message.push(newMessage)
            state.textForMessage = ''
            return state
        case 'UPDATE-TEXT-FOR-MESSAGE':
            state.textForMessage = action.payload.newMessage
            return state
        default:
            return state
    }

}

export default dialogsReducer