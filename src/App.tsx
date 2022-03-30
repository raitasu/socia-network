import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Route, Routes} from 'react-router-dom';
import Sidebar from "./Components/Content/Sidebar/Sidebar";
import Main from "./Components/Content/Main/Main";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {ActionType} from "./Components/Redux/Store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: any
    dispatch:(action:ActionType)=>void
}

function App(props: AppPropsType) {

    return (
        <div className="page">
            <Header/>
            <div className="content">
                <Sidebar/>
                <div className="page-main">
                    <Routes>
                        <Route path="profile"
                               element={<Main store={props.store}/>}/>
                        <Route path="dialogs" element={<DialogsContainer store={props.store}/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
