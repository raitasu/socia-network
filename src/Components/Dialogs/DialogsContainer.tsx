import React from 'react';
import {addMessageAC, updateTextForMessageAC} from "../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux"
import {ActionType, AppStateType} from "../Redux/Redux-store";

export type DialogsPageType = {
     users: Array<UserType>
     message: Array<MessageType>
     textForMessage: string
 }
export type UserType = {
     id: number
     name: string
 }
export type MessageType = {
     id: string
     message: string
 }
type MapStatePropsType = {
    dialogsPage: DialogsPageType
}




let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateTextForMessage: (newMessage: string) => {
            dispatch(updateTextForMessageAC(newMessage))
        }
    }

}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)