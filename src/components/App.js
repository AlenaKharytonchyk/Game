import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const App = props => (
  <div>
    <Button color="primary" variant="contained" onClick={props.onClick}>
      {props.buttonText}
    </Button>
  </div>
);

App.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

App.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default App;
