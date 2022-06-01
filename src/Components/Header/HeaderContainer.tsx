import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { AuthStateType, setUserDataAC } from "../Redux/Auth-reducer";
import { AppStateType } from "../Redux/Redux-store";
import { usersAPI } from "../../Api/Api";

const HeaderContainer = () => {
    const authState = useSelector<AppStateType, AuthStateType>((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            usersAPI.authMe().then((response) => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data;
                    dispatch(setUserDataAC(id, login, email));
                }
            });
        }, 3000);
    }, []);

    return <Header login={authState.login} isAuth={authState.isAuth} />;
};

export default HeaderContainer;
