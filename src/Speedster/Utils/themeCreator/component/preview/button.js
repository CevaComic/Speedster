import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
});

class PreviewButton extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Button className={classes.button}>Default</Button>
          <Button color="primary" className={classes.button}>
            Primary
          </Button>
          <Button color="secondary" className={classes.button}>
            Secondary
          </Button>
          <Button disabled className={classes.button}>
            Disabled
          </Button>
          <Button href="#text-buttons" className={classes.button}>
            Link
          </Button>
        </div>
        <div className={classes.root}>
          <Button className={classes.button} variant="outlined">Default</Button>
          <Button color="primary" className={classes.button} variant="outlined">
            Primary
          </Button>
          <Button color="secondary" className={classes.button} variant="outlined">
            Secondary
          </Button>
          <Button disabled className={classes.button} variant="outlined">
            Disabled
          </Button>
          <Button href="#text-buttons" className={classes.button} variant="outlined">
            Link
          </Button>
        </div>
        <div className={classes.root}>
          <Button className={classes.button} variant="contained">Default</Button>
          <Button color="primary" className={classes.button} variant="contained">
            Primary
          </Button>
          <Button color="secondary" className={classes.button} variant="contained">
            Secondary
          </Button>
          <Button disabled className={classes.button} variant="contained">
            Disabled
          </Button>
          <Button href="#text-buttons" className={classes.button} variant="contained">
            Link
          </Button>
        </div>
        <div className={classes.root}>
          <Fab color="primary" className={classes.button} >
            <AddIcon />
          </Fab>
          <Fab color="secondary" className={classes.button} >
            <DeleteIcon />
          </Fab>
          <Fab disabled className={classes.button} >
            <NavigationIcon />
          </Fab>
          <Fab href="#text-buttons" className={classes.button} >
            Link
          </Fab>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PreviewButton);
