import React from 'react'
import { take, call, put, delay } from 'redux-saga/effects'
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

function* tryRecoverPassword(email) {
	yield isLoading(true)

	try {

		yield put({type:ActionType.REMOVE_TEMPORARY_ERRORS})
		// yield delay(6000)

		yield put({type:ActionType.RESET_TEMPORARY_REDUCER})

		yield navigate("/")

		yield sendNotification({
			type: 'success',
			title: (<span style={{fontWeight: 900}}>SUCCESS</span>),
			message: (<span>An e-mail has been sent to {email}. Follow the steps to recover your password.</span>)
		})

	} catch (error) {

		yield serverErrorNotification(error)

	} finally {

		yield isLoading(false)

	}
}
