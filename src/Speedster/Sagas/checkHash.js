import React from 'react'
import { take, call, put, delay, takeLatest } from 'redux-saga/effects'
import { serverErrorNotification, isLoading, sendNotification } from './common'
import { ActionType } from '../Constants'
import axios from 'axios'

export function* checkHashSaga() {
	console.log('ENTERED HERE')
	yield takeLatest(ActionType.CHECK_HASH_RESET_PASSWORD, checkHash)
}

function* checkHash({hash, id}) {
	console.log('hash', hash)
	console.log('ENTERED HERE')
	yield delay(800)
	yield isLoading(true)

	try {
		yield put({type: ActionType.SET_TEMPORARY_VALUE,value:{hashError:true}})
		yield sendNotification({
			type: 'error',
			title: (<span style={{fontWeight: 900}}>LINK EXPIRED</span>),
			message: (<span>In order to recover your account please start over with reset password form.</span>)
		})
		return false
		// CHECKING FLOW HERE
		return true // IF WE HAVE AN ERROR
		yield put({type: ActionType.SET_TEMPORARY_VALUE,value:{hashError:true}})
		yield sendNotification({
			type: 'error',
			title: (<span style={{fontWeight: 900}}>LINK EXPIRED</span>),
			message: (<span>In order to recover your account please start over with reset password form.</span>)
		})

	} catch (error) {

		yield serverErrorNotification(error)

	} finally {

		yield isLoading(false)

	}
}
