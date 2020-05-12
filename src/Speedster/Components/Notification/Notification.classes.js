import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    success: {
        backgroundColor: 'transparent',
		backgroundImage: 'linear-gradient( 95deg, #00b248 0%, #00e676 60%, #66ffa6 100%)',
    },
    error: {
        backgroundColor: 'transparent',
		backgroundImage: 'linear-gradient( 95deg, #c41c00 0%, #ff5722 60%, #ff8a50 100%)',
    },
    warning: {
        backgroundColor: 'transparent',
		backgroundImage: 'linear-gradient( 95deg, #c56200 0%, #ff9100 60%, #ffc246 100%)',
    },
    info: {
        backgroundColor: 'transparent',
		backgroundImage: 'linear-gradient( 95deg, #0081cb 0%, #00b0ff 60%, #69e2ff 100%)',
    },
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	action: {
		marginRight: -8,
		paddingLeft: 0,
	},
	message: {
		width: '85%',
	}
}))

export default useClasses
