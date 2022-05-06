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
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";


function App() {

    return (
        <div className="page">
            <Header/>
            <div className="content">
                <Sidebar/>
                <div className="page-main">
                    <Routes>
                        <Route path="profile" element={<Main/>}/>
                        <Route path="dialogs" element={<DialogsContainer/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Settings/>}/>
                        <Route path="users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
