import React from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import useClasses from './Couriers.classes'

export const Icon = ({ icon }) => {
	const classes = useClasses()
	return (
		<ListItemIcon classes={{root: classes.icon}}>
			<img src={icon} width="42px" height="25px"/>
		</ListItemIcon>
	)
}

export default Icon
