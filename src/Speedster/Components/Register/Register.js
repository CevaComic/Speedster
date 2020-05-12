import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import {Link as MLink} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'
import LockRoundedIcon from '@material-ui/icons/LockRounded'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import useClasses from '../Init/Init.classes'
import { isLoadingSelector, registerSelector, isLoggedSelector } from '../../Selectors'
import { navigate } from '../../Utils'
import { tryRegister, setRegisterValue, resetRegisterReducer } from '../../Actions'
import { logo } from '../../Images'

function ForgotPassword(props) {

	const classes = useClasses()

	const { setRegisterValue, tryRegister, isLoading, resetRegisterReducer, isLogged } = props
	const {
		firstName,
		lastName,
		email,
		newPass,
		newPass2,
		firstNameError,
		lastNameError,
		emailError,
		newPassError,
		newPassError2  } = props

		const goToInit = () => navigate('/')

		React.useEffect(() => {
			return () => resetRegisterReducer()
		},[resetRegisterReducer])

		React.useEffect(() => {
			if(isLogged)
				navigate('/')
		},[isLogged])

    return (
		<Box className={classes.initContainer}>

			<img src={logo} className={classes.logo} alt="logo"/>

			<Typography className={classes.title}>
				<i>SIGN UP</i>
			</Typography>

			<Box flexDirection="column" justifyContent="center" alignItems="center" display="flex">

				<Grid container spacing={1} alignItems="flex-end">
					<TextField
						disabled={isLoading}
						error={firstNameError}
					  placeholder="First name"
					  value={firstName}
					  InputProps={{
						startAdornment: (
						  <InputAdornment position="start">
							<IconButton>
							  <Badge color="error" variant="dot" invisible={!firstNameError} anchorOrigin={{vertical: 'top',horizontal:'left'}}>
								  <PersonRoundedIcon className={classes.loginIcon}/>
							   </Badge>
							</IconButton>
						  </InputAdornment>
						),
						classes: {
						  root: classes.input,
						  input: classes.placeholder,
						  underline: classes.underline,
						  error: classes.error,
					  }
					  }}
					  onChange={e => setRegisterValue({firstName:e.target.value})}
					/>
				</Grid>

				<Grid container spacing={1} alignItems="flex-end">
					<TextField
						disabled={isLoading}
						error={lastNameError}
					  placeholder="Last name"
					  value={lastName}
					  InputProps={{
						startAdornment: (
						  <InputAdornment position="start">
							<IconButton>
							  <Badge color="error" variant="dot" invisible={!lastNameError} anchorOrigin={{vertical: 'top',horizontal:'left'}}>
								  <PersonRoundedIcon className={classes.loginIcon}/>
							   </Badge>
							</IconButton>
						  </InputAdornment>
						),
						classes: {
						  root: classes.input,
						  input: classes.placeholder,
						  underline: classes.underline,
						  error: classes.error,
					  }
					  }}
					  onChange={e => setRegisterValue({lastName:e.target.value})}
					/>
				</Grid>

				<Grid container spacing={1} alignItems="flex-end">
					<TextField
						disabled={isLoading}
						error={emailError}
					  placeholder="E-mail address"
					  value={email}
					  InputProps={{
						startAdornment: (
						  <InputAdornment position="start">
							<IconButton>

							  <Badge color="error" variant="dot" invisible={!emailError} anchorOrigin={{vertical: 'top',horizontal:'left'}}>
								  <MailOutlineIcon className={classes.loginIcon}/>
							   </Badge>
							</IconButton>
						  </InputAdornment>
						),
						classes: {
						  root: classes.input,
						  input: classes.placeholder,
						  underline: classes.underline,
						  error: classes.error,
					  }
					  }}
					  onChange={e => setRegisterValue({email:e.target.value})}
					/>
				</Grid>

						<Grid container spacing={1} alignItems="flex-end">
							<TextField
								type="password"
								disabled={isLoading}
								error={newPassError}
							  placeholder="Password"
							  value={newPass}
							  InputProps={{
								startAdornment: (
								  <InputAdornment position="start">
									<IconButton>
									  <Badge color="error" variant="dot" invisible={!newPassError} anchorOrigin={{vertical: 'top',horizontal:'left'}}>
										  <LockRoundedIcon className={classes.loginIcon}/>
									   </Badge>
									</IconButton>
								  </InputAdornment>
								),
								classes: {
								  root: classes.input,
								  input: classes.placeholder,
								  underline: classes.underline,
								  error: classes.error,
							  }
							  }}
							  onChange={e => setRegisterValue({newPass:e.target.value})}
							/>
						</Grid>
						<Grid container spacing={1} alignItems="flex-end">
							<TextField
								type="password"
								disabled={isLoading}
								error={newPassError2}
							  placeholder="Repeat password"
							  value={newPass2}
							  InputProps={{
								startAdornment: (
								  <InputAdornment position="start">
									<IconButton>
									  <Badge color="error" variant="dot" invisible={!newPassError2} anchorOrigin={{vertical: 'top',horizontal:'left'}}>
										  <LockRoundedIcon className={classes.loginIcon}/>
									   </Badge>
									</IconButton>
								  </InputAdornment>
								),
								classes: {
								  root: classes.input,
								  input: classes.placeholder,
								  underline: classes.underline,
								  error: classes.error,
							  }
							  }}
							  onChange={e => setRegisterValue({newPass2:e.target.value})}
							/>
						</Grid>

						<Button disabled={isLoading} className={[classes.loginButton,classes.recoverButton].join(' ')} variant="contained" color="secondary" onClick={() => tryRegister()}>
							{isLoading && <img src={require('../../Images/loading.svg')} height="24px" width="24px" className={classes.loading} alt="loading"/>}
							{isLoading ? "LOADING..." : "CREATE ACCOUNT"}
						</Button>
						<Button className={[classes.loginButton,classes.goBackButton].join(' ')} variant="contained" color="secondary" onClick={goToInit}>Go back</Button>


			</Box>

			  <Box className={classes.loginGrow} />

			  <Box className={classes.initFooter}>
				  <Box className={classes.spacer} />
				  <Typography className={classes.spanRegister} variant="caption">
					  Already have an account ?
						  <MLink
							  onClick={goToInit}
							  component="button"
							  color="secondary"
							  variant="caption" className={classes.signUp}>
						    LOGIN
						  </MLink>
				  </Typography>

				  <Typography variant="caption" className={classes.spanForgot} onClick={() => navigate('/')}>
					  Terms & Conditions
				  </Typography>
			  </Box>


		</Box>
	)
}

const mapStateToProps = (state) => {
	const register = registerSelector(state)
    return {
		isLogged: isLoggedSelector(state),
		isLoading: isLoadingSelector(state),
        ...register
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
	setRegisterValue,
	tryRegister,
	resetRegisterReducer
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
