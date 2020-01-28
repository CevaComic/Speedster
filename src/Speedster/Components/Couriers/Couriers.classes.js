import {fade, makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    couriers: {
        position: 'relative',
        width: '100%'
    },
    noOnline: {
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        color: '#a6a6a6',
        borderRadius: '6px'
    },
    stickHeader: {
        backgroundColor: 'rgba(250,250,250,.94)!important'
    },
    // search: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     height: '40px',
    //     backgroundColor: `${theme.palette.secondary.main}`,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    list: {
        transition: 'all 0.5s',
        '&$listBack': {
            marginLeft: '-150px'
        }
    },
    listBack: {},
    courierRow: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    },
    listItemBlack: {
        backgroundColor: '#f0f0f0'
    },
    listItemWhite: {
        backgroundColor: '#fafafa'
    },
    primaryText: {
        color: `${theme.palette.secondary.main}`,
        fontWeight: '500',
        fontSize: '11pt',
        marginLeft: '5px',
        lineHeight: '0px!important'
    },
    // avatarBox: {
    // 	width: ''
    // },
    avatar: {
        width: '31px',
        height: '31px',
        objectFit: 'cover',
        borderRadius: '30px',
        border: '2px solid white',
        boxShadow: theme.shadows[1],
        zIndex: 2,
        marginTop: '5px',
        backgroundColor: '#fafafa'
    },
    listItem: {
        paddingTop: '0px!important',
        paddingBottom: '0px!important',
        height: '46px'
    },
    icon: {
        maxWidth: '42px',
        marginRight: '-10px'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(3, 3, 3, 3),
		width: '0px',
        transition: theme.transitions.create('width'),
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        borderRadius: '6px',
        textAlign: 'center',
        marginLeft: 0,
        '&:focus': {
            backgroundColor: 'white',
            border: '1px solid #ccc',
            width: '100%'
        }
    },
    search: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: 'calc(100% - 32px)',
        marginTop: theme.spacing(3)
    },
    searchIcon: {
        width: theme.spacing(7),
        paddingLeft: theme.spacing(0),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': {
            // zIndex: 1,
            fontSize: '22pt',
            color: `${theme.palette.secondary.main}`,
            fill: `${theme.palette.secondary.main}`
        }
    },
    resultsText: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    badge: {
        zIndex: '2!important',
        marginTop: '10px',
        marginLeft: '-5px'
    }
}))

export default useClasses
