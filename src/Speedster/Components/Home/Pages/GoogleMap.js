import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import GoogleMapReact from 'google-map-react'
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { setTemporaryValue } from '../../../Actions'


const mapStyles = {display: 'flex',width: '100%',height: '240px'}

const onlineCouriers = [{
	displayName: 'Gigel Fronel',
	vehicle: 2,
	id: 1,
	lat: '46.07',
	lng: '23.55'
},{
	displayName: 'Alt Gigel',
	vehicle: 5,
	id: 2,
	lat: null,
	lng: null
},
{
	displayName: 'Gigeloi',
	vehicle: 2,
	id: 3,

	lat: '46.07',
	lng: '23.56'
}]

const renderMarkers = (markers,setTemporaryValue) => markers.map((courier,index) => {
	const { lat, lng } = courier
	return (
			<Badge
				onClick={() => setTemporaryValue({viewModalProfile:courier.id})}
				badgeContent={index+1}
				color="secondary"
				overlap="circle"
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				lat={lat}
				lng={lng}
			>
			<Box />
			</Badge>
	)
})

const GoogleMap = props => {

	const { setTemporaryValue } = props

	return (
		<Box style={mapStyles}>
			<GoogleMapReact
	          bootstrapURLKeys={{ key: 'AIzaSyDMYycZaGY614AAtOeEUpScNnkiOAQ9EV0' }}
	          defaultCenter={{ lat: 46.071686, lng: 23.556985}}
	          defaultZoom={15}
	        >
				{renderMarkers(onlineCouriers,setTemporaryValue)}
			</GoogleMapReact>
		</Box>
    )

}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    setTemporaryValue
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap)
