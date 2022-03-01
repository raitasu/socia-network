import React from 'react';
import classes from "./Dialogs.module.css";
import {mapperMessage, PropsType} from "../../index";


const Message = (props: PropsType) => {

    return (<>
            {mapperMessage}
        </>
    );
};

export default Message;