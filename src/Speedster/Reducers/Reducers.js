import { combineReducers } from 'redux'
import temporary from './temporary'
import notification from './notification'
import register from './register'
import login from './login'
import settings from './settings'
import updateProfile from './updateProfile'

const reducers = combineReducers({
	temporary,
	notification,
	register,
	login,
	settings,
	updateProfile
})

export default reducers
