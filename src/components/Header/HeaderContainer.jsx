// React ecosystem imports
import React from "react";

// React-redux ecosystem imports
import { authMeThunkCreator } from "../../redux/auth-reducer";
import { connect } from "react-redux";

// Components imports
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMeThunkCreator();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        login: state.authData.login
    }
}


export default connect(mapStateToProps, { authMeThunkCreator })(HeaderContainer);