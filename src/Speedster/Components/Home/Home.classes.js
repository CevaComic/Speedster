import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    home: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
	becomeCourier: {
		position: 'relative',
	},
	homeList: {
		width: '100%',
	    minWidth: '280px',
	    backgroundColor: `${theme.palette.background.default}!important`,
	},
	becomeCourierContent: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 2,
		padding: '20px',
		paddingTop: '7px',
		paddingBottom: '15px',
	},
	aplica: {
		fontSize: '20pt!important',
		color: 'white!important',
		fontWeight: '700!important',
		textTransform: 'uppercase',
	},
	ptjobul: {
		fontSize: '14pt!important',
		color: 'white!important',
		fontWeight: '500!important',
		lineHeight: '22px!important',
	},
	becomeCourierContentInner: {
		width: '100%',
		height: '100%',
		position: 'relative',
	},
	apply: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	closeBecomeCourier: {
		position: 'absolute',
		top: 0,
		right: 0,
		padding: '0!important',
	},
	closeBecomeCourierIcon: {
		color: '#fafafa',
	},
}))

export default useClasses
