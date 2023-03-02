import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="input"
                    type="email"
                    name="email"
                    placeholder="Email" />
            </div>
            <div>
                <Field
                    component="input"
                    type="password"
                    name="password"
                    placeholder="Password" />
            </div>
            <div>
                <Field
                    component="input"
                    type="checkbox"
                    name="rememberMe" />
                Remember me
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

// HOC for LoginForm
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;