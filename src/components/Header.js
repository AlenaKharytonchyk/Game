import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  appbar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
},
  grow: {
    flexGrow: 1,
  },
};

function Header(props) {
  const { classes, startGame, userName } = props;
  const inProgress = typeof(userName)!='undefined';
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Game Name
          </Typography>
          {inProgress ? (<span>{userName}</span>) : <Button color="inherit" onClick = {startGame}>Let's play!</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  startGame: PropTypes.func.isRequired,
  userName: PropTypes.string,
};
Header.defaultProps = {
  startGame: ()=> alert('Oops! The game is not done yet')
}

export default withStyles(styles)(Header);
