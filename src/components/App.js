import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Landing from "./Landing";
import { connect } from "react-redux";
import GameScreen from "./GameScreen";

const App = props => {
  const { userName } = props;
  let element;
  if (typeof userName === "undefined") {
    element = <Landing />;
  } else {
    element = <GameScreen/>;
  }
  return element;
};

App.propTypes = {
  userName: PropTypes.string
};

App.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  const userName = state.userLoginReducer.userName;
  return {
    userName
  };
};

export default connect(
  mapStateToProps,
)(App);
