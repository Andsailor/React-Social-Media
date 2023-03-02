import React from "react";

import { authAPI } from "../../api/api";
import { authMeThunkCreator } from "../../redux/auth-reducer";

import LoginReduxForm from '../Forms/LoginForm.jsx'

const Login = () => {

    const onSubmit = (formData) => {
        authAPI.login(formData.email, formData.password)
            .then(response => {
                if (response.data.resultCode === 0) {
                    authMeThunkCreator();
                }
            })
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login