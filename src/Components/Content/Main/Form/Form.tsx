import React from 'react';
import classes from './Form.module.css'

const Form = () => {
    return (
        <div className={classes.form}>
            <img src='https://cdn1.ozone.ru/s3/multimedia-n/c1200/6193427267.jpg' alt='avatar'/>
            <div className={classes.description}>
                <div>First Name</div>
                <div>Second Name</div>
                <div>Age</div>
                <div>Country</div>
            </div>
        </div>
    );
};

export default Form;