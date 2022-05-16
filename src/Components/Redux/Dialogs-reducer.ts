import {v1} from "uuid";
import {ActionType} from "./Redux-store";


let initialState = {
    users: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Nikolay'},
        {id: 4, name: 'Petr'},
        {id: 5, name: 'Saveliy'},
        {id: 6, name: 'Pavel'}
    ],
    message: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'What new?'},
        {id: v1(), message: 'What happening?'},
        {id: v1(), message: 'Yo!'},
        {id: v1(), message: 'Yo!'}
    ],
    textForMessage: ''

}

const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {id: v1(), message: state.textForMessage}
            // stateCopy.message.push(newMessage)
            return {...state, message: [...state.message, newMessage], textForMessage: ''}
        case 'UPDATE-TEXT-FOR-MESSAGE':
            // state.textForMessage = action.payload.newMessage
            return {...state, textForMessage: action.payload.newMessage}
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