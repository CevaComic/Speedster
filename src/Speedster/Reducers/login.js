import { ActionType } from '../Constants'

const INITIAL_STATE = {
	isLogged: false,
	token: '',
	id: '',
	firstName: '',
	lastName: '',
	avatar: '',
	email: '',
	displayName: '',
	memberSince: '',
	googleId: '',
	facebookId: '',
	phone: '',
	address: '',
	city: '',
	lat: '',
	lng: '',
	courier: false,
	working: false,
	outside: false,
	share: false,
	becomeCourier: true,
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case ActionType.DO_LOGOUT_CLEANUP:
		case ActionType.RESET_LOGIN_REDUCER:
			return {
				...state,
				...INITIAL_STATE,
			}
		case ActionType.SET_LOGIN_VALUE:
			return {
				...state,
				...action.value,
			}
        default:
            return state
    }
}

export default loginReducer
