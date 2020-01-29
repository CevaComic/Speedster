import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'
import useClasses from './Couriers.classes'
import {useHistory} from 'react-router-dom'
import Search from './Search'
import { isLoadingIcon } from '../../Images'
import CourierProfile from './CourierProfile'
import { searchValueSelector } from '../../Selectors'
import { renderCouriers } from './common'

const Couriers = props => {

	const classes = useClasses()
	const history = useHistory()
	const { searchValue } = props
	const isBack = history.location.pathname.split('/')[2] !== undefined
	// dev
	const onlineCouriers = [{
		displayName: 'Gigel Fronel',
		vehicle: 5,
		id: 1,
	},
	{
		displayName: 'Gigel Vasilescu',
		vehicle: 1,
		id: 2,
	}]

	const offlineCouriers = []
	const searchCouriers = []
	const isLoading = true
	// end dev

    return (
		<Box className={classes.couriers}>
			<Box className={[classes.list,isBack?classes.listBack:null].join(' ')}>
				<Search />

				{
					searchValue === '' ? (
						<List>
							{
								onlineCouriers.length ? (
									<>
										<ListSubheader className={classes.stickHeader}>Online couriers</ListSubheader>
										{renderCouriers(onlineCouriers)}
									</>
								) : (
									<Box className={classes.noOnline}>
										No online couriers in your city
									</Box>
								)
							}

							{
								offlineCouriers.length ? (
									<>
										<ListSubheader className={classes.stickHeader}>Offline couriers</ListSubheader>
										{renderCouriers(offlineCouriers)}
									</>
								) : null
							}
						</List>
					) : (
						<List>
							<ListSubheader className={[classes.stickHeader,classes.resultsText].join(' ')}>Search results{isLoading?<img src={isLoadingIcon} width="32" height="32" />:null}</ListSubheader>
							{
								!isLoading && (
									<>
										{renderCouriers(searchCouriers)}
									</>
								)
							}
						</List>
					)
				}
			</Box>


			<CourierProfile />
		</Box>
	)
}

const mapStateToProps = (state) => {
    return {
		searchValue: searchValueSelector(state)
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({

}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Couriers)
