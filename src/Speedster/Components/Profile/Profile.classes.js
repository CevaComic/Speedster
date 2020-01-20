import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    profile: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflowX: 'scroll'
    },
    avatarBox: {
        padding: '20px',
        width: 'calc(100% - 40px)',
        display: 'flex',
        flexDirection: 'row'
    },
    avatarBoxInner: {
        backgroundColor: `${theme.palette.secondary.main}`,
        borderRadius: '20px',
        height: '60px',
        width: 'calc(100% - 30px)',
        marginLeft: '-40px',
        paddingLeft: '50px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative'
    },
    avatar: {
        width: '56px',
        height: '56px',
        objectFit: 'cover',
        borderRadius: '30px',
        border: '3px solid #d8d8d8',
        zIndex: 2,
        marginTop: '-1px',
        backgroundColor: '#fafafa'
    },
    memberSince: {
        // lineHeight: 0,
        color: 'rgba(255,255,255,0.5)',
        fontWeight: '400',
        fontSize: '8pt'
    },
    memberName: {
        lineHeight: 1.2,
		maxWidth: '250px',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
    },
	list: {
		height: '100px',
	},
    logout: {
        position: 'absolute',
        bottom: '-15px',
        right: '15px',
        // height: '32px'
    },
    avatarImageBox: {
        width: '60px',
        height: '60px',
        position: 'relative',
        zIndex: 2,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: '5px',
        backgroundColor: `${theme.palette.secondary.main}`,
        fontSize: '8pt',
        padding: '4px',
        borderRadius: '50%',
        border: '1px solid #d8d8d8'
    },
    icon: {
        minWidth: '40px'
    },
    primaryText: {
        color: 'rgba(0, 0, 0, 0.38)',
        fontWeight: '600',
        fontSize: '8pt',
        lineHeight: '0px!important'
    },
    secondaryText: {
        fontStyle: 'italic',
        color: 'rgba(0, 0, 0, 0.62)',
        fontWeight: '700',
        lineHeight: '11px!important',
        marginBottom: '4px',
        fontSize: '10pt'
    },
    listItemBlack: {
        backgroundColor: '#f0f0f0'
    },
    listItemWhite: {
        backgroundColor: '#fafafa'
    },
    listItem: {
        paddingTop: '0px!important',
        paddingBottom: '0px!important'
    },
    stickHeader: {
        backgroundColor: 'rgba(250,250,250,.94)!important'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
		// width: 'calc(100% - 40px)',
    },
    modalInner: {
        backgroundColor: '#fafafa',
		borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[5],
		width: 'calc(100% - 40px)',
		padding: '10px',
    },
	modalTitle: {
		fontSize: '10pt',
		lineHeight: 0,
		fontWeight: 500,
		paddingLeft: '10px',
		color: `${theme.palette.secondary.main}`,
		fontStyle: 'italic',
		marginBottom: '15px',
	},
	modalInput: {
		width: '100%',
		backgroundColor: `${theme.palette.secondary.main}`,
		borderRadius: '6px',
		border: 'none',
	},
	modalInputText: {
		color: `${theme.palette.primary.main}!important`,
	},
	modalButtons: {
		marginTop: '10px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	modalButton: {
		width: '48%',
	},
	uploadInput: {
		display: 'none',
	}
}))

export default useClasses
