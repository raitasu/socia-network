import React from 'react';
import {addMessageAC, updateTextForMessageAC} from "../Redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: any
}

export const DialogsContainer = (props: DialogsPropsType) => {
    const state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const updateTextForMessage = (newMessage: string) => {
        props.store.dispatch(updateTextForMessageAC(newMessage))
    }

    return (<Dialogs addMessage={addMessage} updateTextForMessage={updateTextForMessage} dialogsPage={state.dialogsPage} />);
};
