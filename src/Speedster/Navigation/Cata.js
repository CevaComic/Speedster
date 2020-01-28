import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'

const useClasses = makeStyles(theme => ({
    root: {
        width: '100%',
		height: '100%',
		backgroundColor: 'royalblue',
		position: 'absolute',
		right: '-105%',
		transition: 'all 0.5s',
    },
	transform: {
		right: 0,
	}
}))

export default () => {

	const classes = useClasses()
	const [t, setT] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => setT(true), 1000)
	})

	const numeMulte = [{
		nume: 'ion',
		prenume: 'vasile',
	},{
		nume: 'ioana',
		prenume: 'maria',
	}]

	const renderLista = () => {
		return numeMulte.map(pers => {
			return (
				<div>
					{pers.nume} si {pers.prenume}
				</div>
			)
		})
	}

	return (
		<div className={[classes.root,t && classes.transform].join(' ')}>

			<Button onClick={() => setT(false)}>Ceva</Button>
			{renderLista()}
		</div>
	)
}
