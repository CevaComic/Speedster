import { ActionType } from '../Constants'

// temporaryReducer

export const setTemporaryValue = value => ({type: ActionType.SET_TEMPORARY_VALUE, value})
export const tryLogin = () => ({type: ActionType.TRY_LOGIN})
export const tryRecoverPassword = email => ({type: ActionType.TRY_RECOVER_PASSWORD, email})
export const checkHash = (hash,id) => ({type: ActionType.CHECK_HASH_RESET_PASSWORD, hash, id})
export const tryResetPassword = (hash,id) => ({type: ActionType.TRY_RESET_PASSWORD, hash, id})
export const changeTab = tab => ({type: ActionType.CHANGE_TAB, tab})

// notificationReducer

export const sendNotification = notification => ({type: ActionType.SEND_NOTIFICATION, notification})
export const closeNotification = () => ({type: ActionType.CLOSE_NOTIFICATION})

// loginReducer

export const fbLogin = response => ({type: ActionType.TRY_FACEBOOK_LOGIN, response})
export const gLogin = response => ({type: ActionType.TRY_GOOGLE_LOGIN, response})
export const failedLogin = (response,from) => ({type: ActionType.FAILED_LOGIN, response, from})
export const doLogout = () => ({type: ActionType.DO_LOGOUT_CLEANUP})

// registerReducer

export const setRegisterValue = value => ({type: ActionType.SET_REGISTER_VALUE, value})
export const tryRegister = () => ({type: ActionType.TRY_REGISTER})
export const resetRegisterReducer = () => ({type: ActionType.RESET_REGISTER_REDUCER})

// settingsReducer

export const setSettingsValue = value => ({type: ActionType.SET_SETTINGS_VALUE, value})

// updateProfile

export const setUpdateProfileValue = value => ({type: ActionType.TRY_SET_UPDATE_PROFILE_VALUE, value})
export const setEditProfileModal = status => ({type: ActionType.SET_OPEN_EDIT_PROFILE_MODAL, status})
export const uploadAvatar = avatar => ({type: ActionType.TRY_CHANGE_AVATAR, avatar})

// scheduleReducer

export const setScheduleValues = () => ({type: ActionType.SET_SCHEDULE_VALUES})
export const setScheduleTempValue = value => ({type: ActionType.SET_SCHEDULE_TEMP_VALUE, value})
export const resetScheduleTempValues = () => ({type: ActionType.RESET_SCHEDULE_TEMP_VALUES})

// uploadVehicleReducer

export const setUploadVehicleValue = value => ({type: ActionType.SET_UPLOAD_VEHICLES_VALUE, value})
export const resetUploadVehicle = () => ({type: ActionType.RESET_UPLOAD_VEHICLES})
export const uploadVehicle = isFirst => ({type: ActionType.TRY_UPLOAD_VEHICLE,isFirst})
export const tryDeleteVehicle = vehicle => ({type: ActionType.TRY_DELETE_VEHICLE,vehicle})
export const changeVehicleActive = (id,status) => ({type: ActionType.CHANGE_VEHICLE_STATUS,id,status})

// MASTER

export const startSync = () => ({type:ActionType.START_SYNC_APP})
