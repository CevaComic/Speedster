import {createSelector} from 'reselect'

// temporaryReducer

export const temporarySelector = createSelector(state => state.temporary, temporary => {
    const {email, emailError, password, passwordError, isLoading} = temporary
    return {email, emailError, password, passwordError, isLoading}
})

export const newPassSelector = createSelector(state => state.temporary, temporary => {
    const {newPass, newPass2, newPassError, newPassError2, hashError} = temporary
    return {newPass, newPass2, newPassError, newPassError2, hashError}
})

export const activeTabSelector = createSelector(state => state.temporary.activeTab, tab => tab)

export const isLoadingSelector = createSelector(state => state.temporary.isLoadingSelector, isLoading => isLoading)

// notificationReducer

export const notificationSelector = createSelector(state => state.notification, notification => notification)

// registerReducer

export const registerSelector = createSelector(state => state.register, register => register)

// loginReducer

export const isLoggedSelector = createSelector(state => state.login.isLogged, isLogged => isLogged)
export const loginSelector = createSelector(state => state.login, login => login)

// settingsReducer

export const showBecomeCourierSelector = createSelector(
	state => state.settings.showBecomeCourier,
	state => state.login.courier,
	(become,courier) => {
		return {
			courier,
			become,
		}
	}
)
export const showNotificationsSelector = createSelector(state => state.settings.showNotifications, notify => notify)
// updateProfileReducer

export const isLoadingProfileSelector = createSelector(state => state.updateProfile, isLoading => isLoading)
