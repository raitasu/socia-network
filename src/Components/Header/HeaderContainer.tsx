import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { AuthStateType } from "../Redux/Auth-reducer";
import { AppStateType } from "../Redux/Redux-store";

const HeaderContainer = () => {
    const authState = useSelector<AppStateType, AuthStateType>((state) => state.auth);

    return <Header login={authState.login} isAuth={authState.isAuth} />;
};

export default HeaderContainer;
