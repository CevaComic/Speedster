import React from 'react'
import GoogleMapReact from 'google-map-react'
import Box from '@material-ui/core/Box'
import useClasses from '../Home.classes'
import Badge from '@material-ui/core/Badge'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { setMyPosition } from '../../../Actions'
import { myPositionSelector,onlineCouriersSelector } from '../../../Selectors'
import { defaultAvatar } from '../../../Images'
import { usePosition } from '../../../Utils'

const renderMarkers = (markers,setCenter) => markers.map((courier,index) => {

	const { lat, lng } = courier
	const onClick = () => setCenter({lat:parseFloat(lat),lng:parseFloat(lng)})

	return (
			<Badge
				key={courier.id}
				onClick={onClick}
				badgeContent={index+1}
				color="secondary"
				overlap="circle"
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				lat={lat || null}
				lng={lng || null}
			>
			<Box />
			</Badge>
	)
})

const GoogleMap = props => {

	const { setMyPosition, lat, lng, avatar, onlineCouriers } = props
	const position = usePosition()
	const classes = useClasses()

	const [center, setCenter] = React.useState({lat:46.068673, lng:23.56277})

	React.useEffect(() => {
		setMyPosition(position)
	},[position, setMyPosition])

	return (
		<Box className={classes.googleMap}>
			<GoogleMapReact
	          bootstrapURLKeys={{ key: 'AIzaSyDMYycZaGY614AAtOeEUpScNnkiOAQ9EV0' }}
	          defaultZoom={14.6}
			  center={center}
	        >
				{renderMarkers(onlineCouriers,setCenter)}
				{
					lat && lng && (
						<Box lat={lat} lng={lng} className={classes.gBox}>
							<img alt="avatar" src={avatar ? 'https://speedster.cristi.club/media/' + avatar : defaultAvatar} className={classes.gAvatar}/>
						</Box>
					)
				}
			</GoogleMapReact>
		</Box>
    )

}

const mapStateToProps = (state) => {
	const data = myPositionSelector(state)
    return {
		...data,
		onlineCouriers: onlineCouriersSelector(state),
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
	setMyPosition
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap)
