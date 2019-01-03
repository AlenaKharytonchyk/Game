import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
    const { showUserDialog, saveNewUser, closeUserDialog} = this.props;
    const { userName} = this.state;
    return (
      <div>
        <Dialog open={showUserDialog} onClose={closeUserDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>To join this game, enter your name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="User name"
              type="text"
              onChange={this.onUserNameChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeUserDialog} color="secondary" variant="contained">
              Cancel
            </Button>
            <Button onClick={()=>saveNewUser(state)} color="primary" variant="contained">
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

export default UserLogin;
