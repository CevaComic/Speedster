import { all } from 'redux-saga/effects'
import { tryRecoverPasswordSaga } from './tryRecoverPassword'
import { loginSaga } from './login'
import { closeNotificationSaga } from './closeNotification'
import { registerSaga } from './register'
import { loggerSaga } from './debugger'
import { updateProfileSaga, updateAvatarSaga } from './updateProfile'
import { uploadVehicleSaga,deleteVehicleSaga,setActiveVehicleSaga } from './uploadVehicle'

import { masterSaga } from './master' // most important thread

export default function* sagas() {
    yield all([
		loggerSaga(),
		masterSaga(),
		tryRecoverPasswordSaga(),
		loginSaga(),
		closeNotificationSaga(),
		registerSaga(),
		updateProfileSaga(),
		updateAvatarSaga(),
		uploadVehicleSaga(),
		deleteVehicleSaga(),
		setActiveVehicleSaga()
	])
}
