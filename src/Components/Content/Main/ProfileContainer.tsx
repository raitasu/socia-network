import React from 'react';
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../Redux/Profile-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

export type ProfileContainerType = {
    profile: any
    setUserProfile:(profile:any)=>void
    router:any
}


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {

        let userId = this.props.router.params.userId;
if (!userId) {
    userId = ''
}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => this.props.setUserProfile(response.data))

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



export default connect(mapStateToProps, {setUserProfile:setUserProfileAC})(withRouter(ProfileContainer));


function withRouter(ProfileContainer:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
