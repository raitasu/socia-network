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
import {RootStateType} from "./Components/Redux/State";

type AppPropsType = {
    state: RootStateType
    dispatch: any
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
                               element={<Main dispatch={props.dispatch} profilePage={props.state.profilePage}/>}/>
                        <Route path="dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage}
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
