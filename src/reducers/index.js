import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import authenticatedUser from "./authenticatedUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
	authenticatedUser,
	users,
	questions,
	loadingBar: loadingBarReducer,
});