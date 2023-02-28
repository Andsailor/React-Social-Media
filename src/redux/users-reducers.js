/// API imports
import { usersAPI } from "../api/api";

const
    FOLLOW_USER = "FOLLOW-USER",
    UNFOLLOW_USER = "UNFOLLOW-USER",
    SET_USERS = "SET-USERS",
    SET_CURRENT_PAGE = "SET-CURRENT-PAGE",
    SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT",
    TOGGLE_ISFETCHING = "TOGGLE-ISFETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";


let initialState = {
    users: [],
    onPageUsersCount: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };

        case SET_USERS:
            return {
                ...state, users: [...action.users]
            };

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }

        case TOGGLE_ISFETCHING:
            return {
                ...state, isFetching: action.toggle
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.toggle ?
                    [...state.followingInProgress, action.id] :
                    [state.followingInProgress.filter(id => id !== action.id)]

            }

        default:
            return state;
    }
}

export const followUserActionCreator = (userId) => ({ type: FOLLOW_USER, userId })
export const unfollowUserActionCreator = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentPageActionCreator = (page) => ({ type: SET_CURRENT_PAGE, page })
export const setTotalUsersCountActionCreator = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleIsFetchingActionCreator = (toggle) => ({ type: TOGGLE_ISFETCHING, toggle })
export const toggleFollowingInProgressActionCreator = (toggle, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, toggle, id })


// React-Thunk 
export const getUsersThunkCreator = (currentPage, onPageUsersCount) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        usersAPI.getUsers(currentPage, onPageUsersCount)
            .then(response => {
                dispatch(setCurrentPageActionCreator(currentPage))
                dispatch(toggleIsFetchingActionCreator(false))
                dispatch(setUsersActionCreator(response.items))
                dispatch(setTotalUsersCountActionCreator(response.totalCount))
            });
    }
}

export const followUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressActionCreator(true, id))
        usersAPI.followUser(id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(followUserActionCreator(id))
                }
                dispatch(toggleFollowingInProgressActionCreator(false, id))
            })
    }
}

export const unfollowUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressActionCreator(true, id))
        usersAPI.unfollorUser(id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(unfollowUserActionCreator(id))
                }
                dispatch(toggleFollowingInProgressActionCreator(false, id))
            })
    }
}

export default usersReducer;