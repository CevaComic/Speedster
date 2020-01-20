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
import { loginSelector, isLoadingProfileSelector, showNotificationsSelector } from '../../Selectors'
import { doLogout, setUpdateProfileValue, setSettingsValue, uploadAvatar } from '../../Actions'
import moment from 'moment'
import ListSubheader from '@material-ui/core/ListSubheader'
import {isLoadingIcon,icons} from '../../Images'

function Profile(props) {

	const classes = useClasses()
	var upload
	const { displayName, firstName, lastName, email, phone, city, address, courier, outside, working,memberSince, avatar } = props
	const { doLogout, setUpdateProfileValue, isLoading, showNotifications, setSettingsValue, uploadAvatar } = props

	const renderAvatar = () => {
		if(isLoading.avatar)
			return isLoadingIcon
		return (avatar && avatar.length > 32)
			? 'https://speedster.cristi.club/media/' + avatar
			: require('../../Images/eu.jpg')
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
							title="Working status" value={working ? "At work" : "Break time"}
							icon={icons.status} toggle black checked={working}
							onClick={() => setUpdateProfileValue({working:!working})}
							isLoading={isLoading.working}
						/>
						<ListRow
							title="Shipping outside city"
							value={outside ? "Yes" : "No"}
							icon={icons.outside} toggle checked={outside}
							onClick={() => setUpdateProfileValue({outside:!outside})}
							isLoading={isLoading.outside}
						/>
						<ListRow title="Prices" value="1$/kg + 0.5$/km outside city" icon={icons.price} black
							isLoading={isLoading.price}
						/>
						<ListRow title="Schedule" value="Mon - Fri 08:00-16:00" icon={icons.schedule}
							isLoading={isLoading.schedule}
						/>
						<ListRow title="Vehicle" value="Ferrari Enzo" icon={icons.vehicle} black
							isLoading={isLoading.vehicle}
						/>
						</>
					) : (
						<>
						<ListSubheader className={classes.stickHeader}>Become a courier</ListSubheader>
						<ListRow title="Become a courier now" value="Apply to your new job" icon={icons.vehicle} black />
						</>
					)
				}
			</List>

		</Box>
	)
}

const mapStateToProps = (state) => {
	const userInfo = loginSelector(state)
    return {
        ...userInfo,
		isLoading: isLoadingProfileSelector(state),
		showNotifications: showNotificationsSelector(state),
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    doLogout,
	setUpdateProfileValue,
	setSettingsValue,
	uploadAvatar
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
