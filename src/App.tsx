import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Content/Sidebar/Sidebar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import ProfileContainer from "./Components/Content/Main/ProfileContainer";
import { UsersContainer } from "./Components/Users/UsertsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

function App() {
    return (
        <div className="page">
            <HeaderContainer />
            <div className="content">
                <Sidebar />
                <div className="page-main">
                    <Routes>
                        <Route path="/profile/1" element={<ProfileContainer />} />
                        <Route path="/profile/:userId" element={<ProfileContainer />} />
                        <Route path="/dialogs" element={<DialogsContainer />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
