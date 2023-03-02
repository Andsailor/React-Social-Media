import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newMessageText'
                    placeholder='Enter your message' />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'sendMessage'
})(AddMessageForm)

export default AddMessageReduxForm;