// React ecosystem imports
import React from 'react';

// React-redux ecosystem imports
import { getUserProfileThunkCreator, updateStatusThunkCreator, getUserStatusThunkCreator } from '../../redux/profile-reducer';
import { connect } from 'react-redux'

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from "redux"

// Components imports
import Profile from './Profile';

// HOC imports
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 27793;
        }

        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }

    render() {

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusThunkCreator} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile.userProfile,
        status: state.profile.status
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getUserProfileThunkCreator, getUserStatusThunkCreator, updateStatusThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);