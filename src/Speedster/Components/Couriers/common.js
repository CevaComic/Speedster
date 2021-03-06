import React from 'react'
import Icon from './Icon'
import { defaultAvatar, icons } from '../../Images'
import CourierRow from './CourierRow'
import ListRow from './ListRow'
import { navigate } from '../../Utils'

export const renderVehicles = vehicles => vehicles.map(({vehicle,id,description,type,...rest},index) => {

	const path = window.location.pathname + '/' + id

	return (
		<ListRow
			key={id}
			id={id}
			type={type}
			title="Vehicle"
			value={vehicle}
			description={description}
			icon={rest.active ? icons.activevehicle : icons.vehicle}
			isClickable
			onClick={() => navigate(path)}
			black={index % 2 === 0}
		/>
	)
})

export const getVehicleImage = (vehicles, id) => {
	let vehicle = vehicles.filter(vehicle => vehicle.id === id)[0]

	if(!vehicle)
		return null
	return vehicle.picture ? 'https://speedster.cristi.club/media/' + vehicle.picture : defaultAvatar
}

export const getVehicleId = (vehicles, id) => {
	let vehicle = vehicles.filter(vehicle => vehicle.id === id)[0]
	if(!vehicle)
		return null
	return vehicle
}

export const renderVehicle = type => {
    return <Icon type={type}/>
}

export const renderCouriers = couriers => couriers.map((courier, index) =>
	<CourierRow courier={courier} key={courier.id} black={index % 2 === 0}/>
)

export const renderCouriersAround = couriers => couriers.map((courier, index) =>
	<CourierRow courier={courier} key={courier.id} black={index % 2 === 0} place={index+1}/>
)

export const renderCouriersSendPack = couriers => couriers.map((courier, index) =>
	<CourierRow courier={courier} key={courier.id} black={index % 2 === 0} sendpack/>
)
