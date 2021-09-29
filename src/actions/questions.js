import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function addQuestionAnswer(authenticatedUser, qid, answer) {
	return {
		type: ADD_QUESTION_ANSWER,
		authenticatedUser,
		qid,
		answer,
	};
}

export function handleAddQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authenticatedUser } = getState();

		dispatch(showLoading());

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authenticatedUser,
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}

export function handleAddQuestionAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authenticatedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			authenticatedUser,
			qid,
			answer,
		})
			.then(() => dispatch(addQuestionAnswer(authenticatedUser, qid, answer)))
			.then(() => dispatch(hideLoading()));
	};
}