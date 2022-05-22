import React from 'react';
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Redux/Profile-reducer";
import {AppStateType} from "../../Redux/Redux-store";


export type ProfileContainerType = {
    profile: any
    setUserProfile:(profile:any)=>void
}


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => this.props.setUserProfile(response.data))
    }

    render = () => {

        return (
            <Main {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile:setUserProfileAC})(ProfileContainer);
