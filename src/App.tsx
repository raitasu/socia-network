import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from "./Components/Content/Sidebar/Sidebar";
import Main from "./Components/Content/Main/Main";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {PropsType} from "./index";


function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="page">
                <Header/>
                <div className="content">
                    <Sidebar/>
                    <div className="page-main">
                        <Routes>
                            <Route path="profile" element={<Main posts={props.posts}/>}/>
                            <Route path="dialogs" element={<Dialogs users={props.users} message={props.message}/>}/>
                            <Route path="news" element={<News/>}/>
                            <Route path="music" element={<Music/>}/>
                            <Route path="settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
