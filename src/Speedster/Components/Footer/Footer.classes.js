import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
	footer: {
		position: 'fixed',
		bottom: 0,
		right: 0,
		left: 0,
		zIndex: 1400,
		backgroundImage: 'linear-gradient(96deg, ' + theme.palette.primary.light + ' 0%, ' + theme.palette.primary.main + ' 35%, ' + theme.palette.primary.dark + ' 100%)',
		color: `${theme.palette.secondary.main}!important`,
	},
	tab: {
		color: `${theme.palette.secondary.main}!important`,
		'&$selected': {
			color: `${theme.palette.secondary.main}!important`,
		},
		minWidth: '60px',
	},
	selected: {},
	label: {
		'&$selected': {
			fontSize: '9pt!important',
			fontWeight: 700,
		},
	},
	icon: {
		width: '41px',
		height: '31px',
	},
	iconInactive: {
		width: '47px',
		height: '35px',
	}
}))

export default useClasses
