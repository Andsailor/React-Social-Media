// React ecosystem imports
import React from "react"

// React-Router imports
import { Navigate } from "react-router-dom"

// React-redux imports
import { connect } from "react-redux"

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authData.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"} />
            return <Component {...this.props} />
        }

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


    return ConnectedAuthRedirectComponent;
}