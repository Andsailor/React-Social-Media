import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducers";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authData: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;