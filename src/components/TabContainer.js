import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const style = theme =>({
  tab:{
    display: 'flex',
    padding: 8 * 3,
  }

})

function TabContainer(props) {
  const {classes} = props;
  return (
    <Typography component="div" className={classes.tab}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default withStyles(style)(TabContainer);
