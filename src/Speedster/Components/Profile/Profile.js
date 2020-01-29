import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useClasses from './Profile.classes'
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded'
import List from '@material-ui/core/List'
import ListRow from './ListRow'
import Schedule from './Schedule'
import { loginSelector, isLoadingProfileSelector, showNotificationsSelector } from '../../Selectors'
import { doLogout, setUpdateProfileValue, setSettingsValue, uploadAvatar,changeVehicleActive } from '../../Actions'
import moment from 'moment'
import ListSubheader from '@material-ui/core/ListSubheader'
import {isLoadingIcon,icons,defaultAvatar} from '../../Images'
import AddNewCar from './AddNewCar'
import CarRow from './CarRow'
import MyCars from './MyCars'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const renderCarsTemp = props => {

	const { vehicles,changeVehicleActive,onClose,setUpdateProfileValue } = props

	return vehicles.map((vehicle,index) => (
		<CarRow
			onClick={() => {setUpdateProfileValue({working:true});changeVehicleActive(vehicle.id,true);onClose()}}
			{...vehicle}
			title="Vehicle"
			key={vehicle.id}
			black={index % 2 !== 0}
		/>
	))
}

function Profile(props) {

	const classes = useClasses()
	var upload,newCourier
	const { vehicles, displayName, firstName, lastName, email, phone, city, address, courier, outside, working,memberSince, avatar, share, becomeCourier } = props
	const { doLogout, setUpdateProfileValue, isLoading, showNotifications, setSettingsValue, uploadAvatar } = props

	const [vehicle, setVehicle] = React.useState(false)

	const renderAvatar = () => {
		if(isLoading.avatar)
			return isLoadingIcon
		return avatar ? 'https://speedster.cristi.club/media/' + avatar : defaultAvatar
	}

    return (
		<Box className={classes.profile}>
			<Box className={classes.list}>
				<Box className={classes.avatarBox}>
					<Box className={classes.avatarImageBox} onClick={() => upload.click()}>
						<img src={renderAvatar()} className={classes.avatar} />
						<PhotoCameraRoundedIcon className={classes.cameraIcon} color="primary"/>
						<input
							type="file"
							accept="image/x-png,image/jpeg,image/gif"
							className={classes.uploadInput}
							ref={ref => upload = ref}
							onChange={e => uploadAvatar(e.target.files[0])}
						/>
					</Box>

					<Box className={classes.avatarBoxInner}>
						<Typography color="primary" variant="h6" className={classes.memberName}>
							{displayName}
						</Typography>
						<Typography className={classes.memberSince}>
							member since {moment(memberSince).year()}
						</Typography>
						<Button variant="contained" size="small" color="primary" classes={{root: classes.logout}} onClick={() => doLogout()}>
							LOGOUT
						</Button>
					</Box>
				</Box>
			</Box>


			<List>
				<ListSubheader className={classes.stickHeader}>User settings</ListSubheader>
				<ListRow
					title="Last name"
					value={lastName}
					label="lastName"
					icon={icons.user} black
					isLoading={isLoading.lastName}
				/>
				<ListRow
					title="First name"
					value={firstName}
					label="firstName"
					icon={icons.user}
					isLoading={isLoading.firstName}
				/>
				<ListRow
					title="City"
					value={city}
					label="city"
					icon={icons.city} black
					isLoading={isLoading.city}
				/>
				<ListRow
					title="Address"
					value={address}
					label="address"
					icon={icons.address}
					isLoading={isLoading.address}
				/>
				<ListRow
					title="Phone"
					value={phone}
					label="phone"
					icon={icons.phone} black
					isLoading={isLoading.phone}
				/>
				<ListRow
					title="E-mail"
					value={email}
					label="email"
					icon={icons.mail}
					isLoading={isLoading.email}
				/>
				<ListRow
					title="Notifications" value={showNotifications ? "On" : "Off"}
					icon={icons.notification} black toggle
					checked={showNotifications}
					onClick={() => setSettingsValue({showNotifications:!showNotifications})}
				/>
				{
					courier ? (
						<>
						<ListSubheader className={classes.stickHeader}>Courier settings</ListSubheader>
						<ListRow
							title="Share your e-mail and phone number"
							value={share ? "Yes" : "No"}
							icon={icons.status} toggle checked={share}
							onClick={() => setUpdateProfileValue({share:!share})}
							isLoading={isLoading.share}
							black
						/>
						<ListRow
							title="Working status" value={working ? "At work" : "Break time"}
							icon={icons.status} toggle checked={working}
							onClick={() => working ? setUpdateProfileValue({working:!working}) : setVehicle(true)}
							isLoading={isLoading.working}
						/>
						<ListRow
							title="Shipping outside city"
							value={outside ? "Yes" : "No"}
							icon={icons.outside} toggle checked={outside} black
							onClick={() => setUpdateProfileValue({outside:!outside})}
							isLoading={isLoading.outside}
						/>
						<ListRow title="Prices" value="1$/kg + 0.5$/km outside city" icon={icons.price}
							isLoading={isLoading.price}
						/>
						<Schedule
							isLoading={isLoading.schedule}
							black
						/>
						<MyCars />
						<ListSubheader className={classes.stickHeader}>Other</ListSubheader>
						<AddNewCar />
						</>
					) : (
						<>
						<ListSubheader className={classes.stickHeader}>Become a courier</ListSubheader>
						{
							becomeCourier ? (
								<ListRow title="Pending" value="You're request is being analized" icon={icons.vehicle} black toggle checked={false}/>
							) : (
								<AddNewCar isFirstCourier/>
							)
						}
						</>
					)
				}
			</List>
			<Dialog
	          open={vehicle}
	          TransitionComponent={Transition}
	          keepMounted
	  		PaperProps={{
	  			classes:{
					root: classes.dialogChoseVehicle
				}
	  		}}
	          onClose={() => setVehicle(false)}
	        >
	          <DialogTitle>Important</DialogTitle>
	          <DialogContent classes={{root: classes.dialogContentVehicle}}>
	            <DialogContentText>
	              {/* {
					  renderCars(vehicles,() => { setUpdateProfileValue({working:true}) ; setVehicle(false)})
				  } */}

				  <Vehicles onClose={() => setVehicle(false)}/>
	            </DialogContentText>
	          </DialogContent>
	          <DialogActions>
	            <Button onClick={() => setVehicle(false)} color="secondary" variant="contained">
	              Cancel
	            </Button>
	          </DialogActions>
	        </Dialog>
		</Box>
	)
}

const mapStateToProps = (state) => {
	const userInfo = loginSelector(state)
    return {
        ...userInfo,
		vehicles: state.myVehicle,
		isLoading: isLoadingProfileSelector(state),
		showNotifications: showNotificationsSelector(state),
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    doLogout,
	setUpdateProfileValue,
	setSettingsValue,
	uploadAvatar,
	changeVehicleActive
}, dispatch))

const Vehicles = connect(mapStateToProps, mapDispatchToProps)(renderCarsTemp)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
