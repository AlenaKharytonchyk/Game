import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    color: 'white',
  },
  icon: {
    transform: 'rotate(175deg)'
  }
});

function AttackButton(props) {
  const { classes, onClick } = props;
  return (
      <Fab aria-label="Attack" color='secondary' className={classes.fab} onClick={onClick}>
        <Icon className={classes.icon}>colorize</Icon>
      </Fab>
  );
}

AttackButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(AttackButton);
