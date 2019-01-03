import { connect } from "react-redux";
import header from "../components/Header";
import { loginActions } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const userName =
    state.userLoginReducer.userName;
  return {
    userName
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startGame: () => {
      dispatch(loginActions.openDialog());
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(header);

export default HeaderContainer;
