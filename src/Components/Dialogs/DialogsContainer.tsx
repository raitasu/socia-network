import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialogs } from "./Dialogs";
import { AppStateType } from "../Redux/Redux-store";
import { addMessageAC, updateTextForMessageAC } from "../Redux/Dialogs-reducer";
import { AuthStateType } from "../Redux/Auth-reducer";

export type DialogsPageType = {
    users: Array<UserType>;
    message: Array<MessageType>;
    textForMessage: string;
};
export type UserType = {
    id: number;
    name: string;
};
export type MessageType = {
    id: string;
    message: string;
};

const DialogsContainer = () => {
    const dialogsPageState = useSelector<AppStateType, DialogsPageType>(
        (state) => state.dialogsPage,
    );
    const authPageState = useSelector<AppStateType, AuthStateType>((state) => state.auth);
    const dispatch = useDispatch();

    const addMessage = () => {
        dispatch(addMessageAC());
    };

    const updateTextForMessage = (newMessage: string) => {
        dispatch(updateTextForMessageAC(newMessage));
    };
    return (
        <Dialogs
            dialogsPage={dialogsPageState}
            addMessage={addMessage}
            updateTextForMessage={updateTextForMessage}
            isAuth={authPageState.isAuth}
        />
    );
};
export default DialogsContainer;
