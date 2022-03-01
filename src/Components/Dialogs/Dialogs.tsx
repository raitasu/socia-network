import React from 'react';
import classes from './Dialogs.module.css'
import Dialog from "./Dialog";
import Message from "./Message";
import {PropsType} from "../../index";

export const Dialogs = (props:PropsType) => {
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
