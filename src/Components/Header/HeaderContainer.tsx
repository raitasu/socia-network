import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { authMe, AuthStateType } from "../Redux/Auth-reducer";
import { AppStateType } from "../Redux/Redux-store";

const HeaderContainer = () => {
    const authState = useSelector<AppStateType, AuthStateType>((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authMe());
    }, []);

    return <Header login={authState.login} isAuth={authState.isAuth} />;
};

export default HeaderContainer;
