import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import authedUser from "./authenticatedUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
	authedUser,
	users,
	questions,
	loadingBar: loadingBarReducer,
});