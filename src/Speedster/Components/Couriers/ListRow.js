import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import useClasses from '../Profile/Profile.classes'
import Icon from '../Profile/Icon'
import VehicleIcon from './Icon'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { setTemporaryValue } from '../../Actions'
import { viewModalCarPictureSelector } from '../../Selectors'


const ListRow = ({ title, value, icon, black = false, isClickable = false, description = null, onClick = () => null, ...rest }) => {

	const { setTemporaryValue, id, type } = rest
	const classes = useClasses()
	if(title === 'Vehicle')
		onClick = () => setTemporaryValue({viewModalCarPicture:id})

	return (
		<ListItem onClick={() => isClickable && onClick()} div={!isClickable} button={isClickable} classes={{root:[classes.listItem,!black ? classes.listItemWhite : classes.listItemBlack].join(' ')}}>
		  <Icon icon={icon} />
		  <ListItemText primary={title} secondary={title === 'Vehicle' ? description : (value && value) || "not set"}
			  classes={{
				  primary: classes.primaryText,
				  secondary: classes.secondaryText
			  }}
		  />
		  { isClickable && (
				  <ListItemSecondaryAction>
					<IconButton edge="end" onClick={() => isClickable && onClick()}>
						{
							title === 'Vehicle' && (
								<VehicleIcon type={type}/>
							)
						}
						<ChevronRightIcon />
					</IconButton>
				  </ListItemSecondaryAction>
			  )
		  }
		</ListItem>
	)
}

const mapStateToProps = (state) => {
    return {
		viewModalCarPicture: viewModalCarPictureSelector(state),
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    setTemporaryValue
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(ListRow)
