import React from 'react'
import { take, call, put, delay } from 'redux-saga/effects'
import { ActionType } from '../Constants'
import { navigate } from '../Utils'
import { serverErrorNotification, isLoading, sendNotification } from './common'
import axios from 'axios'
import qs from 'qs'

export function* loginSaga() {
	while(true){
		const { response } = yield take([ActionType.TRY_GOOGLE_LOGIN, ActionType.TRY_FACEBOOK_LOGIN, ActionType.TRY_LOGIN])
		let data = false
		if(response.platform === 'Google')
			data = yield call(googleParser, response)

		if(response.platform === 'Facebook')
			data = yield call(facebookParser, response)

		if(response.platform === 'Speedster')
			data = response

		if(data)
			yield call(login, data)
	}
}

function* login(data) {
	yield isLoading(true)
	const send = {data: {...data}}

	try {

		const login = yield axios.post('https://speedster.cristi.club/api/login/', qs.stringify(send))
		console.log('login.data.success', login.data.success)
		const value = {
			...login.data.success,
			isLogged: true,
			working: login.data.success.working !== "0",
			outside: login.data.success.outside !== "0",
			courier: login.data.success.courier !== "0",
		}

		yield put({type: ActionType.SET_LOGIN_VALUE, value})
		// yield navigate('/home')
		// yield delay(100)
		yield sendNotification({
			type: 'success',
			title: 'Information',
			message: (<span>Logged in successfully</span>),
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

function* googleParser(response) {
	// https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=
	const { googleId, imageUrl, email, givenName, familyName } = yield response.profileObj
	const accessToken = response.accessToken
	const result = {
		platform: 'Google',
		id: googleId,
		email,
		accessToken,
		firstName: givenName,
		lastName: familyName,
		avatar: imageUrl + '?sz=500',
	}
	return result
}

function* facebookParser(response) {
	// https://graph.facebook.com/me?access_token=
	const { first_name, last_name, email, userID, picture, accessToken } = yield response
	const result =  {
		platform: 'Facebook',
		id: userID,
		email,
		accessToken,
		firstName: first_name,
		lastName: last_name,
		avatar: picture.data.url,
	}
	return result
}
