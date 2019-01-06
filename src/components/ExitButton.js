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

});

function ExitButton(props) {
  const { classes, onClick } = props;
  return (

      <Fab aria-label="Attack" color='default' className={classes.fab} onClick={onClick}>
        <Icon>directions_run</Icon>
      </Fab>

  );
}

ExitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExitButton);
