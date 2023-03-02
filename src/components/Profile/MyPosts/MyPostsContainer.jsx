// React-redux ecosystem imports
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';

// Components imports
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {

    return {
        profile: state.profile
    }

}

let mapDispatchToProps = (dispatch) => {

    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;