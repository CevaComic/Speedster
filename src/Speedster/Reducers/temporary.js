import { ActionType } from '../Constants'

const INITIAL_STATE = {
	email: 'cristi@aaa.com',
	password: '123123',
	newPass: '',
	newPass2: '',
	emailError: false,
	passwordError: false,
	newPassError: false,
	newPassError2: false,
	hashError: false,
	activeTab: 'home',
	isLoading: false,
	searchValue: '',
	viewModalProfile: 0,
	viewModalCarPicture: 0,
}

const temporaryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case ActionType.SET_IS_LOADING:
			return {
				...state,
				isLoading: action.status,
			}
		case ActionType.DO_LOGOUT_CLEANUP:
		case ActionType.RESET_TEMPORARY_REDUCER:
			return {
				...state,
				...INITIAL_STATE,
			}
		case ActionType.SET_TEMPORARY_VALUE:
			return {
				...state,
				...action.value,
			}
		case ActionType.CHANGE_TAB:
			return {
				...state,
				activeTab: action.tab,
			}
		case ActionType.REMOVE_TEMPORARY_ERRORS:
			return {
				...state,
				emailError: false,
				passwordError: false,
				newPassError: false,
				newPassError2: false,
				hashError: false,
			}
        default:
            return state
    }
}

export default temporaryReducer
