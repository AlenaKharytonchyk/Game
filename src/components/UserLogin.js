import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  startGame: {
    margin: theme.spacing.unit,
    color: 'white',
    background: 'rgba(206, 116, 26, 0.7)',
  },
  cancelGame: {
    margin: theme.spacing.unit,
    color: 'white',
    background: 'rgba(219, 109, 197, 0.7)',
  },
  textField: {
    borderColor: '#ce741a',
    color: '#ce741a',
  }


});
class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
  }
  onUserNameChange (event) {
    const userName = event.target.value;
    this.setState ({userName})
  }
  render() {
    const { showUserDialog, saveNewUser, closeUserDialog, classes} = this.props;
    const { userName} = this.state;
    return (
      <div>
        <Dialog open={showUserDialog} onClose={closeUserDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Ready Player One</DialogTitle>
          <DialogContent>
            <DialogContentText>To join this game, enter your name</DialogContentText>
            <TextField
              autoFocus
              className={classes.textField}
              margin="dense"
              id="name"
              label="User name"
              type="text"
              onChange={(event)=>this.onUserNameChange(event)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeUserDialog} className={classes.cancelGame} variant="contained">
              Cancel
            </Button>
            <Button onClick={()=>saveNewUser(userName)} className={classes.startGame} variant="contained">
              Start Game!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

UserLogin.propTypes = {
  showUserDialog: PropTypes.bool.isRequired,
  saveNewUser: PropTypes.func.isRequired,
  closeUserDialog: PropTypes.func.isRequired,
};

UserLogin.defaultProps = {
  showUserDialog: false,
};

export default withStyles(styles)(UserLogin);