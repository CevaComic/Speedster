import { ActionType } from '../Constants'
import { enqueueSnackbar } from '../Actions'
import React from 'react'
import Badge from '@material-ui/core/Badge'

export default function uploadVehicleMiddleware({ dispatch, getState }) {
  return function(next) {
	return function(action) {
		if(action.type === ActionType.TRY_UPLOAD_VEHICLE) {
			let error = []
			const {
				description,
				picture,
				type
			} = getState().uploadVehicle

			if(description.length < 6)
				error.push("Description must be longer")

			if(!type)
				error.push("Select a type")

			if(!picture)
				error.push("Select a picture")

			if(error.length)
				return dispatch(enqueueSnackbar({
					message: (<div>
								{error.map((message,index) => {
		   							return (<p style={style.p} key={index}>
		   								<Badge style={style.badge} color="error" variant="dot" anchorOrigin={{vertical: 'top',horizontal:'left'}}> </Badge> {message}
		   							</p>)
		   						})}
							</div>),
					options: {
						variant: 'error',
						key: 'lastvehicleerror',
					}
				}))
		}

		if(action.type === ActionType.TRY_DELETE_VEHICLE) {
			const length = getState().myVehicle.length

			if(length === 1)
			 	return dispatch(enqueueSnackbar({
					message: "You can't remove the last vehicle",
					options: {
						variant: 'error',
						key: 'lastvehicleerror',
					}
				}))

			if(action.vehicle.active)
				return dispatch(enqueueSnackbar({
					message: "You must first go offline from work in order to delete this vehicle",
					options: {
						variant: 'info',
						key: 'goofflineinfo',
					}
				}))


		}

		next(action)

	}
  }
}

const style = {
    p: {
        lineHeight: 0
    },
    badge: {
        marginLeft: '3px',
        marginRight: '3px'
    }
}
