// API imports
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likeCounts: 1 },
        { id: 2, message: 'It"s my first post', likeCounts: 3 }
    ],
    newPostText: 'Create new post',
    userProfile: null,
    status: "",

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:

            let newPost = {
                id: state.postsData.length + 1,
                message: action.newPostText,
                likeCounts: 3
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }

        case SET_USER_PROFILE:

            return {
                ...state,
                userProfile: action.profile
            }

        case SET_USER_STATUS:

            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfileActionCreator = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatusActionCreator = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfileActionCreator(response.data));
            });
    }
}

export const getUserStatusThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then(response => {
                dispatch(setUserStatusActionCreator(response.data))
            })
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatusActionCreator(status))
                }
            })
    }
}

export default profileReducer;