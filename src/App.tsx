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
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {ActionType} from "./Components/Redux/Store";

type AppPropsType = {
    store: any
    dispatch:(action:ActionType)=>void
}

function App(props: AppPropsType) {
    const state = props.store.getState()

    return (
        <div className="page">
            <Header/>
            <div className="content">
                <Sidebar/>
                <div className="page-main">
                    <Routes>
                        <Route path="profile"
                               element={<Main store={props.store}/>}/>
                        <Route path="dialogs" element={<Dialogs dialogsPage={state.dialogsPage}
                                                                dispatch={props.dispatch}/>}/>
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
