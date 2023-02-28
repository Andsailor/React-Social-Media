// API imports
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:

            return state;

    }
}

export const setUserDataActionCreator = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

// React-Thunk
export const authMeThunkCreator = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.status === 200 && response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    dispatch(setUserDataActionCreator(id, email, login))
                }
            })
    }
}

export default authReducer;