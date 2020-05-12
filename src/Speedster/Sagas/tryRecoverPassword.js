import { take, call, put } from 'redux-saga/effects'
import { ActionType } from '../Constants'
import { navigate } from '../Utils'
import { serverErrorNotification, isLoading, sendNotification } from './common'
import axios from 'axios'

export function* tryRecoverPasswordSaga() {
	while(true){
		const { email } = yield take(ActionType.TRY_RECOVER_PASSWORD)
		yield call(tryRecoverPassword, email)
	}
}

export function* forceChangePasswordSaga() {
	while(true){
		const data = yield take(ActionType.TRY_RESET_PASSWORD)
		yield call(force, data)
	}
}

function* force({ hash, id, password}) {
	yield isLoading(true)

	try {

		const data = new FormData()
		data.append('hash', hash)
		data.append('id', id)
		data.append('password', password)

		const result = yield axios.post('https://speedster.cristi.club/api/password/force.php', data)

		yield put({type:ActionType.REMOVE_TEMPORARY_ERRORS})
		yield put({type:ActionType.RESET_TEMPORARY_REDUCER})
		yield navigate("/")

		if(result.data.success === "EXPIRED") {
			yield sendNotification({
				type: 'warning',
				message: 'Your token expired, please start reset process again.',
			})
			return
		}


		yield sendNotification({
			type: 'success',
			message: 'Password changed successfully. You can now login again.'
		})

	} catch (error) {
		if(error.response && error.response.data && error.response.data.error)
			yield serverErrorNotification(error.response.data.error)
		else
			yield serverErrorNotification()
	} finally {

		yield isLoading(false)

	}
}

function* tryRecoverPassword(email) {
	yield isLoading(true)

	try {

		const data = new FormData()
		data.append('email', email)

		yield axios.post('https://speedster.cristi.club/api/password/recover.php', data)

		yield put({type:ActionType.REMOVE_TEMPORARY_ERRORS})
		yield put({type:ActionType.RESET_TEMPORARY_REDUCER})
		yield navigate("/")

		yield sendNotification({
			type: 'success',
			message: `An e-mail has been sent to ${email}. Follow the steps to recover your password.`,
		})

	} catch (error) {
		if(error.response && error.response.data && error.response.data.error)
			yield serverErrorNotification(error.response.data.error)
		else
			yield serverErrorNotification()
	} finally {

		yield isLoading(false)

	}
}
