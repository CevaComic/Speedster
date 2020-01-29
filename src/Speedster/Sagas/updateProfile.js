import React from 'react'
import { takeEvery, take, call, put, select } from 'redux-saga/effects'
import { ActionType } from '../Constants'
import { serverErrorNotification, updateProfileLoading, sendNotification } from './common'
import axios from 'axios'
import qs from 'qs'

export function* updateProfileSaga() {
	yield takeEvery(ActionType.UPDATE_PROFILE, update)
}

export function* updateAvatarSaga() {
	while(true) {
		const { avatar } = yield take(ActionType.TRY_CHANGE_AVATAR)
		yield call(changeAvatar, avatar)
	}
}

function* changeAvatar(avatar) {
	yield updateProfileLoading("avatar",true)
	try {
		const login = yield select(state => state.login)

		let filename = "notvalid"
		if(login.avatar !== null)
			filename = login.avatar.split('.')[0]

		const data = new FormData()
  	  	data.append('avatar', avatar)
		data.append('token', login.token)
		data.append('id', login.id)
		data.append('filename', filename)

		// 	  for (var pair of data.entries()) {
		//     console.log(pair[0]+ ', ' + pair[1]);
		// }

		const result = yield axios.post('https://speedster.cristi.club/api/avatar/', data)

		yield put({type: ActionType.SET_LOGIN_VALUE, value:{avatar:result.data.success.avatar} })

	} catch (error) {
		if(error.response && error.response.data && error.response.data.error)
			yield serverErrorNotification(error.response.data.error)
		else
			yield serverErrorNotification()
	} finally {
		yield updateProfileLoading("avatar",false)
	}
}

function* update(action) {
	const key = Object.keys(action.value)[0]
	yield updateProfileLoading(key,true)
	try {
		yield put({type:ActionType.SET_LOGIN_VALUE, value: action.value})

		const data = yield select(state => state.login)
		const send = {data: {
			...data,
			...action.value,
			working: data.working ? 1 : 0,
			outside: data.outside ? 1 : 0,
			share: data.share ? 1 : 0,
			becomeCourier: data.becomeCourier ? 1 : 0,
		}}

		const login = yield axios.post('https://speedster.cristi.club/api/update/', qs.stringify(send))

		const value = {
			...login.data.success
		}

		yield put({type: ActionType.SET_LOGIN_VALUE, value})

		yield sendNotification({
			type: 'success',
			title: 'Information',
			message: (<span>Profile updated.</span>),
		})

		if(key === 'working' && login.data.success.working === false)
			yield put({type: ActionType.GO_OFFLINE_FROM_WORK})

	} catch (error) {
		// console.log('error', error)
		// console.log('error.resp', error.response)
		// console.log('error.data', error.data)
		yield put({type:ActionType.SET_LOGIN_VALUE, value: action.reverse})
		if(error.response && error.response.data && error.response.data.error)
			yield serverErrorNotification(error.response.data.error)
		else
			yield serverErrorNotification()
	} finally {
		yield updateProfileLoading(key,false)
	}
}
