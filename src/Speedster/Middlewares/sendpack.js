import { ActionType } from '../Constants'
import { enqueueSnackbar } from '../Actions'
import React from 'react'
import Badge from '@material-ui/core/Badge'

export default function sendPackMiddleware({ dispatch, getState }) {
  return function(next) {
	return function(action) {
		if(action.type === ActionType.TRY_SEND_PACK) {
			let error = []

			const {
				packType,
				sendPackNrKg,
				receiverName,
				receiverAddress,
				receiverPhone,
				senderAddress
			} = getState().temporary

			if(sendPackNrKg < 1 || isNaN(sendPackNrKg))
				error.push(packType !== 1 ? "Check no. of kg" : "Check no. of envelopes")

			if(senderAddress.length < 6)
				error.push("Check your address")

			if(receiverName.length < 3)
				error.push("Check receiver's name")

			if(receiverAddress.length < 6)
				error.push("Check receiver's address")

			if(receiverPhone.length < 8 || isNaN(receiverPhone))
				error.push("Check receiver's phone number")

			if(error.length) {
				dispatch({type:ActionType.SET_TEMPORARY_VALUE, value:{sendPackError:true}})
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
						key: 'sendpackerrors',
					}
				}))
			}

			dispatch({type:ActionType.SET_TEMPORARY_VALUE, value:{sendPackError:false}})
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
