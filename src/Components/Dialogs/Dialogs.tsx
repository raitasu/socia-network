import React, { useEffect } from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import { DialogsPageType } from "./DialogsContainer";
import { useNavigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm";

type DialogsPropsType = {
    dialogsPage: DialogsPageType;
    addMessage: () => void;
    updateTextForMessage: (newMessage: string) => void;
    isAuth: boolean;
};

export const Dialogs = (props: DialogsPropsType) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth) {
            return navigate("/login");
        }
    }, [props.isAuth]);

    // const onClickHandler = () => {
    //     props.addMessage();
    // };
    // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newMessage = e.currentTarget.value;
    //     props.updateTextForMessage(newMessage);
    // };

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <Dialog users={props.dialogsPage.users} />
                </div>
                <div className={classes.message}>
                    <Message message={props.dialogsPage.message} />
                </div>
            </div>
            <div>
                <AddMessageForm />
            </div>
        </div>
    );
};
