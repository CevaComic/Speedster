import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Typography'
import useClasses from './About.classes'
import { aboutImage,cristi,eubooks,eumail,euphone } from '../../Images'

function About(props) {

	const classes = useClasses()

    return (
		<Box>
			<Box className={classes.about}>
				<img src={aboutImage} width="100%" className={classes.background}/>
				<Box className={classes.aboutInner}>
					<Box className={classes.euBox}>
						<img src={cristi} className={classes.eu} />
					</Box>
					<Box className={classes.euTexts}>
						<Typography className={classes.euName}>
							BOGDAN REMUS CRISTIAN
						</Typography>
						<Typography className={classes.euDev}>
							Dev.
						</Typography>
					</Box>
				</Box>
			</Box>

			<Box className={classes.euInfo}>
				<Paper className={classes.euInfoRow}>
					<a href="tel:0723080379">
						<img src={euphone} width="32px" height="32px"/>
					</a>
					<Typography>
						Mobile
					</Typography>
				</Paper>

				<Paper className={classes.euInfoRow}>
					<a href="mailto:cevacomic@gmail.com">
						<img src={eumail} width="32px" height="32px"/>
					</a>
					<Typography>
						E-mail
					</Typography>
				</Paper>
			</Box>

			<Box>

			</Box>
		</Box>
	)
}

const mapStateToProps = (state) => {
    return {
        // var: selector(state)
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    // actions
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(About)
