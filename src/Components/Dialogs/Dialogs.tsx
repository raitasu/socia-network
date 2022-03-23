import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from "./Dialog";
import Message from "./Message";
import {MessageType, UsersType} from "../Redux/State";

type DialogsPropsType = {
    users: Array<UsersType>,
    message: Array<MessageType>
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <Dialog users={props.users}/>
            </div>
            <div className={classes.message}>
                <Message message={props.message}/>
            </div>
        </div>
    );
};
