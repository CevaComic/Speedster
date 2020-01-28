import React,{useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import useClasses from './Header.classes'
import AppBar from '@material-ui/core/AppBar'
import Badge from './Elements/Badge'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Menu from './Elements/Menu'
import { goBack } from '../../Utils'
import { useHistory } from 'react-router-dom'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import { box,envelope,bell } from '../../Images'

const Header = (props) => {

	const [notify, setNotify] = useState(false)
	const classes = useClasses()
	const history = useHistory()

	const onClickAway = () => {
		notify && setNotify(false)
	}

	const isBack = history.location.pathname.split('/')[2] !== undefined

    return (
		<>
			<ClickAwayListener onClickAway={onClickAway}>
			  <AppBar style={{zIndex: 1400}} position="fixed" color="primary" classes={{colorPrimary: classes.colorHeader}}>
				   <Toolbar className={classes.mainBox} disableGutters={true}>
						   <Box className={classes.middleGrow} >
							   <Box style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>

								   <Box className={[classes.goBackBox,isBack ? classes.goBackOpen : ''].join(' ')}>
									   <IconButton onClick={goBack} className={classes.goBack}>
										   <ArrowBackIosRoundedIcon className={classes.goBackIcon}/>
									   </IconButton>
								   </Box>


								   <Typography variant="h6" className={[classes.title,isBack && classes.titleGoBack]}>
									  SPEEDSTER
								  </Typography>
							   </Box>
						   </Box>

						   <IconButton className={classes.menuButton}
							   edge="start" color="inherit" aria-label="open pack messages"
							   onClick={() => setNotify(!notify)}>
							   <Badge variant="dot" color="primary">
								   <img src={box} height="20px" width="20px"/>
							   </Badge>
						  </IconButton>

						  <IconButton className={classes.menuButton}
							  edge="start" color="inherit" aria-label="open notify"
							  onClick={() => setNotify(!notify)}>
							  <Badge variant="dot" color="primary">
								  <img src={bell} height="20px" width="18px"/>
							  </Badge>
						 </IconButton>
					   </Toolbar>
					   <Collapse in={notify} classes={{container:classes.notify}}>
					   	<Menu close={onClickAway}/>
					    </Collapse>
				</AppBar>
				</ClickAwayListener>
			<Box className={classes.spacer} />
		</>

	)
}

const mapStateToProps = (state) => {
    return {
        // var: selector(state)
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    // actions
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Header)
