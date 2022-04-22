import React from 'react';
import {addMessageAC, updateTextForMessageAC} from "../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux"
import {ActionType, RootStateType} from "../Redux/Store";


let mapStateToProps = (state: RootStateType) => {

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