import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { setTemporaryValue } from '../../Actions'
import { searchValueSelector } from '../../Selectors'
import useClasses from './Couriers.classes'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { StylesProvider } from '@material-ui/core/styles'

const Search = props => {

	const classes = useClasses()
	const { setTemporaryValue, searchValue } = props

	return (
		<StylesProvider injectFirst>
			<div className={classes.search}>
			<div className={classes.searchIcon}>
			  <SearchIcon />
			</div>
			<ClickAwayListener touchEvent={false} onClickAway={() => searchValue !== '' && setTemporaryValue({searchValue:''})}>
				<InputBase
				  placeholder="Search couriers…"
				  onChange={e => setTemporaryValue({searchValue:e.target.value})}
				  value={searchValue}
				  classes={{
					  root: classes.inputRoot,
					  input: [classes.primaryText,classes.inputInput].join(' '),
				  }}
				/>
			</ClickAwayListener>
		  </div>
		</StylesProvider>

	)
}

const mapStateToProps = (state) => {
    return {
        searchValue: searchValueSelector(state),
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    setTemporaryValue
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Search)
