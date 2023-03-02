import { Field, reduxForm } from "redux-form"

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    placeholder='New post'
                    name='newPostText' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'addPost'
})(AddPostForm)

export default AddPostReduxForm