import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '0 auto',
    position: 'relative',
    top: '-50%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function PlayButton(props) {
  const { classes, startGame } = props;
  return (
      <Button variant="contained" className={classes.button} onClick={startGame}>
        Начнём игру!
        <Icon className={classes.rightIcon}>play_arrow</Icon>
      </Button>
  );
}

PlayButton.propTypes = {
  classes: PropTypes.object.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default withStyles(styles)(PlayButton);
