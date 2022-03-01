import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import {mapperUsers, PropsType} from "../../index";

const Dialog = (props: PropsType) => {



    return (<>
            {mapperUsers}
        </>
    )


};

export default Dialog;