import { ActionType } from '../Constants'

const INITIAL_STATE = {
	firstName: 'Gigel',
	lastName: 'fronel',
	email: 'ceva@nasa.gov',
	newPass: '123123',
	newPass2: '123123',
	// phone: '',
	// address: '',
	firstNameError: false,
	lastNameError: false,
	emailError: false,
	newPassError: false,
	newPassError2: false,
}

const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case ActionType.DO_LOGOUT_CLEANUP:
		case ActionType.RESET_REGISTER_REDUCER:
			return {
				...state,
				...INITIAL_STATE,
			}
		case ActionType.SET_REGISTER_VALUE:
			return {
				...state,
				...action.value,
			}
		case ActionType.REMOVE_TEMPORARY_ERRORS:
			return {
				...state,
				firstNameError: false,
				lastNameError: false,
				emailError: false,
				newPassError: false,
				newPassError2: false,
			}
        default:
            return state
    }
}

export default registerReducer
