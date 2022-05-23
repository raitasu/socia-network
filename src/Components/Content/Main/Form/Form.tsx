import React from 'react';
import classes from './Form.module.css'
import Preloader from "../../../Common/Preloader/Preloader";


export type FormType = {
    profile:any
}
const Form = (props:FormType) => {

    if (!props.profile) {
        return <><Preloader/></>
    }


    return (
        <div className={classes.form}>
            <img src={props.profile.photos.small !== null ? props.profile.photos.small : 'https://cdn1.ozone.ru/s3/multimedia-n/c1200/6193427267.jpg'} alt='avatar'/>
            <div className={classes.description}>
                <div className={classes.itemName}>First Name</div>
                <div className={classes.itemName}>Second Name</div>
                <div className={classes.itemName}>Age</div>
                <div className={classes.itemName}>Country</div>
            </div>
        </div>
    );
};

export default Form;