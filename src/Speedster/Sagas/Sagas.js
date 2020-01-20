import { all } from 'redux-saga/effects'
import { tryRecoverPasswordSaga } from './tryRecoverPassword'
import { loginSaga } from './login'
import { closeNotificationSaga } from './closeNotification'
import { registerSaga } from './register'
import { loggerSaga } from './debugger'
import { updateProfileSaga, updateAvatarSaga } from './updateProfile'

// end of debug

export default function* sagas() {
    yield all([
		loggerSaga(),
		tryRecoverPasswordSaga(),
		loginSaga(),
		closeNotificationSaga(),
		registerSaga(),
		updateProfileSaga(),
		updateAvatarSaga(),
	])
}
