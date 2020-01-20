import { ActionType } from '../Constants'
import { validateEmail } from '../Utils'
import React from 'react'
import Badge from '@material-ui/core/Badge'

export default function temporaryMiddleware({ dispatch, getState }) {
  return function(next) {
	return function(action) {
		if(action.type === ActionType.TRY_LOGIN) {
			let error = false
			const { email, password, emailError, passwordError } = getState().temporary
			if(!validateEmail(email)) {
				error = true
				dispatch({type:ActionType.SET_TEMPORARY_VALUE,value: {emailError:true} })
			} else if(emailError)
				dispatch({type:ActionType.SET_TEMPORARY_VALUE,value: {emailError:false} })

			if(password.length < 6) {
				error = true
				dispatch({type:ActionType.SET_TEMPORARY_VALUE,value: {passwordError:true} })
			} else if (passwordError)
				dispatch({type:ActionType.SET_TEMPORARY_VALUE,value: {passwordError:false} })

			if(error)
				return dispatch({type:ActionType.SEND_NOTIFICATION, notification: {
					type: 'error',
					title: (<span style={{fontWeight: 900}}>INCOMPLETE INFORMATION</span>),
					message: (<span>In order to access your account, fields marked with <Badge style={{marginLeft: '3px',marginRight: '3px'}} color="error" variant="dot" anchorOrigin={{vertical: 'top',horizontal:'left'}}> </Badge> are mandatory.</span>),
					isOpen: true,
				}})

			action.response = {
				email,
				password,
				platform: 'Speedster',
			}
		}

		if(action.type === ActionType.TRY_RECOVER_PASSWORD) {
			const { email } = action
			if(!validateEmail(email)) {
				dispatch({type:ActionType.SEND_NOTIFICATION, notification: {
					type: 'error',
					title: (<span style={{fontWeight: 900}}>WRONG E-MAIL</span>),
					message: (<span>In order to recover your account, fields marked with <Badge style={{marginLeft: '3px',marginRight: '3px'}} color="error" variant="dot" anchorOrigin={{vertical: 'top',horizontal:'left'}}> </Badge> are mandatory.</span>),
					isOpen: true,
				}})
				return dispatch({type:ActionType.SET_TEMPORARY_VALUE,value: {emailError:true}})
			}
		}

		if(action.type === ActionType.TRY_SET_UPDATE_PROFILE_VALUE) {
			const key = Object.keys(action.value)[0]
			const value = getState().login[key]

			if(value == action.value[key]) // don't dispatch anything if trying to update to same value
				return

			action.reverse = { // backup just in case we get server error , so we can reverse the process
				[key]: value,
			}

			return dispatch({type:ActionType.UPDATE_PROFILE, value:action.value, reverse: action.reverse})
		}

		if(action.type === ActionType.SEND_NOTIFICATION) {
			const showNotifications = getState().settings.showNotifications
			if(!showNotifications)
				return
		}

		next(action)



	}
  }
}
