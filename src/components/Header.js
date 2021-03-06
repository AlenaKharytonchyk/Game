import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  appbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white"
  },
  grow: {
    flexGrow: 1
  },
  header: {
    display: 'none'
  }
};

function Header(props) {
  const { classes, startGame, userName } = props;
  const inProgress = typeof userName != "undefined";
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.appbar}>
        <Typography variant="h1" className={classes.header}>Учёные против покемонов, Alena Kharytonchyk, Science vs Pokemons</Typography>
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Учёные против покемонов
          </Typography>
          {inProgress ? (
            <Typography variant="h5" color="inherit">
              {userName}
            </Typography>
          ) : (
            <Button color="inherit" onClick={startGame}>
              Начнём игру!
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  startGame: PropTypes.func.isRequired,
  userName: PropTypes.string
};
Header.defaultProps = {
  startGame: () => alert("Oops! The game is not done yet")
};

export default withStyles(styles)(Header);
