import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import useClasses from './Profile.classes'
import Icon from './Icon'
import { StylesProvider } from '@material-ui/core/styles'

export default ({ title, value, icon, black = false, onClick = () => null }) => {

	const classes = useClasses()

	return (
		<StylesProvider injectFirst>
			<ListItem classes={{container: black ? classes.listItemBlack : classes.listItemWhite,root:classes.listItem}}>
			  <Icon icon={icon} />
			  <ListItemText primary={title} secondary={value || "not set yet"}
				  classes={{
					  primary: classes.primaryText,
					  secondary: classes.secondaryText
				  }}
			  />
			  <ListItemSecondaryAction>
			  </ListItemSecondaryAction>
			</ListItem>

		</StylesProvider>
	)
}
