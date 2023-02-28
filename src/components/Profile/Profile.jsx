// Components imports
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile} />
            <MyPostsContainer />
        </div>
    )

}

export default Profile;