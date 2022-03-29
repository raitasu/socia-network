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
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateTextForMessageAC = (newMessage: string) => {
    return {
        type: 'UPDATE-TEXT-FOR-MESSAGE',
        payload: {
            newMessage: newMessage
        }
    } as const
}

export default dialogsReducer