import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			};
		case ADD_QUESTION_ANSWER: {
			return {
				...state,
				[action.authenticatedUser]: {
					...state[action.authenticatedUser],
					answers: {
						...state[action.authenticatedUser].answers,
						[action.qid]: action.answer,
					},
				},
			};
		}
		default:
			return state;
	}
}