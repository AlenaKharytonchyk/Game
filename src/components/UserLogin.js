import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { loginActions } from "../actions";

const styles = theme => ({
  startGame: {
    margin: theme.spacing.unit,
    color: "white",
    background: "#f44336"
  },
  cancelGame: {
    margin: theme.spacing.unit,
    color: "white",
    background: "#ef5350"
  },
  textField: {
    borderColor: "#ce741a",
    color: "#ce741a"
  },
  formLabel: {
    marginTop: theme.spacing.unit * 2,
  }
});
class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", male: false, female: false };
  }

  onUserNameChange(event) {
    const userName = event.target.value;
    this.setState({ userName });
  }

  onGenderChange(gender) {
    this.setState({ male: gender === "male", female: gender === "female" });
  }

  onSubmit() {
    const { saveNewUser } = this.props;
    const { userName, male } = this.state;

    saveNewUser(userName, male ? 'male' : 'female');
  }

  render() {
    const { showUserDialog, closeUserDialog, classes } = this.props;
    const { userName, male, female } = this.state;
    const disableSubmit = userName === "" || (!male && !female);
    return (
      <div>
        <Dialog open={showUserDialog} onClose={closeUserDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Первому игроку приготовиться</DialogTitle>
          <DialogContent>
          <FormGroup>
            <FormLabel component="legend" className={classes.formLabel}>Чтобы начать игру, введите имя</FormLabel>
            <TextField
              autoFocus
              className={classes.textField}
              margin="dense"
              id="name"
              label="Позвольте представиться:"
              type="text"
              error
              onChange={event => this.onUserNameChange(event)}
              fullWidth
            />
            <FormLabel component="legend" className={classes.formLabel}>Выбирите пол персонажа:</FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    checked={male}
                    onChange={() => this.onGenderChange("male")}
                    value="male"
                  />
                }
                label="М"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={female}
                    onChange={() => this.onGenderChange("female")}
                    value="female"
                  />
                }
                label="Ж"
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeUserDialog} className={classes.cancelGame} variant="contained">
              Ой, я передумал(
            </Button>
            <Button
              disabled={disableSubmit}
              onClick={() => this.onSubmit()}
              className={classes.startGame}
              variant="contained"
            >
              Ну давайте начнём!
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
  closeUserDialog: PropTypes.func.isRequired
};

UserLogin.defaultProps = {
  showUserDialog: false
};

const mapStateToProps = (state) => {
  const showUserDialog =
    state.userLoginReducer.showUserDialog;
  return {
    showUserDialog
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveNewUser: (userName, gender) => {
      dispatch(loginActions.submitDialog(userName, gender));
    },
    closeUserDialog: () => {
      dispatch(loginActions.cancelDialog());
    }
  };
};

const UserLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);

export default withStyles(styles)(UserLoginContainer);
