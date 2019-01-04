import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HealButton from './HealButton';
import AttackButton from './AttackButton';
import ExitButton from './ExitButton';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '10px 0'
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
  }
});

function GameScreen(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <div className={classes.actionContainer}>
        <AttackButton/>
        <HealButton/>
        <ExitButton/>
        </div>
      </Paper>
    </div>
  );
}

GameScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameScreen);
