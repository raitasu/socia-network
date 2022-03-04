import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import {UsersType} from "../Redux/State";

type DialogPropsType = {
    users:Array<UsersType>

}

const Dialog = (props:DialogPropsType) => {

    const mapperUsers = props.users.map((el) => {
        return <div className={classes.item}><NavLink to={"/Dialogs/" + el.id}>{el.name}</NavLink></div>
    })

    return (<>
            {mapperUsers}
        </>
    )


};

export default Dialog;