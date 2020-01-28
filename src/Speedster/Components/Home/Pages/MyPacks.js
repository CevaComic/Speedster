import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import { navigate } from '../../../Utils'
import useClasses from '../Home.classes'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Transition from '../../Slider/Transition'

export default props => {

	const { page } = useParams()
	const classes = useClasses()
	const isForward = page && (page !== 'mypacks' && (page === 'sendpack' || page === 'couriersaround' || page === 'packrequests'))

	return (
		<Dialog
			classes={{
				root: classes.myPacksRoot,
				paper: classes.myPacksPaper,
				container: classes.myPacksContainer,
			}}
			transitionDuration={{enter:500,exit:500}}
			PaperProps={{
				elevation: 0,
			}}
			fullWidth={true}
			maxWidth={false}
			disableBackdropClick
        open={page === 'mypacks' || isForward}
        TransitionComponent={Transition}
        keepMounted
      >
        {/* <DialogTitle>{"TITLU COMPONENTA"}</DialogTitle> */}
        <DialogContent style={{backgroundColor: 'red',zIndex: 10}} className={[classes.myPages,isForward ? classes.goBack : ''].join(' ')}>
			MY PACKS
			<br />
			<Link to="/home/sendpack">
				GO TO SEND PACK
			</Link>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={() => navigate('/home')} color="secondary">
            INAPOI
          </Button>
        </DialogActions> */}
      </Dialog>
	)
}
