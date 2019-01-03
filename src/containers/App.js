import { connect } from "react-redux";
import AppComponent from "../components/App.js";
import { appActions } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const buttonText =
    state.appReducer.gameName + "" + state.appReducer.clickCounter;
  return {
    buttonText
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(appActions.appClick());
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
