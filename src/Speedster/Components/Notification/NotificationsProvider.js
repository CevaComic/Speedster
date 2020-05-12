import React from 'react'
import { SnackbarProvider } from 'notistack'
import useClasses from './Notification.classes'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

export default ({ children  }) => {

	const classes = useClasses()
	const ref = React.createRef()
	const closeNotification = key => () => ref.current.closeSnackbar(key)

	const SnackOptions = {
		dense: true,
		maxSnack: 3,
		classes: {
			variantSuccess: classes.success,
	        variantError: classes.error,
	        variantWarning: classes.warning,
	        variantInfo: classes.info,
		},
		ContentProps: {
			classes: {
				root: classes.root,
				action: classes.action,
				message: classes.message,
			}
		},
		anchorOrigin: {
			vertical: 'top',
	        horizontal: 'center'
		},
		ref: ref,
		action: key => (
			<IconButton color="inherit" onClick={closeNotification(key)}>
				<CloseIcon />
			</IconButton>
	    ),
	}

	return (
		<SnackbarProvider {...SnackOptions}>
			{children}
		</SnackbarProvider>
	)

}
