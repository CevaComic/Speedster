import { ActionType } from '../Constants'

const INITIAL_STATE = []

const couriersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case ActionType.DO_LOGOUT_CLEANUP:
		case ActionType.RESET_COURIERS_REDUCER:
			return []
		case ActionType.SET_MY_COURIERS:
			return [].concat(action.couriers)
        default:
            return state
    }
}

export default couriersReducer
