import { connect } from "react-redux";
import UserLogin from "../components/UserLogin";
import { loginActions } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const showUserDialog =
    state.userLoginReducer.showUserDialog;
  return {
    showUserDialog
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveNewUser: (userName) => {
      dispatch(loginActions.submitDialog(userName));
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

export default UserLoginContainer;
