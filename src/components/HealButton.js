import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    background: '#2dbf59',
    color: 'white',
  },

});

function HealButton(props) {
  const { classes } = props;
  return (

      <Fab aria-label="Heal" className={classes.fab}>
        <Icon>healing</Icon>
      </Fab>

  );
}

HealButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HealButton);
