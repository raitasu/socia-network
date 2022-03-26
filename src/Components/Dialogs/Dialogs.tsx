import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import Dialog from "./Dialog";
import Message from "./Message";
import {addMessageAC, DialogsPageType, updateTextForMessageAC} from "../Redux/State";

type DialogsPropsType = {
    // users: Array<UsersType>,
    // message: Array<MessageType>
    dialogsPage: DialogsPageType,
    dispatch: any
}

export const Dialogs = (props: DialogsPropsType) => {

    let newPostElement = React.createRef<any>();

    const onClickHandler = () => {
        props.dispatch(addMessageAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.dispatch(updateTextForMessageAC(newMessage))
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <Dialog users={props.dialogsPage.users}/>
                </div>
                <div className={classes.message}>
                    <Message message={props.dialogsPage.message}/>
                </div>

            </div>
            <div className={classes.addMessage}><textarea value={props.dialogsPage.textForMessage} onChange={onChangeHandler} ref={newPostElement}/>
                <button onClick={onClickHandler}>Add message</button>
            </div>
        </div>
    );
};
