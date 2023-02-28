// React ecosystem imports
import React from 'react';

// Styles imports
import classes from './MyPosts.module.css'

// Components imports
import Post from './Post/Post';

const MyPosts = (props) => {

    let state = props.profile;

    let newPostElement = React.createRef();

    let postsElem = state.postsData.map(post => {
        return (
            <Post key={post.id} message={post.message} likeCounts={post.likeCounts} />
        )
    })

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                        value={state.newPostText}
                        onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                {postsElem}

            </div>
        </div>
    )
}

export default MyPosts;