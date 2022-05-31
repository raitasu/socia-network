import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AuthStateType, setUserDataAC } from "../Redux/Auth-reducer";
import { AppStateType } from "../Redux/Redux-store";

const HeaderContainer = () => {
    const authState = useSelector<AppStateType, AuthStateType>((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                    withCredentials: true,
                })
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        let { id, login, email } = response.data.data;
                        dispatch(setUserDataAC(id, login, email));
                    }
                });
        }, 3000);
    }, []);

    return <Header login={authState.login} isAuth={authState.isAuth} />;
};

export default HeaderContainer;
