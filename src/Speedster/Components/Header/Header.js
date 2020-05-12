import React from 'react'
import {connect} from 'react-redux'
import Box from '@material-ui/core/Box'
import useClasses from './Header.classes'
import AppBar from '@material-ui/core/AppBar'
import Badge from './Badge'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { goBack } from '../../Utils'
import { useHistory } from 'react-router-dom'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import { box } from '../../Images'
import { packRequestsSelector } from '../../Selectors'
import clsx from 'clsx'

const Header = props => {

	const classes = useClasses()
	const history = useHistory()
	const { packRequests,courier } = props
	const goToPacks = () => history.push('/home/packrequests')
	const isBack = history.location.pathname.split('/')[2] !== undefined

    return (
		<>
			  <AppBar position="fixed" color="primary" classes={{root: classes.Header, colorPrimary: classes.colorHeader}}>
				   <Toolbar className={classes.mainBox} disableGutters>
						   <Box className={classes.middleGrow} >
							   <Box className={classes.headerInner}>

								   <Box className={clsx(classes.goBackBox,{[classes.goBackOpen]: isBack})}>
									   <IconButton onClick={goBack} className={classes.goBack}>
										   <ArrowBackIosRoundedIcon className={classes.goBackIcon}/>
									   </IconButton>
								   </Box>


								   <Typography variant="h6" className={clsx(classes.title,{[classes.titleGoBack]: isBack})}>
									  SPEEDSTER
								  </Typography>

							   </Box>
						   </Box>

						   { courier && <IconButton className={classes.menuButton}
							   edge="start"
							   color="inherit"
							   onClick={goToPacks}>
							   <Badge variant="dot" color="primary" invisible={!packRequests}>
								   <img src={box} height="20px" width="20px" alt="box icon"/>
							   </Badge>
						  </IconButton>}
					   </Toolbar>
				</AppBar>
			<Box className={classes.spacer} />
		</>

	)
}

const mapStateToProps = (state) => {
	return {
		packRequests: packRequestsSelector(state),
		courier: state.login.courier,
	}
}


export default connect(mapStateToProps)(Header)
