import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPostState, state, subscribe, updateTextForTextArea} from "./Components/Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPostState} changeTextArea={updateTextForTextArea}/>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
subscribe(rerenderEntireTree)
rerenderEntireTree()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
