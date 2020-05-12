import { ActionType } from '../Constants'
import { enqueueSnackbar } from '../Actions'
import { put } from 'redux-saga/effects'

const debug = false

export function* serverErrorNotification(error, persist = false) {
	debug && console.log('Server ERROR SAGA',error)
	const key = new Date().getTime() + Math.random()
	yield put(enqueueSnackbar({
		message:  error || "Something went wrong, try again.",
		options: {
			key,
			preventDuplicate: true,
			variant: 'error',
			persist,
		}
	}))
}

export function* isLoading(status) {
	debug && console.log('Change isLoading to', status)
	yield put({type:ActionType.SET_IS_LOADING, status})
}

export function* updateProfileLoading(name,status) {
	yield put({type:ActionType.SET_UPDATE_PROFILE_VALUE, value: {[name]: status}})
}

export function* sendNotification({type, message, persist = false, key = false}) {
	if(!key)
		key = new Date().getTime() + Math.random()
	yield put(enqueueSnackbar({
		message: message,
		options: {
			key,
			preventDuplicate: true,
			variant: type,
			persist,
		}
	}))
}
