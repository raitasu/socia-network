import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import CreatePosts from "./CreatePosts/CreatePosts";
import classes from './Main.module.css'
import {ProfilePageType} from "../../Redux/State";

type MainPropsType = {
    profilePage: ProfilePageType
    addPost:()=>void
    changeTextArea:(text:string)=>void
}

const Main = (props: MainPropsType) => {

    return (
        <main className={classes.main}>
            <HeaderLogo/>
            <Form/>
            <CreatePosts posts={props.profilePage.posts} textForTextArea={props.profilePage.textForTextArea} addPost={props.addPost} changeTextArea={props.changeTextArea}/>
        </main>
    );
};

export default Main;