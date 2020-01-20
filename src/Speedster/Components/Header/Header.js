import React,{useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import useClasses from './Header.classes'
import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import Menu from './Elements/Menu'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'

function Header(props) {

	const [menu, toggleMenu] = useState(false)
	const classes = useClasses()

	const onClickAway = () => {
		menu && toggleMenu(false)
	}

	const isMobile = false

    return (
		<>
		<ClickAwayListener onClickAway={onClickAway} touchEvent={false}>
			  <AppBar position="fixed" color="primary" classes={{colorPrimary: classes.colorHeader}}>
				   <Toolbar className={classes.mainBox} disableGutters={true}>
						   <Box className={classes.middleGrow} >
							   <Box style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
								   <Typography variant="h6" className={classes.title}>
									  SPEEDSTER
								  </Typography>
								  <Badge variant="dot" color="primary" classes={{
									  dot: classes.bellBadge
								  }}>
									  <NotificationsRoundedIcon style={{marginLeft: '6px'}}/>
								  </Badge>
							   </Box>
						   </Box>

						   <IconButton className={classes.menuButton}
							   edge="start" color="inherit" aria-label="open menu"
							   onClick={() => toggleMenu(prevMenu => !prevMenu)}>

							  { menu ? <CloseRoundedIcon className={classes.landingMore} />
							  : <MenuRoundedIcon className={classes.landingMore} /> }

						  </IconButton>

					   </Toolbar>
						<Collapse in={menu}>
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
