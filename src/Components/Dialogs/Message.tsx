import React from 'react';
import classes from "./Dialogs.module.css";
import {MessageType} from "../Redux/Store";

type MessagePropsType = {
    message:Array<MessageType>
}

const Message = (props:MessagePropsType) => {

    const mapperMessage = props.message.map((el) => {
        return <div className={classes.dialog}>{el.message}</div>
    })

    return (<>
            {mapperMessage}
        </>
    );
};

export default Message;