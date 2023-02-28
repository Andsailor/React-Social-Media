// React ecosystem imports
import React from 'react';

// Styles imports
import classes from './Post.module.css'

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="https://avatars.githubusercontent.com/u/55929607?v=4" alt="avatar" />
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    )

}

export default Post;