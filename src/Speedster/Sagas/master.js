import React from 'react'
import { take, put, call, fork, cancel, cancelled, delay } from 'redux-saga/effects'
import { ActionType } from '../Constants'
import axios from 'axios'

function* backgroundProcess() {
	console.log('MASTER SAGA STOPPED')
	try {
		while (true) {


			
			// repeat every 10 seconds
			delay(10000)

		}
	} finally {
		if (yield cancelled())
		  	console.log('MASTER SAGA STOPPED')
	}
}

export function* masterSaga() {
  while (yield take(ActionType.START_SYNC_APP)) {
    const backgroundRefresh = yield fork(backgroundProcess)

    yield take(ActionType.STOP_SYNC_APP)

    yield cancel(backgroundRefresh)
  }
}
