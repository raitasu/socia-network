import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import CreatePosts from "./CreatePosts/CreatePosts";
import classes from './Main.module.css'
import {ProfilePageType} from "../../Redux/State";

type MainPropsType = {
    profilePage: ProfilePageType
    dispatch: any
}

const Main = (props: MainPropsType) => {

    return (
        <main className={classes.main}>
            <HeaderLogo/>
            <Form/>
            <CreatePosts dispatch={props.dispatch} posts={props.profilePage.posts}
                         textForTextArea={props.profilePage.textForTextArea}/>
        </main>
    );
};

export default Main;