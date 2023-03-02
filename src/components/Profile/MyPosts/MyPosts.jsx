// React ecosystem imports
import React from 'react';

// Styles imports
import classes from './MyPosts.module.css'

// Components imports
import Post from './Post/Post';
import AddPostReduxForm from '../../Forms/AddPostForm';

const MyPosts = (props) => {

    let state = props.profile;

    let postsElem = state.postsData.map(post => {
        return (
            <Post key={post.id} message={post.message} likeCounts={post.likeCounts} />
        )
    })

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={addNewPost} />
            <div className={classes.posts}>
                {postsElem}
            </div>
        </div>
    )
}

export default MyPosts;