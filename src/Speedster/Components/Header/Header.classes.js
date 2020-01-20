import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
	mainBox: {
		display: 'flex',
		width: '100%',
		maxWidth: '1024px',
		minWidth: '280px',
		borderRadius: '0px',
		marginLeft: 'auto',
		marginRight: 'auto',
		background: 'transparent',
	},
	colorHeader: {
		backgroundColor: 'white!important',
		color: `${theme.palette.secondary.main}!important`,
		height: '56px!important',
	},
	spacer: theme.mixins.toolbar,
	middleGrow: {
		flexGrow: 1,
	},
	logoMobile: {
		height: '100%',
	},
	menuButton: {
		fontSize: 40,
	},
	menu: {
		padding: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
	      display: 'none',
	    },
		backgroundColor: `${theme.palette.primary.dark}!important`,
		"& > a": {
			textDecoration: 'none',
		},
	},
	menuLinkIcon: {
		color: 'white!important',
	},
	menuLinkText: {
		color: 'white!important',
	},
	title: {
		paddingLeft: theme.spacing(5),
		fontWeight: 700,
	},
	bellBadge: {
		height: '12px',
		minWidth: '12px',
		marginTop: '5px',
		marginRight: '5px',
		border: '2px solid white',
	}
}))

export default useClasses
