import {v1} from "uuid";
import {ActionType, ProfilePageType} from "./State";

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1(), message: state.textForTextArea, amountLike: 0}
            state.posts.unshift(newPost)
            state.textForTextArea = ''
            return state
        case "UPDATE-TEXT-FOR-TEXT-AREA":
            state.textForTextArea = action.payload.newText
            return state
        default:
            return state
    }

}
export default profileReducer