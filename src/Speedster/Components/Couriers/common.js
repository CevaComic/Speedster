import React from 'react'
import Icon from './Icon'
import { vehicles, defaultAvatar, icons } from '../../Images'
import CourierRow from './CourierRow'
import DialogContent from '@material-ui/core/DialogContent'
import useClasses from '../Profile/Profile.classes'
import ListRow from './ListRow'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { navigate, goBack, contact } from '../../Utils'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

export const renderVehicles = vehicles => vehicles.map(({vehicle,id,description,...rest},index) => {

	console.log('rest', rest)
	const path = window.location.pathname + '/' + id

	return (
		<ListRow
			key={id}
			id={id}
			title="Vehicle"
			value={vehicle}
			description={description}
			icon={icons.vehicle}
			isClickable
			onClick={() => navigate(path)}
			black={index % 2 !== 0}
		/>
	)
})

export const getVehicleImage = (vehicles, id) => {
	let vehicle = vehicles.filter(vehicle => vehicle.id === id)[0]
	if(!vehicle)
		return null
	return vehicle.image ? 'https://speedster.cristi.club/media/' + vehicle.image : defaultAvatar
}

export const renderVehicle = vehicle => {
    const car = vehicles[vehicle] || null
    if (car !== null)
        return <Icon icon={car}/>
    return null
}

export const renderCouriers = couriers => couriers.map((courier, index) =>
	<CourierRow courier={courier} key={courier.id} black={index % 2 === 0}/>
)

export const renderCouriersAround = couriers => couriers.map((courier, index) =>
	<CourierRow courier={courier} key={courier.id} black={index % 2 === 0} place={index+1}/>
)
