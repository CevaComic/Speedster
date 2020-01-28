import { combineReducers } from 'redux'
import temporary from './temporary'
import notification from './notification'
import register from './register'
import login from './login'
import settings from './settings'
import updateProfile from './updateProfile'
import schedule from './schedule'

const reducers = combineReducers({
	temporary,
	notification,
	register,
	login,
	settings,
	updateProfile,
	schedule,
})

export default reducers
