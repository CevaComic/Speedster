import React from 'react'
import useSlideClass from '../Home/Home.classes'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import Transition from '../Slider/Transition'
import CourierProfileContent from './CourierProfileContent'
import { useParams } from 'react-router-dom'

export default props => {

	const slide = useSlideClass()
	const { id } = useParams()

	return (
		<Dialog
			classes={{
				root: slide.myPacksRoot,
				paper: slide.myPacksPaper,
				container: slide.myPacksContainer,
			}}
			transitionDuration={{enter:500,exit:500}}
			PaperProps={{
				elevation: 0,
			}}
			fullWidth={true}
			maxWidth={false}
			disableBackdropClick
	        open={id > 0}
	        TransitionComponent={Transition}
	        keepMounted={false}
      >
        <CourierProfileContent />
      </Dialog>
	)
}
