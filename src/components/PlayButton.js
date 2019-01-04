import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';

// const playButtonStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     margin: '0 auto',
//   },
// });

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '0 auto',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function PlayButton(props) {
  const { classes, startGame } = props;
  // const buttonClasses = playButtonStyles();
  return (

      <Button variant="contained" className={classes.button} onClick={startGame}>
        Let's play!
        <Icon className={classes.rightIcon}>play_arrow</Icon>
      </Button>

  );
}

PlayButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayButton);