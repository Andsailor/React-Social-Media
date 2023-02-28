// React ecosystem imports
import React from 'react';

// React-Redux ecosystem imports
import { connect } from 'react-redux'
import {
    toggleIsFetchingActionCreator,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
} from '../../redux/users-reducers';
import { compose } from 'redux';

// Components 
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class UsersContainer extends React.Component {

    // To get users when component rendered
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.onPageUsersCount)
    }

    // To get users when page is changed
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.onPageUsersCount)
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader /> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                onPageUsersCount={this.props.onPageUsersCount}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                users={this.props.users}
                toggleIsFetching={this.props.toggleIsFetching}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress} />

        </>
    }

}

// Connecting store to Users component
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        onPageUsersCount: state.usersPage.onPageUsersCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// Connecting dispatch's callbacks to Users component
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            dispatch(followUserThunkCreator(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowUserThunkCreator(id))
        },
        toggleIsFetching: (toggle) => {
            dispatch(toggleIsFetchingActionCreator(toggle))
        },
        getUsersThunk: (currentPage, onPageUsersCount) => {
            dispatch(getUsersThunkCreator(currentPage, onPageUsersCount))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer);