import {v1} from "uuid";
import {ActionType} from "./Redux-store";


let initialState = {
    posts: [
        {id: v1(), message: "Hello, how are you?", amountLike: 10},
        {id: v1(), message: "What is the best moto?", amountLike: 7},
        {id: v1(), message: "Harley-Davidson is a top motorcycle!", amountLike: 33},
        {id: v1(), message: "Maybe Yamaha ?", amountLike: 0},
        {id: v1(), message: "No-no-no ))", amountLike: 100}
    ],
    textForTextArea: ''
}

export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1(), message: state.textForTextArea, amountLike: 0}
            return {...state, posts: [newPost, ...state.posts], textForTextArea: ''}
        case "UPDATE-TEXT-FOR-TEXT-AREA": {
            let stateCopy = {...state}
            stateCopy.textForTextArea = action.payload.newText
            return stateCopy
        }
        default:
            return state
    }

}
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateTextForTextAreaAC = (newText: string) => {
    return {
        type: 'UPDATE-TEXT-FOR-TEXT-AREA',
        payload: {
            newText: newText
        }
    } as const
}

export default profileReducer