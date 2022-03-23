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
    addPost: (title:string) => void

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
                               element={<Main posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                        <Route path="dialogs" element={<Dialogs users={props.state.dialogsPage.users}
                                                                message={props.state.dialogsPage.message}/>}/>
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
