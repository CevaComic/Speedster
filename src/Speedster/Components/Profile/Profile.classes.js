import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    profile: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
		overflowX: 'scroll',
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
		backgroundColor: 'rgba(0,0,0, 0.54)',
		zIndex: '1500!important',
		// width: 'calc(100% - 40px)',
    },
    modalInner: {
        backgroundColor: '#fafafa',
		borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[5],
		width: 'calc(100% - 40px)',
		padding: '10px',
		textAlign: 'center',
		position: 'relative',
    },
	modalVehicle: {
		width: 'calc(100% - 20px)',
		padding: 0,
		overflow: 'hidden',
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
	modalTitleMargin: {
		marginTop: '20px',
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
	},
	startPicker: {
		width: '70px',
		backgroundColor: `${theme.palette.secondary.main}!important`,
		borderRadius: '5px',
		'& .MuiOutlinedInput-input': {
			padding: '8px!important',
			fontSize: '15pt',
			fontWeight: 600,
			color: `${theme.palette.primary.main}!important`,
			'& > * > *': {
				borderWidth: '0!important',
			}
		},
		'& .MuiFormLabel-root': {
			transform: 'translate(2px, -11px) scale(0.80)!important',
			fontWeight: 600,
			color: `${theme.palette.secondary.main}!important`,
		},
		'& legend': {
			width: '0px!important',
		},
		'& fieldset': {
			borderWidth: '0px!important',
		}
	},
	schedulePicker: {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	startPickerSep: {
		paddingTop: '5px',
		fontSize: '21pt',
	},
	days: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '280px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	day: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '15pt',
		borderRadius: '5px',
		fontWeight: 900,
		width: '32px',
		height: '32px',
		backgroundColor: '#f0f0f0',
		boxShadow: theme.shadows[2],
		marginTop: '10px',
		marginBottom: '10px',
	},
	dayActive: {
		backgroundColor: `${theme.palette.primary.main}!important`,
	},
	topImageBox: {
		position: 'relative',
		width: '32px',
        height: '32px',
        borderRadius: '50%',
        // overflow: 'hidden',
		border: '15px solid #f0f0f0',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '-40px',
		'&:before': {
			content: '" "',
			position: 'absolute',
			border: '5px solid rgba(0,0,0,.7)',
			top: '-15px',
			left: '-15px',
			right: '-15px',
			bottom: '-15px',
			zIndex: 2,
			borderRadius: '50%',
		},
	},
	topImageBoxInner: {
		width: '100%',
		height: '100%',
		display: 'flex',

	},
	topImage: {
		width: '100%',
        height: '100%',
        objectFit: 'cover',
	},
	topImageVehicle: {
		marginBottom: '-5px',
	},
	courierList: {
		padding: 0,
	},
	closeVehicle: {
		position: 'absolute',
		bottom: '10px',
		right: '10px',
	},
	closeButton: {
		margin: '20px',
	},
	spacer: {
		height: '15px',
		visibility: 'hidden',
		fontSize: '1pt',
	},
	rating: {
		fontSize: '8pt!important',
		color: `${theme.palette.primary.dark}!important`,
	}
}))

export default useClasses
