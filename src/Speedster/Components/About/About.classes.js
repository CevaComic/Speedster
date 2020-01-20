import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    about: {
        position: 'relative',
    },
	background: {
		boxShadow: theme.shadows[6],
	},
    aboutInner: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute'
    },
    euBox: {
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        overflow: 'hidden',
		border: '20px solid rgba(0,0,0,.54)',
    },
    eu: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
	euName: {
		fontSize: '14pt',
		fontWeight: '500',
		color: '#fafafa',
	},
	euTexts: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	euDev: {
		fontSize: '8pt',
		color: '#fafafa',
		lineHeight: '5px',
		fontStyle: 'italic',
	},
	euInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '10px',
		marginBottom: '10px',
		justifyContent: 'space-between',
		marginLeft: '20px',
		marginRight: '20px',
	},
	euInfoRow: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '45%',
		backgroundColor: theme.palette.primary.main,
		justifyContent: 'space-between',
		boxShadow: theme.shadows[3],
		paddingTop: '10px',
		paddingBottom: '10px',
	}
}))

export default useClasses
