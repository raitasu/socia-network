import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostState, RootStateType, updateTextForTextArea} from "./Components/Redux/State";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPostState} changeTextArea ={updateTextForTextArea}/>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
