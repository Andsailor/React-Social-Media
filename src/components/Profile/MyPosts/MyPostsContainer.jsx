// React-redux ecosystem imports
import { connect } from 'react-redux';
import { changeNewPostActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';

// Components imports
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {

    return {
        profile: state.profile
    }

}

let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(changeNewPostActionCreator(text))
        }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;