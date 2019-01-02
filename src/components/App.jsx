import React from "react";
import Button from "@material-ui/core/Button";

const App = props => (
  <div>
    <Button color='primary' variant='contained'>{props.name}</Button>
  </div>
);
export default App;
