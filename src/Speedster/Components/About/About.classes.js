import {makeStyles} from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    bigBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        overflowX: 'scroll'
    },
    about: {
        position: 'relative'
    },
    background: {
        boxShadow: theme.shadows[3]
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
        border: '20px solid rgba(0,0,0,.54)'
    },
    eu: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    euName: {
        fontSize: '14pt',
        fontWeight: '500',
        color: '#fafafa'
    },
    euTexts: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    euDev: {
        fontSize: '8pt',
        color: '#fafafa',
        lineHeight: '5px',
        fontStyle: 'italic'
    },
    euInfo: {
        width: 'calc(100% - 40px)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        justifyContent: 'space-between',
        marginLeft: '20px',
        marginRight: '20px'
    },
    euInfoRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '45%',
        backgroundImage: 'linear-gradient(159deg, ' + theme.palette.primary.light + ' 0%, ' + theme.palette.primary.main + ' 50%, ' + theme.palette.primary.dark + ' 100%)',
        justifyContent: 'space-between',
        boxShadow: theme.shadows[3],
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: '12px'
    },
    thanks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '10px',
        marginBottom: '10px'
    },
    ltext: {
        marginLeft: '10px'
    },
    thanksLibrary: {
        flexDirection: 'column',
        width: 'calc(100% - 60px)'
    },
    last: {
        marginBottom: '20px'
    },
    lightGreen: {
        backgroundColor: theme.palette.primary.light
    }
}))

export default useClasses
