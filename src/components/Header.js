import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes, startGame, userName } = props;
  const inProgress = typeof(userName)!='undefined';
  return (
    <div className={classes.root}>
      <AppBar position="static">
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
