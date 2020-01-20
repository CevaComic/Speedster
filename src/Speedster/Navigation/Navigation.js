import React from "react"
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { Home, Footer, About, Init, Register, Notification, ForgotPassword, Header, Profile } from '../Components'
import useClasses from './Navigation.classes'
import { isMobileOnly } from 'react-device-detect'
import { history } from '../Utils/navigate'
import PrivateRoute from './PrivateRoute'
import { isLoggedSelector } from '../Selectors'
import '../Themes/Global.css'

function Navigation(props) {

	const classes = useClasses()
	const { isLogged } = props

	// if(!isMobileOnly)
	// 	return (
	// 		<div>
	// 			This app works only on mobile
	// 		</div>
	// 	)

	return (
		<Router history={history}>
			<Notification />

			{ isLogged && <Header /> }

			<main className={[classes.rootContainer,isLogged && classes.logged].join(' ')}>
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/forgot/:id/:hash" component={ForgotPassword} />
					<Route path="/forgot" component={ForgotPassword} />
					<PrivateRoute path="/about" component={About} />
					<PrivateRoute path="/home" component={Home} />
					<PrivateRoute path="/profile" component={Profile} />
					<Route path="/" render={props => (isLogged ? <Redirect to={{pathname:'/home'}} /> : <Init {...props} />)} />

				</Switch>
			</main>

			{ isLogged && <Footer /> }

		</Router>
	)
}

const mapStateToProps = (state) => {
    return {
        isLogged: isLoggedSelector(state)
    }
}

export default connect(mapStateToProps)(Navigation)
